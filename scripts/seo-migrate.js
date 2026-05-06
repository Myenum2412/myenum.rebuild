// scripts/seo-migrate.js
// This script replaces Next.js page metadata exports with the reusable SEO component.
// It scans all app/**/*.tsx files, extracts title & description (and keywords if present),
// swaps the Metadata import for the SEO component, and injects an <SEO .../> JSX element.

const fs = require('fs');
const path = require('path');

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  // Replace import
  content = content.replace(/import\s+type\s+\{\s*Metadata\s*\}\s+from\s+['"]next['"];/, "import SEO from '@/components/SEO';");

  const metaRegex = /export\s+const\s+metadata:\s+Metadata\s*=\s*\{([\s\S]*?)\};/m;
  const match = content.match(metaRegex);
  if (match) {
    const metaBody = match[1];
    // Extract title and description (simple string literals)
    const titleMatch = metaBody.match(/title:\s*['"]([^'"]+)['"]/);
    const descMatch = metaBody.match(/description:\s*['"]([^'"]+)['"]/);
    const keywordsMatch = metaBody.match(/keywords:\s*\[([\s\S]*?)\]/);
    const title = titleMatch ? titleMatch[1] : '';
    const description = descMatch ? descMatch[1] : '';
    const keywords = keywordsMatch ? keywordsMatch[1].trim().split(/\n\s*,?\s*/).filter(Boolean).map(s=>s.replace(/^['"]|['"]$/g, '')) : [];
    const seoProps = [];
    seoProps.push(`title="${title}"`);
    seoProps.push(`description="${description}"`);
    if (keywords.length) seoProps.push(`keywords={${JSON.stringify(keywords)}}`);
    const seoComponent = `<SEO ${seoProps.join(' ')} />`;
    // Insert SEO component just before the default export function (or after imports)
    const exportFnRegex = /export\s+default\s+function\s+([A-Za-z0-9_]+)\s*\(/;
    const insertPos = content.search(exportFnRegex);
    if (insertPos !== -1) {
      const before = content.slice(0, insertPos);
      const after = content.slice(insertPos);
      content = `${before}\n${seoComponent}\n${after}`;
    }
    // Remove the original metadata export
    content = content.replace(metaRegex, '');
    // Clean up possible double newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (fullPath.endsWith('.tsx')) processFile(fullPath);
  }
}

walk(path.resolve('app'));
