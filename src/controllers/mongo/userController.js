import mongoose from 'mongoose';

import { UserProfileSchema } from '../../models/userProfileModel';

const UserProfile = mongoose.model('UserProfiles', UserProfileSchema);

/**
 *
 * @param {object} userProfile
 * @returns {object} upddated userProfile - includes __id
 */
export const addNewUserProfile = async (userProfile) => {
  const newUserProfile = new UserProfile(userProfile);
  // let newUserProfile;
  newUserProfile.save((error, userProfile) => {
    if (error) {
      console.log(error);
      throw error;
    }
    //console.log('>>>userProfile = ', userProfile);
  });

  return newUserProfile;
};

export const getAllUserProfiles = (req, res) => {
  //No objects passed in, so will return all
  UserProfile.find({}, (err, userProfile) => {
    if (err) {
      res.send(err);
    }
    res.json(userProfile);
  });
};

export const getUserProfileByID = (req, res) => {
  const userId = req.params.userId;

  UserProfile.findById(userId, (err, userProfile) => {
    if (err) {
      res.send(err);
    }
    res.json(userProfile);
  });
};

export const updateUserProfile = (req, res) => {
  UserProfile.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true, userFindAndModified: false },
    (err, userProfile) => {
      if (err) {
        res.send(err);
      }
      res.json(userProfile);
    }
  );
};

export const deleteUserProfile = (req, res) => {
  const userId = req.params.userId;

  UserProfile.deleteOne({ _id: userId }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted profile!' });
  });
};
