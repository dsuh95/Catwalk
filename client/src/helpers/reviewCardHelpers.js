import {
  emptyStar, fullStar, quarterStar, halfStar, threeQuarterStar,
} from './starRatings';

export const truncateSummary = (review) => {
  let truncatedSummary;
  if (review.summary.length > 60) {
    truncatedSummary = `${review.summary.substring(0, 60)}...`;
  } else {
    truncatedSummary = review.summary;
  }
  return truncatedSummary;
};

export const truncateBody = (review) => {
  let truncatedBody;
  let restOfBody;
  if (review.body.length > 250) {
    truncatedBody = `${review.body.substring(0, 250)}`;
    restOfBody = review.body.substring(250);
  } else {
    truncatedBody = review.body;
  }
  return [truncatedBody, restOfBody];
};
