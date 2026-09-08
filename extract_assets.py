import os
from PIL import Image

src_path = r"C:\Users\khali\.gemini\antigravity\brain\c0fe77da-554e-4385-933e-713a984f05c0\.user_uploaded\media_1788888440702.jpg"
out_dir = r"c:\Users\khali\Downloads\portfolio\public\images"

os.makedirs(os.path.join(out_dir, "profile"), exist_ok=True)
os.makedirs(os.path.join(out_dir, "projects"), exist_ok=True)
os.makedirs(os.path.join(out_dir, "testimonials"), exist_ok=True)

img = Image.open(src_path)
W, H = img.size

# Crops based on 568x1024
# 1. Hero Arjun Portrait (including head, shoulders, gold orbit background)
hero_portrait_box = (290, 32, 490, 235)
hero_portrait = img.crop(hero_portrait_box)
hero_portrait = hero_portrait.resize((hero_portrait.width * 3, hero_portrait.height * 3), Image.LANCZOS)
hero_portrait.save(os.path.join(out_dir, "profile", "hero-portrait.webp"), "WEBP", quality=95)

# 2. About Arjun Laptop Photo (working at desk with gold signature)
about_photo_box = (38, 243, 150, 395)
about_photo = img.crop(about_photo_box)
about_photo = about_photo.resize((about_photo.width * 3, about_photo.height * 3), Image.LANCZOS)
about_photo.save(os.path.join(out_dir, "profile", "about-laptop.webp"), "WEBP", quality=95)

# 3. Project 1: Analytics Dashboard image
p1_box = (45, 535, 192, 598)
p1 = img.crop(p1_box)
p1 = p1.resize((p1.width * 4, p1.height * 4), Image.LANCZOS)
p1.save(os.path.join(out_dir, "projects", "analytics-dashboard.webp"), "WEBP", quality=95)

# 4. Project 2: SaaS Landing Page image
p2_box = (210, 535, 357, 598)
p2 = img.crop(p2_box)
p2 = p2.resize((p2.width * 4, p2.height * 4), Image.LANCZOS)
p2.save(os.path.join(out_dir, "projects", "saas-landing.webp"), "WEBP", quality=95)

# 5. Project 3: E-commerce Platform image
p3_box = (375, 535, 522, 598)
p3 = img.crop(p3_box)
p3 = p3.resize((p3.width * 4, p3.height * 4), Image.LANCZOS)
p3.save(os.path.join(out_dir, "projects", "ecommerce-platform.webp"), "WEBP", quality=95)

# 6. Testimonial avatars
# Card 1 avatar (Sarah)
s_box = (55, 810, 75, 830)
sarah = img.crop(s_box)
sarah = sarah.resize((120, 120), Image.LANCZOS)
sarah.save(os.path.join(out_dir, "testimonials", "sarah.webp"), "WEBP", quality=95)

# Card 2 avatar (Michael)
m_box = (220, 810, 240, 830)
michael = img.crop(m_box)
michael = michael.resize((120, 120), Image.LANCZOS)
michael.save(os.path.join(out_dir, "testimonials", "michael.webp"), "WEBP", quality=95)

# Card 3 avatar (Emily)
e_box = (383, 810, 403, 830)
emily = img.crop(e_box)
emily = emily.resize((120, 120), Image.LANCZOS)
emily.save(os.path.join(out_dir, "testimonials", "emily.webp"), "WEBP", quality=95)

print("Successfully extracted reference crops into public/images/")
