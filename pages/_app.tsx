import '@assets/main.css'
import { AppProps } from 'next/app'
import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode[] | ReactNode
}

const Noop: React.FunctionComponent = ({ children }: Props) => <>{children}</>

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: React.FunctionComponent } }) {
  const Layout = Component.Layout ?? Noop
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
