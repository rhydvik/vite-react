import { Header } from "components"
import { Container } from "@mui/material"

interface IBasicLayout {
  children?: string | JSX.Element | JSX.Element[]
}

export const BasicLayout = ({
  children
}: IBasicLayout) => {
  return (
    <>
      <Header />
      <Container
        sx={{
          borderLeft: '1px solid #444444',
          borderRight: '1px solid #444444',
          minHeight: 'calc(100vh - 70px)',
        }}
      >
        {children}
      </Container>
    </>
  )
}
