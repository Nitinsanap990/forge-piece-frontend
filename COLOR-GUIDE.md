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
  
  /* Text Colors - CHANGE THESE TO CONTROL ALL TEXT */
  --forge-text-heading: #000000;    /* Main headings (H1, H2, H3) */
  --forge-text-body: #1F2937;       /* Body paragraphs & main content */
  --forge-text-muted: #6B7280;      /* Subtle/secondary text */
  --forge-text-emphasis: #000000;   /* Important/emphasized text */
  --forge-text-link: #000000;       /* Links & interactive text */
  --forge-text-inverse: #FFFFFF;    /* Text on dark backgrounds */
  --forge-text-label: #4B5563;      /* Labels & form text */
}
```

## Color Variables Explained

### Main Theme Colors (Change these to customize your theme)

| Variable | Current Value | Used For | Example Usage |
|----------|---------------|----------|---------------|
| `--forge-primary` | `#000000` (Black) | Main accent color, buttons, borders | Navbar buttons, category filters, icons |
| `--forge-secondary` | `rgb(226, 225, 225)` (Light Grey) | Secondary highlights | "PCE", "SHOWROOM", "MINDSET" text highlights |

### Text Colors (Full control over all text elements)

| Variable | Current Value | Used For | Where It Appears |
|----------|---------------|----------|------------------|
| `--forge-text-heading` | `#000000` (Black) | Main headings (H1, H2, H3) | Page titles, section headers |
| `--forge-text-body` | `#1F2937` (Dark Grey) | Body paragraphs & main content | Descriptions, articles, long text |
| `--forge-text-muted` | `#6B7280` (Medium Grey) | Subtle/secondary text | Helper text, metadata, captions |
| `--forge-text-emphasis` | `#000000` (Black) | Important/emphasized text | Call-to-actions, highlights |
| `--forge-text-link` | `#000000` (Black) | Links & interactive text | Navigation links, buttons |
| `--forge-text-inverse` | `#FFFFFF` (White) | Text on dark backgrounds | Sliding showcase images |
| `--forge-text-label` | `#4B5563` (Grey) | Labels & form text | Form labels, input placeholders |

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
  --forge-text-heading: #FFFFFF;
  --forge-text-body: #E5E5E5;
  --forge-text-muted: #9CA3AF;
  --forge-text-emphasis: #FFFFFF;
  --forge-text-link: #4a9eff;
  --forge-text-inverse: #1a1a1a;
  --forge-text-label: #D1D5DB;
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
  --forge-text-heading: #1E3A8A;
  --forge-text-body: #1F2937;
  --forge-text-muted: #6B7280;
  --forge-text-emphasis: #2563EB;
  --forge-text-link: #2563EB;
  --forge-text-inverse: #FFFFFF;
  --forge-text-label: #4B5563;
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
  --forge-text-heading: #991B1B;
  --forge-text-body: #1F2937;
  --forge-text-muted: #6B7280;
  --forge-text-emphasis: #DC2626;
  --forge-text-link: #DC2626;
  --forge-text-inverse: #FFFFFF;
  --forge-text-label: #4B5563;
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
- `--forge-text-heading`: Main page and section headings (H1, H2, H3 elements)
- `--forge-text-body`: All body paragraphs, descriptions, long-form content
- `--forge-text-muted`: Helper text, metadata, captions, supplementary info
- `--forge-text-emphasis`: Important or emphasized content, call-to-action text
- `--forge-text-link`: Navigation links, clickable text, interactive elements
- `--forge-text-inverse`: Text displayed on dark backgrounds (product showcase overlays)
- `--forge-text-label`: Form labels, input placeholders, small UI text

### Legacy Text Variables (for backward compatibility)
- `--forge-text`: Maps to `--forge-text-body` (main body text)
- `--forge-text-light`: Maps to `--forge-text-muted` (secondary text)

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
