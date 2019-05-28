import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import isObjEmpty from '../../../util/isObjEmpty'
import RecordCard from './RecordCard'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: [0, 20],
    flex: 1
  },
  [`@media (max-width: ${theme.breakpoints['sm']}px)`]: {
    root: {
      justifyContent: 'center'
    }
  }
})

const RecordMap = ({
  classes,
  records
}) => {
  let recordData = []
  if (!isObjEmpty(records)) {
    recordData = [...records.results]
  }
  return <div className={classes.root}>
    {recordData.map((payload, i) => {
      const { meta, record } = payload
      if (!record) {
        console.error('Missing record data for following payload:', payload)
        return null
      }
      return <RecordCard
        record={record}
        meta={meta}
        key={i}
      />
    })}
  </div>
}

RecordMap.propTypes = {
  classes: PropTypes.object.isRequired,
  records: PropTypes.object
}

export default withStyles(styles)(RecordMap)
