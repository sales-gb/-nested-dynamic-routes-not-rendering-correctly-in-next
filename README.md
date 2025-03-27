## Description:

When using nested dynamic routes like `/produtos/categorias/[id],` the page renders the content of the home page (/home) instead of the expected component, even though the URL updates correctly to `/produtos/categorias/1,` for example.

### Steps to reproduce:

1. Create a Next.js project with version 14.2.
2. Set up a nested route structure, for example: 
        `app/produtos/categorias/[id]/page.tsx`
3. Add a simple component in `[id]/page.tsx,` like:


```
export default function CategoryEdit({ params }) {
  return <h1>Editing category {params.id}</h1>;
}
```

4. Navigate to /produtos/categorias/1 in the browser.
5. Notice that instead of seeing "Editing category 1", the home page content is rendered, even though the URL shows `/produtos/categorias/1.`

### Expected behavior:
The page should render the component defined in `[id]/page.tsx` for the given ID, showing "Editing category 1" when accessing `/produtos/categorias/1.`

### Actual behavior:
The page renders the home page content, despite the URL being correct.

### Additional context:

- When I move the categorias folder out of produtos, making it `app/categorias/[id]/page.tsx,` and access `/categorias/1,` the component renders correctly.
- This suggests the issue is specifically tied to nesting dynamic routes inside another folder like produtos.
- No errors appear in the browser console or terminal.
- Other nested routes like `/funcoes/[id]` work fine as long as they’re not inside another folder.
