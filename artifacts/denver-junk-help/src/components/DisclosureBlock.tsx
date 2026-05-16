interface DisclosureBlockProps {
  text: string;
}

export function DisclosureBlock({ text }: DisclosureBlockProps) {
  return (
    <div className="bg-muted text-muted-foreground p-4 text-sm text-center border-y border-border my-8 rounded-md">
      <p>{text}</p>
    </div>
  );
}