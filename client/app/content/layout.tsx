export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <section>
        <div>This second Header</div>
        {children}
        <div>This second Footer</div>
    </section>
    )
  }