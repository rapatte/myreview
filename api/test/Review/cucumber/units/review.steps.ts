import { Given, Then, When, Before } from '@cucumber/cucumber';
import { ReviewDomain } from '../../../../src/domain/review/review.domain';
import { ReviewService } from '../../../../src/domain/review/review.service';
import { expect } from 'chai';
import AdapterMock from '../../mock/mockedAdapter';

// Step definitions for domain centric testing, at unit level

Before(function () {
  const adapter: any = new AdapterMock();
  return (this.reviewService = new ReviewService(adapter));
});
//     Scenario: A user wants to post a review

Given(
  /^A user post a review with details as shown in the table$/,
  function (table) {
    this.review = new ReviewDomain(table.rowsHash());
  },
);
When(/^The user posts the review$/, async function () {
  this.result = await this.reviewService.save(this.review);
});
Then(/^The review is created as shown in the table$/, function (table) {
  this.expectedReview = new ReviewDomain(table.rowsHash());
  expect(this.result).to.eql(this.expectedReview);
});

//Scenario: The employer wants to list all current missions

Given(
  /^An employer wants to list existing reviews as followed$/,
  async function (table) {
    this.reviews = table
      .hashes()
      .map((review: any) => new ReviewDomain(review));

    this.reviews.forEach(
      async (review: any) => await this.reviewService.save(review),
    );
  },
);

When(/^The employer list all reviews$/, async function () {
  this.result = await this.reviewService.getAll();
});
Then(/^All reviews appear in the list as followed:$/, function (table) {
  this.reviewsExpected = table
    .hashes()
    .map((review: any) => new ReviewDomain(review));
  expect(this.result).to.eql(this.reviewsExpected);
});

// Scenario: A client wants to update a posted mission
Given(/^An existing review with details as followed$/, async function (table) {
  this.review = new ReviewDomain(table.rowsHash());
  this.reviewSaved = await this.reviewService.save(this.review);
  this.id = '8df730c1-5b14-404e-88b2-b632fac8882b';
});
When(
  /^The user updates a few attributes of the review as shown$/,
  async function (table) {
    this.elementsToModify = table.rowsHash();
    await this.reviewService.update(this.id, this.elementsToModify);
    this.reviewUpdated = await this.reviewService.getOne(this.id);
    this.reviewUpdatedNewDomain = new ReviewDomain(this.reviewUpdated);
  },
);
Then(/^The review is modified as followed$/, async function (table) {
  this.expectedReview = new ReviewDomain(table.rowsHash());
  expect(this.reviewUpdatedNewDomain).to.eql(this.expectedReview);
});

// Scenario: The user wants to delete a mission

Given(/^an existing review with details as followed$/, async function (table) {
  this.reviewSaved = await this.reviewService.save(
    new ReviewDomain(table.rowsHash()),
  );
});
When(/^The user delete the review with n°<id>$/, async function (table) {
  this.reviewDeleted = await this.reviewService.remove(this.reviewSaved.getId);
});
Then(/^A message <message> is shown$/, async function (table) {
  this.table = table.rowsHash();
  expect(await this.reviewDeleted).to.equals(this.table.message);
});

// Scenario: The employer wants to search missions according to some keywords
Given(
  /^An Employer who wants to search a mission and there are existing missions as followed$/,
  async function (table) {
    this.missions = table.hashes();
    this.missions.forEach(
      async (mission: any) => await this.missionService.save(mission),
    );
  },
);
When(/^The employer search missions with keywords$/, async function (table) {
  this.table = table.hashes();
  this.keyword = this.table[0].keywords.split(/[\s,]+/);
  await Promise.all(this.keyword)
    .then(async () => {
      this.missionFiltered = await this.missionService.search(this.keyword);
    })
    .catch((e) => {
      console.error(e);
    });
});

Then(/^Missions list appear as followed:$/, function (table) {
  this.missionsExpected = table.hashes();
  expect(this.missionFiltered).to.eql(this.missionsExpected);
});
