define('shuffleInit', ['shufflejs','jquery'], function(Shuffle,$) {

  var shuffleInit = {};

  shuffleInit.filter = function() {

    var isoContainer = document.querySelector('.js-shuffle');

    var calendarFilter = function (element) {
      this.element = element;
      this.shuffle = new Shuffle(element, {
        itemSelector: '.project-thumb',
        sizer: null,
        initialSort: null,
        delimeter: ',',
      });
      this.addFilterButtons();
    };

    calendarFilter.prototype.toArray = function (arrayLike) {
      return Array.prototype.slice.call(arrayLike);
    };

    calendarFilter.prototype.addShuffleEventListeners = function () {
      var handler = function (event) {
        console.log('type: %s', event.type, 'detail:', event.detail);
      };
      this.element.addEventListener(Shuffle.EventType.LAYOUT, handler, false);
      this.element.addEventListener(Shuffle.EventType.REMOVED, handler, false);
    };

    calendarFilter.prototype.addFilterButtons = function () {
      var options = document.querySelector('.filter-options');
      if (!options) {
        return;
      }
      var filterButtons = this.toArray(
        options.children
      );
      filterButtons.forEach(function (button) {
        button.addEventListener('click', this._handleFilterClick.bind(this), false);
      }, this);
    };

    calendarFilter.prototype._handleFilterClick = function (evt) {
      var btn = evt.currentTarget;
      var isActive = btn.classList.contains('active');
      var btnGroup = btn.getAttribute('data-group');
      if (this.mode === 'additive') {
        if (isActive) {
          this._activeFilters.splice(this._activeFilters.indexOf(btnGroup));
        } else {
          this._activeFilters.push(btnGroup);
        }
        btn.classList.toggle('active');
        this.shuffle.filter(this._activeFilters);
      } else {
        this._removeActiveClassFromChildren(btn.parentNode);
        var filterGroup;
        if (isActive) {
          btn.classList.remove('active');
          filterGroup = Shuffle.ALL_ITEMS;
        } else {
          btn.classList.add('active');
          filterGroup = btnGroup;
        }
        this.shuffle.filter(filterGroup);
        $('body').animate({ scrollTop: 0 }, 50);
        console.log('clicked');
      }
    };

    calendarFilter.prototype._removeActiveClassFromChildren = function (parent) {
      var children = parent.children;
      for (var i = children.length - 1; i >= 0; i--) {
        children[i].classList.remove('active');
      }
    };

    calendarFilter.prototype.addSorting = function () {
      var menu = document.querySelector('.sort-options');
      if (!menu) {
        return;
      }
      menu.addEventListener('change', this._handleSortChange.bind(this));
    };

    if (isoContainer) {
      window.calendarFilter = new calendarFilter(isoContainer);
    }
  
  }

  return shuffleInit;

});