# VINOURA - Component Structure

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx              # Hero section with full-width banner
│   ├── NewArrivals.jsx       # Grid of new arrival items
│   ├── RunwayHighlights.jsx  # Horizontal slider for runway images
│   ├── FeaturedCouture.jsx   # 2-column layout with editorial content
│   ├── BrandStory.jsx        # Brand story section with images
│   └── Footer.jsx            # Footer with newsletter and social links
├── pages/
│   └── HomePage.jsx          # Main page combining all sections
├── App.jsx                   # Root component
├── main.jsx                  # Entry point
└── index.css                 # Tailwind CSS directives

```

## Image Structure

Currently using placeholder images from Unsplash. For production, replace with actual images:

### Recommended Image Structure:
```
public/
└── images/
    ├── hero/
    │   └── hero-banner.jpg (1920x1080 or larger)
    ├── new-arrivals/
    │   ├── item-1.jpg (800x1067 - 3:4 aspect ratio)
    │   ├── item-2.jpg
    │   └── ...
    ├── runway/
    │   ├── runway-1.jpg (1200x800 or larger)
    │   ├── runway-2.jpg
    │   └── ...
    ├── couture/
    │   └── featured-couture.jpg (1200x1600 - 3:4 aspect ratio)
    └── brand-story/
        ├── story-1.jpg (600x750 - 4:5 aspect ratio)
        ├── story-2.jpg
        └── story-3.jpg
```

### To Replace Placeholder Images:

1. **Hero.jsx**: Update the `backgroundImage` URL in the inline style
2. **NewArrivals.jsx**: Update the `image` property in the `items` array
3. **RunwayHighlights.jsx**: Update the `images` array URLs
4. **FeaturedCouture.jsx**: Update the `src` attribute in the img tag
5. **BrandStory.jsx**: Update the `images` array URLs

## Color Palette

- **Beige**: Soft, warm beige tones (#faf9f7 to #574b40)
- **Ivory**: Creamy ivory shades (#fefdfb to #976a3f)
- **Gold**: Elegant gold accents (#fef9e7 to #78350f)
- **Charcoal**: Deep charcoal grays (#f6f6f6 to #262626)

## Typography

- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

## Animations

All animations use Framer Motion:
- Fade-in on scroll
- Smooth hover effects
- Staggered animations for grid items
- Sliding transitions for runway carousel

## Responsive Breakpoints

- Mobile: Default (< 640px)
- Tablet: sm (≥ 640px)
- Desktop: lg (≥ 1024px)

