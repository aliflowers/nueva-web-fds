'use client'

import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { useLanguage } from '@/hooks/useLanguage'

type PayPalButtonWrapperProps = {
  amount: string
  planName: string
}

type PaymentStatus = 'idle' | 'loading' | 'ready' | 'processing' | 'success' | 'cancel' | 'error'

function PayPalInner({ amount, planName }: PayPalButtonWrapperProps) {
  const [{ isPending }] = usePayPalScriptReducer()
  const { t } = useLanguage()
  const [status, setStatus] = useState<PaymentStatus>('idle')
  const [open, setOpen] = useState(false)

  const label =
    status === 'processing'
      ? t('paypal.state.processing')
      : status === 'success'
        ? t('paypal.state.success')
        : status === 'cancel'
          ? t('paypal.state.cancel')
          : status === 'error'
            ? t('paypal.state.error')
            : isPending
              ? t('paypal.state.loading')
              : t('paypal.state.ready')

  return (
    <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="text-xs font-medium tracking-[0.2em] text-ink2">PAYPAL</div>
        <div className="text-xs text-ink2">{label}</div>
      </div>

      <PayPalButtons
        style={{ layout: 'vertical', shape: 'rect', label: 'pay' }}
        disabled={isPending || status === 'processing'}
        createOrder={(_, actions) => {
          setStatus('processing')
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: planName,
                amount: {
                  value: amount,
                  currency_code: 'USD',
                },
              },
            ],
          })
        }}
        onApprove={async (_, actions) => {
          try {
            await actions.order?.capture()
            setStatus('success')
            setOpen(true)
          } catch {
            setStatus('error')
            setOpen(true)
          }
        }}
        onCancel={() => {
          setStatus('cancel')
          setOpen(true)
        }}
        onError={() => {
          setStatus('error')
          setOpen(true)
        }}
      />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={t('paypal.modal.title')}
      >
        <div className="text-sm text-ink2">{t('paypal.modal.subtitle')}</div>
        <div className="mt-4 rounded-xl bg-white/5 p-4 text-sm ring-1 ring-white/10">
          <div className="flex items-center justify-between gap-3">
            <div className="text-ink2">{planName}</div>
            <div className="font-medium text-ink">${amount} USD</div>
          </div>
          <div className="mt-3 text-ink">
            {status === 'success'
              ? t('paypal.state.success')
              : status === 'cancel'
                ? t('paypal.state.cancel')
                : t('paypal.state.error')}
          </div>
        </div>
        <Button className="mt-5 w-full" onClick={() => setOpen(false)} type="button">
          {t('paypal.modal.cta')}
        </Button>
      </Modal>
    </div>
  )
}

export function PayPalButtonWrapper({ amount, planName }: PayPalButtonWrapperProps) {
  const { t } = useLanguage()
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID

  const options = useMemo(() => {
    return {
      clientId: clientId ?? '',
      currency: 'USD',
      intent: 'capture',
    }
  }, [clientId])

  if (!clientId) {
    return (
      <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
        <div className="text-sm text-ink">{t('pricing.paypal.missing')}</div>
      </div>
    )
  }

  return (
    <PayPalScriptProvider options={options}>
      <PayPalInner amount={amount} planName={planName} />
    </PayPalScriptProvider>
  )
}
