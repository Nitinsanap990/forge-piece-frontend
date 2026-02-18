# Forge Piece - Color Management Guide

## Easy Color Customization

All website colors are managed from **ONE FILE**: `app/globals.css`

## How to Change Colors

Open `app/globals.css` and find the `:root` section. Change any color value there:

```css
:root {
  /* Background Colors */
  --forge-bg: #FFFFFF;              /* Main background (white) */
  --forge-surface: #F8F8F8;         /* Card/surface background (light grey) */
  --forge-card: #FFFFFF;            /* Card background (white) */
  
  /* Theme Colors - CHANGE THESE TO ADJUST YOUR THEME */
  --forge-primary: #000000;         /* Primary color (black) - used for main accents */
  --forge-secondary: rgb(226, 225, 225);  /* Secondary color (light grey) - used for highlights */
  --forge-text: #1F2937;            /* Main text color (dark grey) */
  --forge-text-light: #6B7280;     /* Light text color (medium grey) */
}
```

## Color Variables Explained

### Main Theme Colors (Change these to customize your theme)

| Variable | Current Value | Used For | Example Usage |
|----------|---------------|----------|---------------|
| `--forge-primary` | `#000000` (Black) | Main accent color, buttons, borders | Navbar buttons, category filters, icons |
| `--forge-secondary` | `rgb(226, 225, 225)` (Light Grey) | Secondary highlights | "PCE", "SHOWROOM", "MINDSET" text highlights |
| `--forge-text` | `#1F2937` (Dark Grey) | Main body text | Paragraph text, descriptions |
| `--forge-text-light` | `#6B7280` (Medium Grey) | Secondary text | Helper text, labels |

### Background Colors

| Variable | Current Value | Used For |
|----------|---------------|----------|
| `--forge-bg` | `#FFFFFF` (White) | Website background |
| `--forge-surface` | `#F8F8F8` (Light Grey) | Cards, surfaces |
| `--forge-card` | `#FFFFFF` (White) | Product cards |

## Quick Theme Changes

### Example: Change to Dark Theme
```css
:root {
  --forge-bg: #1a1a1a;
  --forge-surface: #2a2a2a;
  --forge-card: #2a2a2a;
  --forge-primary: #FFFFFF;
  --forge-secondary: #4a9eff;
  --forge-text: #FFFFFF;
  --forge-text-light: #a0a0a0;
}
```

### Example: Change to Blue Theme
```css
:root {
  --forge-bg: #FFFFFF;
  --forge-surface: #F0F4F8;
  --forge-card: #FFFFFF;
  --forge-primary: #2563EB;        /* Blue */
  --forge-secondary: #60A5FA;       /* Light Blue */
  --forge-text: #1F2937;
  --forge-text-light: #6B7280;
}
```

### Example: Change to Red/Black Theme
```css
:root {
  --forge-bg: #FFFFFF;
  --forge-surface: #F8F8F8;
  --forge-card: #FFFFFF;
  --forge-primary: #DC2626;        /* Red */
  --forge-secondary: #FCA5A5;       /* Light Red */
  --forge-text: #1F2937;
  --forge-text-light: #6B7280;
}
```

## Where Colors Are Used

### Primary Color (`--forge-primary` / Black)
- Navbar active states
- Button backgrounds
- Icon colors
- Border accents
- Category filters
- Main headings accent

### Secondary Color (`--forge-secondary` / Light Grey)
- Highlighted text in large headings (PCE, SHOWROOM, MINDSET, etc.)
- Special emphasis text
- Secondary accents

### Text Colors
- `--forge-text`: Main paragraph text, descriptions, body content
- `--forge-text-light`: Labels, helper text, secondary information

## Tips

1. **Save often**: After changing colors in `globals.css`, save the file and refresh your browser
2. **Consistency**: Use the same color values in RGB or HEX format (don't mix)
3. **Contrast**: Ensure text colors have enough contrast against backgrounds for readability
4. **Test**: Check all pages (Home, Shop, About, Contact) after changing colors

## Need Help?

If colors don't update:
1. Make sure you saved `app/globals.css`
2. Hard refresh your browser (Ctrl + Shift + R on Windows, Cmd + Shift + R on Mac)
3. Check that the CSS variable names match exactly (case-sensitive)

---

**That's it!** Change colors in `app/globals.css` only - the entire website will update automatically.
