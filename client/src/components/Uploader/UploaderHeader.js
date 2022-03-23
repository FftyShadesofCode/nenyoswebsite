import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
        fontFamily: 'Permanent Marker',
        textAlign: 'center',
        color: 'forestgreen',
        fontSize: '2.5rem',
        textShadow: '1px 1px white'
    }
}))

export const UploaderHeader = () => {
    const styles = useStyles()
    return (
        <Typography className={styles.root} component='h1' >
            Orchids of NENYOS
        </Typography>
    )
}