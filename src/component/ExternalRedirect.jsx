import { useEffect } from 'react'

export default function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.href = to
  }, [to])

  return <></>
}
