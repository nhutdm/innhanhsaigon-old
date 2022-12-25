import { ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface ContainerProps {
  children: ReactNode
}

function Container(props: ContainerProps) {
  const { children } = props
  const router = useRouter()
  const meta = {
    title: 'In Nhanh Sài Gòn – Dịch vụ in nhanh tại Thành phố Hồ Chí Minh',
    description:
      'Cung cấp dịch vụ in nhanh lấy ngay trong ngày với kỹ thuật in ấn hiện đại và giá cả hợp lý bất kể số lượng. Liên hệ ngay 0929464168 để được tư vấn nhanh nhất.',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="canonical" href={`https://innhanhsaigon.com${router.asPath}`} />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Container
