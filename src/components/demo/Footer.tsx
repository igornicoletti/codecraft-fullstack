
export const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden py-10">
        <div className="flex items-center justify-center px-6">
          <span className="text-xs text-muted-foreground">
            &copy; Copyright CodeCraft FullStack {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
