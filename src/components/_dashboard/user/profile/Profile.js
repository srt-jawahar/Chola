import PropTypes from 'prop-types';
// material
import { Grid, Stack } from '@material-ui/core';
//
import ProfileAbout from './ProfileAbout';

// ----------------------------------------------------------------------

Profile.propTypes = {
  myProfile: PropTypes.object
};

export default function Profile({ myProfile }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <ProfileAbout profile={myProfile} />
        </Stack>
      </Grid>
    </Grid>
  );
}
