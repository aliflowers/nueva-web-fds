import { ServiceDetailPage } from '@/components/pages/ServiceDetailPage'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceId: string }>
}) {
  const { serviceId } = await params

  return (
    <div className="bg-bg">
      <Navbar />
      <main>
        <ServiceDetailPage serviceId={serviceId} />
      </main>
      <Footer />
    </div>
  )
}
