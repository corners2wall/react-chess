import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import loading from '../../assets/img/loading.gif';

const useStyles = makeStyles({
  loading: {
    textAlign: 'center',
  },
});

const ChessOpeningSearchNameAjaxLoader = ({props}) => {
  const classes = useStyles();
  const state = useSelector(state => state);

  if (state.chessOpeningSearchNameAjaxLoader.show) {
    return (
      <div className={classes.loading}>
        <img src={loading} alt="loading" />
      </div>
    );
  }

  return null;
}

export default ChessOpeningSearchNameAjaxLoader;
