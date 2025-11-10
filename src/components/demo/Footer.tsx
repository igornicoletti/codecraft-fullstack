
export const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-8">
        <div className="flex items-center justify-center">
          <span className="text-xs text-muted-foreground">
            &copy; Copyright CodeCraft FullStack {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
