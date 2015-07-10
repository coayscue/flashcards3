app.directive("flashCard", function(FlashCardsFactory, ScoreFactory) {
  return {
    restrict: "E",
    templateUrl: "js/directives/flashCards/flashCards.html",
    scope: {
      mainScope: "=",
      flashCard: "=",
      getCategoryCards: "&"
    },
    link: function(scope, element, attrs) {

      scope.flashCardsFactory = FlashCardsFactory;

      scope.flashCardsFactory.getCategoryCards = function(category) {
        FlashCardsFactory.loading = true;
        FlashCardsFactory.current = category;
        FlashCardsFactory.getFlashCards(category)
          .then(function(data) {
            scope.flashCards = data;
            FlashCardsFactory.loading = false;
          });
      };

      FlashCardsFactory.getFlashCards()
        .then(function(data) {
          FlashCardsFactory.loading = false;
          scope.flashCards = data;
        });

      scope.answerQuestion = function(answer, flashCard) {
        if (!flashCard.answered) {
          flashCard.answered = true;
          flashCard.answeredCorrectly = answer.correct;
          if (flashCard.answeredCorrectly) {
            ScoreFactory.correct++;
          } else {
            ScoreFactory.incorrect++;
          }
        }
      }
    }
  }
})