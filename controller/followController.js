import * as followRepository from '../repository/followRepository.js';

export async function getFollowers(request, response) { // get all followers
  const data = await followRepository.getAll();
  response.status(200).json(data);
}

export async function getSearchFollowers(request, response) { // search follower
  const name = request.body;
  const follower = await followRepository.getByUsername(name);
  if(follower) { response.status(200).json(follower); }
}

export async function createFollower(request, response) { // create follower
  const followerName = request.params.username;
  const follow = await followRepository.create(followerName);
  response.status(201).json(follow);
}