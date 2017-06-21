const assert = require("assert");
const request = require("supertest");
const express = require("express");
const app = require("../app");
const app2 = require("../public/app/inline.bundle");
const aa = require("C:/Users/jukka/Node/supersankari/src/main.ts");

describe("GET /", function() {
  it("respond with json", function(done) {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("GET /tulokset", function() {
  it("respond with json", function(done) {
    request(app)
      .get("/tulokset")
      .set("Accept", "application/json")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("GET /app", function() {
  it("respond with 301", function(done) {
    request(app)
      .get("/app")
      .set("Accept", "application/json")
      .expect(301)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
