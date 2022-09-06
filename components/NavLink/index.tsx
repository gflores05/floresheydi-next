import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

export interface NavLinkProps extends LinkProps {
  children: React.ReactElement
  activeClassName: string
}

export default function NavLink({
  children,
  activeClassName,
  href,
  ...props
}: NavLinkProps) {
  const router = useRouter()

  return (
    <Link href={href} {...props}>
      {router.pathname === href
        ? React.cloneElement(children, {
            className: cx(children.props.className, activeClassName),
          })
        : children}
    </Link>
  )
}
