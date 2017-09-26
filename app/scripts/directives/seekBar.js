 (function () {
 	function seekBar($document) {

 		var calculatePercent = function (seekBar, event) {
 			var offsetX = event.pageX - seekBar.offset().left;
 			var seekBarWidth = seekBar.width();
 			var offsetXPercent = offsetX / seekBarWidth;
 			offsetXPercent = Math.max(0, offsetXPercent);
 			offsetXPercent = Math.min(1, offsetXPercent);
 			return offsetXPercent;
 		};

 		return {
 			templateUrl: '/templates/directives/seek-bar.html',
 			replace: true,
 			restrict: 'E',
 			scope: {
 				onChange: '&'
 			},
 			link: function (scope, element, attributes) {
 				scope.value = 0;
 				scope.max = 100;

 				var seekBar = $(element);

 				attributes.$observe('value', function (newValue) {
 					scope.value = newValue;
 				});

 				attributes.$observe('max', function (newValue) {
 					scope.max = newValue;
 				});

 				var percentString = function () {
 					var value = scope.value;
 					var max = scope.max;
 					var percent = value / max * 100;
 					return percent + "%";
 				};

 				scope.fillStyle = function () {
 					return {
 						width: percentString()
 					};
 				};

 				scope.thumbStyle = function () {
 					return {
 						left: percentString()
 					}
 				}






 				scope.onClickSeekBar = function (event) {
 					var percent = calculatePercent(seekBar, event);
 					scope.value = percent * scope.max;
 					notifyOnChange(scope.value);
 				};
 				scope.trackThumb = function () {
 					$document.bind('mousemove.thumb', function (event) {
 						var percent = calculatePercent(seekBar, event);

 						//scope.$apply allows the function to be updated to the html/view in a new turn. Angular code is already rapped in scope.$digest which is actually what the scope.$apply function calls. When we get rid of the scope.apply the slider in the player bar still updates but not smoothly in realtime. Rather it waits for the click to happen and be let go of before the veiw is updated, however javascipt is calculating the information that is being inputted in real time. When we place back the scope.$apply, the veiw is updated as the calculations are being made.
 						scope.$apply(function () {
 							scope.value = percent * scope.max;
 							notifyOnChange(scope.value);
 						});
 					});

 					$document.bind('mouseup.thumb', function () {
 						$document.unbind('mousemove.thumb');
 						$document.unbind('mouseup.thumb');
 					});
 				};
 				var notifyOnChange = function (newValue) {
 					if (typeof scope.onChange === 'function') {
 						scope.onChange({
 							value: newValue
 						});
 					}
 				};
 			}
 		};
 	}

 	angular
 		.module('blocJams')
 		.directive('seekBar', ['$document', seekBar]);
 })();