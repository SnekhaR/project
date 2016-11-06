"use strict";

const mongoose = require('mongoose');
const signupDAO = require(process.cwd() + '/server/api/signup/dao/signup-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('signupDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    signupDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
