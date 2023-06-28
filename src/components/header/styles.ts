import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(
  (theme) => ({
     headerContainer: {
      backgroundColor: '#fff', // theme.palette.background.default,
      padding: '1rem',
      borderBottom: `.5em solid ${theme.palette.primary.main}`
    }
  })
)
