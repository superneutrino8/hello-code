import React from "react"
import styled from "styled-components"

const FooterGroup = styled.div``
const Text = styled.div``
const Button = styled.div``
const LinkGroup = styled.div``

const footer = ({ data }) => (
  <FooterGroup>
    <Text>
      Tweet “Prototype and build apps with React and Swift. New courses by
      @MengTo”
    </Text>
    <Button>Tweet</Button>
    <LinkGroup>
      {data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}
    </LinkGroup>
  </FooterGroup>
)

export default footer
