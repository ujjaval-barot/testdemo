export default function slugify(val: string): string {
  return val.replace(/(\s+|[^a-zA-Z0-9]+)/g, '-').toLowerCase();
}
