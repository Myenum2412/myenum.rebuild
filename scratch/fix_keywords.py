import re

path = '/root/myenum.rebuild/app/layout.tsx'
with open(path, 'r') as f:
    content = f.read()

# Refined keywords
refined_keywords = """  keywords: [
    "software development company",
    "best software development company",
    "custom software development",
    "SaaS development company",
    "web development company India",
    "mobile app development company",
    "digital marketing services",
    "SEO agency India",
    "software development company Salem",
    "web development Salem",
    "digital marketing Salem",
    "software development company Kerala",
    "web development Kerala",
    "software development company Bangalore",
    "software development UK",
    "software development Germany",
    "software development USA",
    "SaaS product development",
    "enterprise software solutions",
    "startup software development",
    "e-commerce website development",
    "UI UX design services",
    "React development services",
    "Node.js development services",
    "Python development services",
    "AI development company",
    "machine learning development",
    "cloud computing services",
    "The Doctor Pro",
    "clinic management software",
    "hospital management system",
  ],"""

# Pattern to match the entire keywords array from line 27 to 1532
# It starts with '  keywords: [' and ends with the first '  ],' after a long list of keywords
pattern = r'  keywords: \[\s+// Core Services.*?  \],'
new_content = re.sub(pattern, refined_keywords, content, flags=re.DOTALL)

with open(path, 'w') as f:
    f.write(new_content)

print("Replacement successful")
