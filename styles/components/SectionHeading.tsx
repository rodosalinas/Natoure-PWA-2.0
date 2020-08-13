import React from 'react'
import SectionHeadingS from '../general/SectionHeadingS'

interface Props {
  title: string
  linkTitle?: string
  link?: string
}

const SectionHeading = ({ title, linkTitle, link = '#' }: Props): JSX.Element => {
  return (
    <SectionHeadingS>
      <h4>{title}</h4>
      {link && linkTitle && <a href={link}>{linkTitle}</a>}
    </SectionHeadingS>
  )
}

export default SectionHeading
