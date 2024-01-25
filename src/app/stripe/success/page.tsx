import { CheckCheck } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const stripeSuccessPage = () => {
  return (
    <div className='h-screen'>
        <div className="mt-32 mx-auto">
            <CheckCheck className='text-green-600 w-16 h-16 mx-auto my-6'/> 
            <div className='text-center'>
                <h3 className='text-base font-semibold'>
                    Transakcja zaakceptowana!
                </h3>
                <p className='my-2'>Dziękujemy za zakupy w naszym sklepie</p>
                <br />
                <Button asChild>
                    <Link href="/">
                        Powrót na stonę główną
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default stripeSuccessPage