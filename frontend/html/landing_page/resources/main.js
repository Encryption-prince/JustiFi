/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e = {
      40: () => {
        window.campaignFooter = () => ({
          init() {
            const e = document.querySelector(".scroll-to-form");
            e &&
              e.addEventListener("click", () => {
                this.scrollToSection("campaign-form");
              });
          },
          scrollToSection(e) {
            const t = document.getElementById(e);
            if (t) {
              const e = t.getBoundingClientRect().top + window.scrollY - 120;
              window.scrollTo({ top: e, behavior: "smooth" });
            }
          },
        });
      },
      741: (e, t, i) => {
        var o, n;
        !(function (r, l) {
          "use strict";
          void 0 ===
            (n = "function" == typeof (o = l) ? o.call(t, i, t, e) : o) ||
            (e.exports = n);
        })(window, function () {
          "use strict";
          var e = (function () {
            var e = window.Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (
              var t = ["webkit", "moz", "ms", "o"], i = 0;
              i < t.length;
              i++
            ) {
              var o = t[i] + "MatchesSelector";
              if (e[o]) return o;
            }
          })();
          return function (t, i) {
            return t[e](i);
          };
        });
      },
      158: function (e, t, i) {
        var o, n;
        "undefined" != typeof window && window,
          void 0 ===
            (n =
              "function" ==
              typeof (o = function () {
                "use strict";
                function e() {}
                var t = e.prototype;
                return (
                  (t.on = function (e, t) {
                    if (e && t) {
                      var i = (this._events = this._events || {}),
                        o = (i[e] = i[e] || []);
                      return -1 == o.indexOf(t) && o.push(t), this;
                    }
                  }),
                  (t.once = function (e, t) {
                    if (e && t) {
                      this.on(e, t);
                      var i = (this._onceEvents = this._onceEvents || {});
                      return ((i[e] = i[e] || {})[t] = !0), this;
                    }
                  }),
                  (t.off = function (e, t) {
                    var i = this._events && this._events[e];
                    if (i && i.length) {
                      var o = i.indexOf(t);
                      return -1 != o && i.splice(o, 1), this;
                    }
                  }),
                  (t.emitEvent = function (e, t) {
                    var i = this._events && this._events[e];
                    if (i && i.length) {
                      (i = i.slice(0)), (t = t || []);
                      for (
                        var o = this._onceEvents && this._onceEvents[e], n = 0;
                        n < i.length;
                        n++
                      ) {
                        var r = i[n];
                        o && o[r] && (this.off(e, r), delete o[r]),
                          r.apply(this, t);
                      }
                      return this;
                    }
                  }),
                  (t.allOff = function () {
                    delete this._events, delete this._onceEvents;
                  }),
                  e
                );
              })
                ? o.call(t, i, t, e)
                : o) || (e.exports = n);
      },
      47: (e, t, i) => {
        var o, n;
        !(function (r, l) {
          (o = [i(741)]),
            (n = function (e) {
              return (function (e, t) {
                "use strict";
                var i = {
                    extend: function (e, t) {
                      for (var i in t) e[i] = t[i];
                      return e;
                    },
                    modulo: function (e, t) {
                      return ((e % t) + t) % t;
                    },
                  },
                  o = Array.prototype.slice;
                (i.makeArray = function (e) {
                  return Array.isArray(e)
                    ? e
                    : null == e
                    ? []
                    : "object" == typeof e && "number" == typeof e.length
                    ? o.call(e)
                    : [e];
                }),
                  (i.removeFrom = function (e, t) {
                    var i = e.indexOf(t);
                    -1 != i && e.splice(i, 1);
                  }),
                  (i.getParent = function (e, i) {
                    for (; e.parentNode && e != document.body; )
                      if (((e = e.parentNode), t(e, i))) return e;
                  }),
                  (i.getQueryElement = function (e) {
                    return "string" == typeof e ? document.querySelector(e) : e;
                  }),
                  (i.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                  }),
                  (i.filterFindElements = function (e, o) {
                    e = i.makeArray(e);
                    var n = [];
                    return (
                      e.forEach(function (e) {
                        if (e instanceof HTMLElement)
                          if (o) {
                            t(e, o) && n.push(e);
                            for (
                              var i = e.querySelectorAll(o), r = 0;
                              r < i.length;
                              r++
                            )
                              n.push(i[r]);
                          } else n.push(e);
                      }),
                      n
                    );
                  }),
                  (i.debounceMethod = function (e, t, i) {
                    i = i || 100;
                    var o = e.prototype[t],
                      n = t + "Timeout";
                    e.prototype[t] = function () {
                      var e = this[n];
                      clearTimeout(e);
                      var t = arguments,
                        r = this;
                      this[n] = setTimeout(function () {
                        o.apply(r, t), delete r[n];
                      }, i);
                    };
                  }),
                  (i.docReady = function (e) {
                    var t = document.readyState;
                    "complete" == t || "interactive" == t
                      ? setTimeout(e)
                      : document.addEventListener("DOMContentLoaded", e);
                  }),
                  (i.toDashed = function (e) {
                    return e
                      .replace(/(.)([A-Z])/g, function (e, t, i) {
                        return t + "-" + i;
                      })
                      .toLowerCase();
                  });
                var n = e.console;
                return (
                  (i.htmlInit = function (t, o) {
                    i.docReady(function () {
                      var r = i.toDashed(o),
                        l = "data-" + r,
                        a = document.querySelectorAll("[" + l + "]"),
                        s = document.querySelectorAll(".js-" + r),
                        c = i.makeArray(a).concat(i.makeArray(s)),
                        d = l + "-options",
                        u = e.jQuery;
                      c.forEach(function (e) {
                        var i,
                          r = e.getAttribute(l) || e.getAttribute(d);
                        try {
                          i = r && JSON.parse(r);
                        } catch (t) {
                          return void (
                            n &&
                            n.error(
                              "Error parsing " +
                                l +
                                " on " +
                                e.className +
                                ": " +
                                t
                            )
                          );
                        }
                        var a = new t(e, i);
                        u && u.data(e, o, a);
                      });
                    });
                  }),
                  i
                );
              })(r, e);
            }.apply(t, o)),
            void 0 === n || (e.exports = n);
        })(window);
      },
      31: function (e, t, i) {
        var o, n, r;
        (n = [i(442), i(47)]),
          (o = function (e, t) {
            var i = e.Slide,
              o = i.prototype.updateTarget;
            (i.prototype.updateTarget = function () {
              if ((o.apply(this, arguments), this.parent.options.fade)) {
                var e = this.target - this.x,
                  t = this.cells[0].x;
                this.cells.forEach(function (i) {
                  var o = i.x - t - e;
                  i.renderPosition(o);
                });
              }
            }),
              (i.prototype.setOpacity = function (e) {
                this.cells.forEach(function (t) {
                  t.element.style.opacity = e;
                });
              });
            var n = e.prototype;
            e.createMethods.push("_createFade"),
              (n._createFade = function () {
                (this.fadeIndex = this.selectedIndex),
                  (this.prevSelectedIndex = this.selectedIndex),
                  this.on("select", this.onSelectFade),
                  this.on("dragEnd", this.onDragEndFade),
                  this.on("settle", this.onSettleFade),
                  this.on("activate", this.onActivateFade),
                  this.on("deactivate", this.onDeactivateFade);
              });
            var r = n.updateSlides;
            (n.updateSlides = function () {
              r.apply(this, arguments),
                this.options.fade &&
                  this.slides.forEach(function (e, t) {
                    var i = t == this.selectedIndex ? 1 : 0;
                    e.setOpacity(i);
                  }, this);
            }),
              (n.onSelectFade = function () {
                (this.fadeIndex = Math.min(
                  this.prevSelectedIndex,
                  this.slides.length - 1
                )),
                  (this.prevSelectedIndex = this.selectedIndex);
              }),
              (n.onSettleFade = function () {
                delete this.didDragEnd,
                  this.options.fade &&
                    (this.selectedSlide.setOpacity(1),
                    this.slides[this.fadeIndex] &&
                      this.fadeIndex != this.selectedIndex &&
                      this.slides[this.fadeIndex].setOpacity(0));
              }),
              (n.onDragEndFade = function () {
                this.didDragEnd = !0;
              }),
              (n.onActivateFade = function () {
                this.options.fade && this.element.classList.add("is-fade");
              }),
              (n.onDeactivateFade = function () {
                this.options.fade &&
                  (this.element.classList.remove("is-fade"),
                  this.slides.forEach(function (e) {
                    e.setOpacity("");
                  }));
              });
            var l = n.positionSlider;
            n.positionSlider = function () {
              this.options.fade
                ? (this.fadeSlides(), this.dispatchScrollEvent())
                : l.apply(this, arguments);
            };
            var a = n.positionSliderAtSelected;
            (n.positionSliderAtSelected = function () {
              this.options.fade && this.setTranslateX(0),
                a.apply(this, arguments);
            }),
              (n.fadeSlides = function () {
                if (!(this.slides.length < 2)) {
                  var e = this.getFadeIndexes(),
                    t = this.slides[e.a],
                    i = this.slides[e.b],
                    o = this.wrapDifference(t.target, i.target),
                    n = this.wrapDifference(t.target, -this.x);
                  (n /= o), t.setOpacity(1 - n), i.setOpacity(n);
                  var r = e.a;
                  this.isDragging && (r = n > 0.5 ? e.a : e.b),
                    null != this.fadeHideIndex &&
                      this.fadeHideIndex != r &&
                      this.fadeHideIndex != e.a &&
                      this.fadeHideIndex != e.b &&
                      this.slides[this.fadeHideIndex].setOpacity(0),
                    (this.fadeHideIndex = r);
                }
              }),
              (n.getFadeIndexes = function () {
                return this.isDragging || this.didDragEnd
                  ? this.options.wrapAround
                    ? this.getFadeDragWrapIndexes()
                    : this.getFadeDragLimitIndexes()
                  : { a: this.fadeIndex, b: this.selectedIndex };
              }),
              (n.getFadeDragWrapIndexes = function () {
                var e = this.slides.map(function (e, t) {
                    return this.getSlideDistance(-this.x, t);
                  }, this),
                  i = e.map(function (e) {
                    return Math.abs(e);
                  }),
                  o = Math.min.apply(Math, i),
                  n = i.indexOf(o),
                  r = e[n],
                  l = this.slides.length,
                  a = r >= 0 ? 1 : -1;
                return { a: n, b: t.modulo(n + a, l) };
              }),
              (n.getFadeDragLimitIndexes = function () {
                for (var e = 0, t = 0; t < this.slides.length - 1; t++) {
                  var i = this.slides[t];
                  if (-this.x < i.target) break;
                  e = t;
                }
                return { a: e, b: e + 1 };
              }),
              (n.wrapDifference = function (e, t) {
                var i = t - e;
                if (!this.options.wrapAround) return i;
                var o = i + this.slideableWidth,
                  n = i - this.slideableWidth;
                return (
                  Math.abs(o) < Math.abs(i) && (i = o),
                  Math.abs(n) < Math.abs(i) && (i = n),
                  i
                );
              });
            var s = n._getWrapShiftCells;
            n._getWrapShiftCells = function () {
              this.options.fade || s.apply(this, arguments);
            };
            var c = n.shiftWrapCells;
            return (
              (n.shiftWrapCells = function () {
                this.options.fade || c.apply(this, arguments);
              }),
              e
            );
          }),
          void 0 === (r = "function" == typeof o ? o.apply(t, n) : o) ||
            (e.exports = r);
      },
      597: (e, t, i) => {
        var o, n;
        window,
          (o = [i(217), i(47)]),
          void 0 ===
            (n = function (e, t) {
              return (function (e, t, i) {
                "use strict";
                function o(e) {
                  var t = document.createDocumentFragment();
                  return (
                    e.forEach(function (e) {
                      t.appendChild(e.element);
                    }),
                    t
                  );
                }
                var n = t.prototype;
                return (
                  (n.insert = function (e, t) {
                    var i = this._makeCells(e);
                    if (i && i.length) {
                      var n = this.cells.length;
                      t = void 0 === t ? n : t;
                      var r = o(i),
                        l = t == n;
                      if (l) this.slider.appendChild(r);
                      else {
                        var a = this.cells[t].element;
                        this.slider.insertBefore(r, a);
                      }
                      if (0 === t) this.cells = i.concat(this.cells);
                      else if (l) this.cells = this.cells.concat(i);
                      else {
                        var s = this.cells.splice(t, n - t);
                        this.cells = this.cells.concat(i).concat(s);
                      }
                      this._sizeCells(i), this.cellChange(t, !0);
                    }
                  }),
                  (n.append = function (e) {
                    this.insert(e, this.cells.length);
                  }),
                  (n.prepend = function (e) {
                    this.insert(e, 0);
                  }),
                  (n.remove = function (e) {
                    var t = this.getCells(e);
                    if (t && t.length) {
                      var o = this.cells.length - 1;
                      t.forEach(function (e) {
                        e.remove();
                        var t = this.cells.indexOf(e);
                        (o = Math.min(t, o)), i.removeFrom(this.cells, e);
                      }, this),
                        this.cellChange(o, !0);
                    }
                  }),
                  (n.cellSizeChange = function (e) {
                    var t = this.getCell(e);
                    if (t) {
                      t.getSize();
                      var i = this.cells.indexOf(t);
                      this.cellChange(i);
                    }
                  }),
                  (n.cellChange = function (e, t) {
                    var i = this.selectedElement;
                    this._positionCells(e),
                      this._getWrapShiftCells(),
                      this.setGallerySize();
                    var o = this.getCell(i);
                    o && (this.selectedIndex = this.getCellSlideIndex(o)),
                      (this.selectedIndex = Math.min(
                        this.slides.length - 1,
                        this.selectedIndex
                      )),
                      this.emitEvent("cellChange", [e]),
                      this.select(this.selectedIndex),
                      t && this.positionSliderAtSelected();
                  }),
                  t
                );
              })(0, e, t);
            }.apply(t, o)) || (e.exports = n);
      },
      880: (e, t, i) => {
        var o, n;
        window,
          (o = [i(47)]),
          void 0 ===
            (n = function (e) {
              return (function (e, t) {
                "use strict";
                var i = {
                  startAnimation: function () {
                    this.isAnimating ||
                      ((this.isAnimating = !0),
                      (this.restingFrames = 0),
                      this.animate());
                  },
                  animate: function () {
                    this.applyDragForce(), this.applySelectedAttraction();
                    var e = this.x;
                    if (
                      (this.integratePhysics(),
                      this.positionSlider(),
                      this.settle(e),
                      this.isAnimating)
                    ) {
                      var t = this;
                      requestAnimationFrame(function () {
                        t.animate();
                      });
                    }
                  },
                  positionSlider: function () {
                    var e = this.x;
                    this.options.wrapAround &&
                      this.cells.length > 1 &&
                      ((e = t.modulo(e, this.slideableWidth)),
                      (e -= this.slideableWidth),
                      this.shiftWrapCells(e)),
                      this.setTranslateX(e, this.isAnimating),
                      this.dispatchScrollEvent();
                  },
                  setTranslateX: function (e, t) {
                    (e += this.cursorPosition),
                      (e = this.options.rightToLeft ? -e : e);
                    var i = this.getPositionValue(e);
                    this.slider.style.transform = t
                      ? "translate3d(" + i + ",0,0)"
                      : "translateX(" + i + ")";
                  },
                  dispatchScrollEvent: function () {
                    var e = this.slides[0];
                    if (e) {
                      var t = -this.x - e.target,
                        i = t / this.slidesWidth;
                      this.dispatchEvent("scroll", null, [i, t]);
                    }
                  },
                  positionSliderAtSelected: function () {
                    this.cells.length &&
                      ((this.x = -this.selectedSlide.target),
                      (this.velocity = 0),
                      this.positionSlider());
                  },
                  getPositionValue: function (e) {
                    return this.options.percentPosition
                      ? 0.01 * Math.round((e / this.size.innerWidth) * 1e4) +
                          "%"
                      : Math.round(e) + "px";
                  },
                  settle: function (e) {
                    !this.isPointerDown &&
                      Math.round(100 * this.x) == Math.round(100 * e) &&
                      this.restingFrames++,
                      this.restingFrames > 2 &&
                        ((this.isAnimating = !1),
                        delete this.isFreeScrolling,
                        this.positionSlider(),
                        this.dispatchEvent("settle", null, [
                          this.selectedIndex,
                        ]));
                  },
                  shiftWrapCells: function (e) {
                    var t = this.cursorPosition + e;
                    this._shiftCells(this.beforeShiftCells, t, -1);
                    var i =
                      this.size.innerWidth -
                      (e + this.slideableWidth + this.cursorPosition);
                    this._shiftCells(this.afterShiftCells, i, 1);
                  },
                  _shiftCells: function (e, t, i) {
                    for (var o = 0; o < e.length; o++) {
                      var n = e[o],
                        r = t > 0 ? i : 0;
                      n.wrapShift(r), (t -= n.size.outerWidth);
                    }
                  },
                  _unshiftCells: function (e) {
                    if (e && e.length)
                      for (var t = 0; t < e.length; t++) e[t].wrapShift(0);
                  },
                  integratePhysics: function () {
                    (this.x += this.velocity),
                      (this.velocity *= this.getFrictionFactor());
                  },
                  applyForce: function (e) {
                    this.velocity += e;
                  },
                  getFrictionFactor: function () {
                    return (
                      1 -
                      this.options[
                        this.isFreeScrolling ? "freeScrollFriction" : "friction"
                      ]
                    );
                  },
                  getRestingPosition: function () {
                    return (
                      this.x + this.velocity / (1 - this.getFrictionFactor())
                    );
                  },
                  applyDragForce: function () {
                    if (this.isDraggable && this.isPointerDown) {
                      var e = this.dragX - this.x - this.velocity;
                      this.applyForce(e);
                    }
                  },
                  applySelectedAttraction: function () {
                    if (
                      (!this.isDraggable || !this.isPointerDown) &&
                      !this.isFreeScrolling &&
                      this.slides.length
                    ) {
                      var e =
                        (-1 * this.selectedSlide.target - this.x) *
                        this.options.selectedAttraction;
                      this.applyForce(e);
                    }
                  },
                };
                return i;
              })(0, e);
            }.apply(t, o)) || (e.exports = n);
      },
      229: (e, t, i) => {
        var o, n;
        window,
          (o = [i(131)]),
          void 0 ===
            (n = function (e) {
              return (function (e, t) {
                "use strict";
                function i(e, t) {
                  (this.element = e), (this.parent = t), this.create();
                }
                var o = i.prototype;
                return (
                  (o.create = function () {
                    (this.element.style.position = "absolute"),
                      this.element.setAttribute("aria-hidden", "true"),
                      (this.x = 0),
                      (this.shift = 0),
                      (this.element.style[this.parent.originSide] = 0);
                  }),
                  (o.destroy = function () {
                    this.unselect(), (this.element.style.position = "");
                    var e = this.parent.originSide;
                    (this.element.style[e] = ""),
                      (this.element.style.transform = ""),
                      this.element.removeAttribute("aria-hidden");
                  }),
                  (o.getSize = function () {
                    this.size = t(this.element);
                  }),
                  (o.setPosition = function (e) {
                    (this.x = e), this.updateTarget(), this.renderPosition(e);
                  }),
                  (o.updateTarget = o.setDefaultTarget =
                    function () {
                      var e =
                        "left" == this.parent.originSide
                          ? "marginLeft"
                          : "marginRight";
                      this.target =
                        this.x +
                        this.size[e] +
                        this.size.width * this.parent.cellAlign;
                    }),
                  (o.renderPosition = function (e) {
                    var t = "left" === this.parent.originSide ? 1 : -1,
                      i = this.parent.options.percentPosition
                        ? e *
                          t *
                          (this.parent.size.innerWidth / this.size.width)
                        : e * t;
                    this.element.style.transform =
                      "translateX(" + this.parent.getPositionValue(i) + ")";
                  }),
                  (o.select = function () {
                    this.element.classList.add("is-selected"),
                      this.element.removeAttribute("aria-hidden");
                  }),
                  (o.unselect = function () {
                    this.element.classList.remove("is-selected"),
                      this.element.setAttribute("aria-hidden", "true");
                  }),
                  (o.wrapShift = function (e) {
                    (this.shift = e),
                      this.renderPosition(
                        this.x + this.parent.slideableWidth * e
                      );
                  }),
                  (o.remove = function () {
                    this.element.parentNode.removeChild(this.element);
                  }),
                  i
                );
              })(0, e);
            }.apply(t, o)) || (e.exports = n);
      },
      690: (e, t, i) => {
        var o, n;
        !(function (r, l) {
          (o = [i(217), i(842), i(47)]),
            (n = function (e, t, i) {
              return (function (e, t, i, o) {
                "use strict";
                o.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }),
                  t.createMethods.push("_createDrag");
                var n = t.prototype;
                o.extend(n, i.prototype),
                  (n._touchActionValue = "pan-y"),
                  (n._createDrag = function () {
                    this.on("activate", this.onActivateDrag),
                      this.on("uiChange", this._uiChangeDrag),
                      this.on("deactivate", this.onDeactivateDrag),
                      this.on("cellChange", this.updateDraggable);
                  }),
                  (n.onActivateDrag = function () {
                    (this.handles = [this.viewport]),
                      this.bindHandles(),
                      this.updateDraggable();
                  }),
                  (n.onDeactivateDrag = function () {
                    this.unbindHandles(),
                      this.element.classList.remove("is-draggable");
                  }),
                  (n.updateDraggable = function () {
                    ">1" == this.options.draggable
                      ? (this.isDraggable = this.slides.length > 1)
                      : (this.isDraggable = this.options.draggable),
                      this.isDraggable
                        ? this.element.classList.add("is-draggable")
                        : this.element.classList.remove("is-draggable");
                  }),
                  (n.bindDrag = function () {
                    (this.options.draggable = !0), this.updateDraggable();
                  }),
                  (n.unbindDrag = function () {
                    (this.options.draggable = !1), this.updateDraggable();
                  }),
                  (n._uiChangeDrag = function () {
                    delete this.isFreeScrolling;
                  }),
                  (n.pointerDown = function (t, i) {
                    this.isDraggable
                      ? this.okayPointerDown(t) &&
                        (this._pointerDownPreventDefault(t),
                        this.pointerDownFocus(t),
                        document.activeElement != this.element &&
                          this.pointerDownBlur(),
                        (this.dragX = this.x),
                        this.viewport.classList.add("is-pointer-down"),
                        (this.pointerDownScroll = l()),
                        e.addEventListener("scroll", this),
                        this._pointerDownDefault(t, i))
                      : this._pointerDownDefault(t, i);
                  }),
                  (n._pointerDownDefault = function (e, t) {
                    (this.pointerDownPointer = {
                      pageX: t.pageX,
                      pageY: t.pageY,
                    }),
                      this._bindPostStartEvents(e),
                      this.dispatchEvent("pointerDown", e, [t]);
                  });
                var r = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
                function l() {
                  return { x: e.pageXOffset, y: e.pageYOffset };
                }
                return (
                  (n.pointerDownFocus = function (e) {
                    r[e.target.nodeName] || this.focus();
                  }),
                  (n._pointerDownPreventDefault = function (e) {
                    var t = "touchstart" == e.type,
                      i = "touch" == e.pointerType,
                      o = r[e.target.nodeName];
                    t || i || o || e.preventDefault();
                  }),
                  (n.hasDragStarted = function (e) {
                    return Math.abs(e.x) > this.options.dragThreshold;
                  }),
                  (n.pointerUp = function (e, t) {
                    delete this.isTouchScrolling,
                      this.viewport.classList.remove("is-pointer-down"),
                      this.dispatchEvent("pointerUp", e, [t]),
                      this._dragPointerUp(e, t);
                  }),
                  (n.pointerDone = function () {
                    e.removeEventListener("scroll", this),
                      delete this.pointerDownScroll;
                  }),
                  (n.dragStart = function (t, i) {
                    this.isDraggable &&
                      ((this.dragStartPosition = this.x),
                      this.startAnimation(),
                      e.removeEventListener("scroll", this),
                      this.dispatchEvent("dragStart", t, [i]));
                  }),
                  (n.pointerMove = function (e, t) {
                    var i = this._dragPointerMove(e, t);
                    this.dispatchEvent("pointerMove", e, [t, i]),
                      this._dragMove(e, t, i);
                  }),
                  (n.dragMove = function (e, t, i) {
                    if (this.isDraggable) {
                      e.preventDefault(), (this.previousDragX = this.dragX);
                      var o = this.options.rightToLeft ? -1 : 1;
                      this.options.wrapAround && (i.x %= this.slideableWidth);
                      var n = this.dragStartPosition + i.x * o;
                      if (!this.options.wrapAround && this.slides.length) {
                        var r = Math.max(
                          -this.slides[0].target,
                          this.dragStartPosition
                        );
                        n = n > r ? 0.5 * (n + r) : n;
                        var l = Math.min(
                          -this.getLastSlide().target,
                          this.dragStartPosition
                        );
                        n = n < l ? 0.5 * (n + l) : n;
                      }
                      (this.dragX = n),
                        (this.dragMoveTime = new Date()),
                        this.dispatchEvent("dragMove", e, [t, i]);
                    }
                  }),
                  (n.dragEnd = function (e, t) {
                    if (this.isDraggable) {
                      this.options.freeScroll && (this.isFreeScrolling = !0);
                      var i = this.dragEndRestingSelect();
                      if (this.options.freeScroll && !this.options.wrapAround) {
                        var o = this.getRestingPosition();
                        this.isFreeScrolling =
                          -o > this.slides[0].target &&
                          -o < this.getLastSlide().target;
                      } else
                        this.options.freeScroll ||
                          i != this.selectedIndex ||
                          (i += this.dragEndBoostSelect());
                      delete this.previousDragX,
                        (this.isDragSelect = this.options.wrapAround),
                        this.select(i),
                        delete this.isDragSelect,
                        this.dispatchEvent("dragEnd", e, [t]);
                    }
                  }),
                  (n.dragEndRestingSelect = function () {
                    var e = this.getRestingPosition(),
                      t = Math.abs(
                        this.getSlideDistance(-e, this.selectedIndex)
                      ),
                      i = this._getClosestResting(e, t, 1),
                      o = this._getClosestResting(e, t, -1);
                    return i.distance < o.distance ? i.index : o.index;
                  }),
                  (n._getClosestResting = function (e, t, i) {
                    for (
                      var o = this.selectedIndex,
                        n = 1 / 0,
                        r =
                          this.options.contain && !this.options.wrapAround
                            ? function (e, t) {
                                return e <= t;
                              }
                            : function (e, t) {
                                return e < t;
                              };
                      r(t, n) &&
                      ((o += i),
                      (n = t),
                      null !== (t = this.getSlideDistance(-e, o)));

                    )
                      t = Math.abs(t);
                    return { distance: n, index: o - i };
                  }),
                  (n.getSlideDistance = function (e, t) {
                    var i = this.slides.length,
                      n = this.options.wrapAround && i > 1,
                      r = n ? o.modulo(t, i) : t,
                      l = this.slides[r];
                    if (!l) return null;
                    var a = n ? this.slideableWidth * Math.floor(t / i) : 0;
                    return e - (l.target + a);
                  }),
                  (n.dragEndBoostSelect = function () {
                    if (
                      void 0 === this.previousDragX ||
                      !this.dragMoveTime ||
                      new Date() - this.dragMoveTime > 100
                    )
                      return 0;
                    var e = this.getSlideDistance(
                        -this.dragX,
                        this.selectedIndex
                      ),
                      t = this.previousDragX - this.dragX;
                    return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0;
                  }),
                  (n.staticClick = function (e, t) {
                    var i = this.getParentCell(e.target),
                      o = i && i.element,
                      n = i && this.cells.indexOf(i);
                    this.dispatchEvent("staticClick", e, [t, o, n]);
                  }),
                  (n.onscroll = function () {
                    var e = l(),
                      t = this.pointerDownScroll.x - e.x,
                      i = this.pointerDownScroll.y - e.y;
                    (Math.abs(t) > 3 || Math.abs(i) > 3) && this._pointerDone();
                  }),
                  t
                );
              })(r, e, t, i);
            }.apply(t, o)),
            void 0 === n || (e.exports = n);
        })(window);
      },
      217: (e, t, i) => {
        var o, n;
        !(function (r, l) {
          (o = [i(158), i(131), i(47), i(229), i(714), i(880)]),
            (n = function (e, t, i, o, n, l) {
              return (function (e, t, i, o, n, r, l) {
                "use strict";
                var a = e.jQuery,
                  s = e.getComputedStyle,
                  c = e.console;
                function d(e, t) {
                  for (e = o.makeArray(e); e.length; ) t.appendChild(e.shift());
                }
                var u = 0,
                  p = {};
                function h(e, t) {
                  var i = o.getQueryElement(e);
                  if (i) {
                    if (((this.element = i), this.element.flickityGUID)) {
                      var n = p[this.element.flickityGUID];
                      return n && n.option(t), n;
                    }
                    a && (this.$element = a(this.element)),
                      (this.options = o.extend({}, this.constructor.defaults)),
                      this.option(t),
                      this._create();
                  } else c && c.error("Bad element for Flickity: " + (i || e));
                }
                (h.defaults = {
                  accessibility: !0,
                  cellAlign: "center",
                  freeScrollFriction: 0.075,
                  friction: 0.28,
                  namespaceJQueryEvents: !0,
                  percentPosition: !0,
                  resize: !0,
                  selectedAttraction: 0.025,
                  setGallerySize: !0,
                }),
                  (h.createMethods = []);
                var m = h.prototype;
                o.extend(m, t.prototype),
                  (m._create = function () {
                    var t = (this.guid = ++u);
                    for (var i in ((this.element.flickityGUID = t),
                    (p[t] = this),
                    (this.selectedIndex = 0),
                    (this.restingFrames = 0),
                    (this.x = 0),
                    (this.velocity = 0),
                    (this.originSide = this.options.rightToLeft
                      ? "right"
                      : "left"),
                    (this.viewport = document.createElement("div")),
                    (this.viewport.className = "flickity-viewport"),
                    this._createSlider(),
                    (this.options.resize || this.options.watchCSS) &&
                      e.addEventListener("resize", this),
                    this.options.on)) {
                      var o = this.options.on[i];
                      this.on(i, o);
                    }
                    h.createMethods.forEach(function (e) {
                      this[e]();
                    }, this),
                      this.options.watchCSS ? this.watchCSS() : this.activate();
                  }),
                  (m.option = function (e) {
                    o.extend(this.options, e);
                  }),
                  (m.activate = function () {
                    this.isActive ||
                      ((this.isActive = !0),
                      this.element.classList.add("flickity-enabled"),
                      this.options.rightToLeft &&
                        this.element.classList.add("flickity-rtl"),
                      this.getSize(),
                      d(
                        this._filterFindCellElements(this.element.children),
                        this.slider
                      ),
                      this.viewport.appendChild(this.slider),
                      this.element.appendChild(this.viewport),
                      this.reloadCells(),
                      this.options.accessibility &&
                        ((this.element.tabIndex = 0),
                        this.element.addEventListener("keydown", this)),
                      this.emitEvent("activate"),
                      this.selectInitialIndex(),
                      (this.isInitActivated = !0),
                      this.dispatchEvent("ready"));
                  }),
                  (m._createSlider = function () {
                    var e = document.createElement("div");
                    (e.className = "flickity-slider"),
                      (e.style[this.originSide] = 0),
                      (this.slider = e);
                  }),
                  (m._filterFindCellElements = function (e) {
                    return o.filterFindElements(e, this.options.cellSelector);
                  }),
                  (m.reloadCells = function () {
                    (this.cells = this._makeCells(this.slider.children)),
                      this.positionCells(),
                      this._getWrapShiftCells(),
                      this.setGallerySize();
                  }),
                  (m._makeCells = function (e) {
                    return this._filterFindCellElements(e).map(function (e) {
                      return new n(e, this);
                    }, this);
                  }),
                  (m.getLastCell = function () {
                    return this.cells[this.cells.length - 1];
                  }),
                  (m.getLastSlide = function () {
                    return this.slides[this.slides.length - 1];
                  }),
                  (m.positionCells = function () {
                    this._sizeCells(this.cells), this._positionCells(0);
                  }),
                  (m._positionCells = function (e) {
                    (e = e || 0),
                      (this.maxCellHeight = (e && this.maxCellHeight) || 0);
                    var t = 0;
                    if (e > 0) {
                      var i = this.cells[e - 1];
                      t = i.x + i.size.outerWidth;
                    }
                    for (var o = this.cells.length, n = e; n < o; n++) {
                      var r = this.cells[n];
                      r.setPosition(t),
                        (t += r.size.outerWidth),
                        (this.maxCellHeight = Math.max(
                          r.size.outerHeight,
                          this.maxCellHeight
                        ));
                    }
                    (this.slideableWidth = t),
                      this.updateSlides(),
                      this._containSlides(),
                      (this.slidesWidth = o
                        ? this.getLastSlide().target - this.slides[0].target
                        : 0);
                  }),
                  (m._sizeCells = function (e) {
                    e.forEach(function (e) {
                      e.getSize();
                    });
                  }),
                  (m.updateSlides = function () {
                    if (((this.slides = []), this.cells.length)) {
                      var e = new r(this);
                      this.slides.push(e);
                      var t =
                          "left" == this.originSide
                            ? "marginRight"
                            : "marginLeft",
                        i = this._getCanCellFit();
                      this.cells.forEach(function (o, n) {
                        if (e.cells.length) {
                          var l =
                            e.outerWidth -
                            e.firstMargin +
                            (o.size.outerWidth - o.size[t]);
                          i.call(this, n, l) ||
                            (e.updateTarget(),
                            (e = new r(this)),
                            this.slides.push(e)),
                            e.addCell(o);
                        } else e.addCell(o);
                      }, this),
                        e.updateTarget(),
                        this.updateSelectedSlide();
                    }
                  }),
                  (m._getCanCellFit = function () {
                    var e = this.options.groupCells;
                    if (!e)
                      return function () {
                        return !1;
                      };
                    if ("number" == typeof e) {
                      var t = parseInt(e, 10);
                      return function (e) {
                        return e % t != 0;
                      };
                    }
                    var i = "string" == typeof e && e.match(/^(\d+)%$/),
                      o = i ? parseInt(i[1], 10) / 100 : 1;
                    return function (e, t) {
                      return t <= (this.size.innerWidth + 1) * o;
                    };
                  }),
                  (m._init = m.reposition =
                    function () {
                      this.positionCells(), this.positionSliderAtSelected();
                    }),
                  (m.getSize = function () {
                    (this.size = i(this.element)),
                      this.setCellAlign(),
                      (this.cursorPosition =
                        this.size.innerWidth * this.cellAlign);
                  });
                var g = {
                  center: { left: 0.5, right: 0.5 },
                  left: { left: 0, right: 1 },
                  right: { right: 0, left: 1 },
                };
                (m.setCellAlign = function () {
                  var e = g[this.options.cellAlign];
                  this.cellAlign = e
                    ? e[this.originSide]
                    : this.options.cellAlign;
                }),
                  (m.setGallerySize = function () {
                    if (this.options.setGallerySize) {
                      var e =
                        this.options.adaptiveHeight && this.selectedSlide
                          ? this.selectedSlide.height
                          : this.maxCellHeight;
                      this.viewport.style.height = e + "px";
                    }
                  }),
                  (m._getWrapShiftCells = function () {
                    if (this.options.wrapAround) {
                      this._unshiftCells(this.beforeShiftCells),
                        this._unshiftCells(this.afterShiftCells);
                      var e = this.cursorPosition,
                        t = this.cells.length - 1;
                      (this.beforeShiftCells = this._getGapCells(e, t, -1)),
                        (e = this.size.innerWidth - this.cursorPosition),
                        (this.afterShiftCells = this._getGapCells(e, 0, 1));
                    }
                  }),
                  (m._getGapCells = function (e, t, i) {
                    for (var o = []; e > 0; ) {
                      var n = this.cells[t];
                      if (!n) break;
                      o.push(n), (t += i), (e -= n.size.outerWidth);
                    }
                    return o;
                  }),
                  (m._containSlides = function () {
                    if (
                      this.options.contain &&
                      !this.options.wrapAround &&
                      this.cells.length
                    ) {
                      var e = this.options.rightToLeft,
                        t = e ? "marginRight" : "marginLeft",
                        i = e ? "marginLeft" : "marginRight",
                        o = this.slideableWidth - this.getLastCell().size[i],
                        n = o < this.size.innerWidth,
                        r = this.cursorPosition + this.cells[0].size[t],
                        l = o - this.size.innerWidth * (1 - this.cellAlign);
                      this.slides.forEach(function (e) {
                        n
                          ? (e.target = o * this.cellAlign)
                          : ((e.target = Math.max(e.target, r)),
                            (e.target = Math.min(e.target, l)));
                      }, this);
                    }
                  }),
                  (m.dispatchEvent = function (e, t, i) {
                    var o = t ? [t].concat(i) : i;
                    if ((this.emitEvent(e, o), a && this.$element)) {
                      var n = (e += this.options.namespaceJQueryEvents
                        ? ".flickity"
                        : "");
                      if (t) {
                        var r = new a.Event(t);
                        (r.type = e), (n = r);
                      }
                      this.$element.trigger(n, i);
                    }
                  }),
                  (m.select = function (e, t, i) {
                    if (
                      this.isActive &&
                      ((e = parseInt(e, 10)),
                      this._wrapSelect(e),
                      (this.options.wrapAround || t) &&
                        (e = o.modulo(e, this.slides.length)),
                      this.slides[e])
                    ) {
                      var n = this.selectedIndex;
                      (this.selectedIndex = e),
                        this.updateSelectedSlide(),
                        i
                          ? this.positionSliderAtSelected()
                          : this.startAnimation(),
                        this.options.adaptiveHeight && this.setGallerySize(),
                        this.dispatchEvent("select", null, [e]),
                        e != n && this.dispatchEvent("change", null, [e]),
                        this.dispatchEvent("cellSelect");
                    }
                  }),
                  (m._wrapSelect = function (e) {
                    var t = this.slides.length;
                    if (!(this.options.wrapAround && t > 1)) return e;
                    var i = o.modulo(e, t),
                      n = Math.abs(i - this.selectedIndex),
                      r = Math.abs(i + t - this.selectedIndex),
                      l = Math.abs(i - t - this.selectedIndex);
                    !this.isDragSelect && r < n
                      ? (e += t)
                      : !this.isDragSelect && l < n && (e -= t),
                      e < 0
                        ? (this.x -= this.slideableWidth)
                        : e >= t && (this.x += this.slideableWidth);
                  }),
                  (m.previous = function (e, t) {
                    this.select(this.selectedIndex - 1, e, t);
                  }),
                  (m.next = function (e, t) {
                    this.select(this.selectedIndex + 1, e, t);
                  }),
                  (m.updateSelectedSlide = function () {
                    var e = this.slides[this.selectedIndex];
                    e &&
                      (this.unselectSelectedSlide(),
                      (this.selectedSlide = e),
                      e.select(),
                      (this.selectedCells = e.cells),
                      (this.selectedElements = e.getCellElements()),
                      (this.selectedCell = e.cells[0]),
                      (this.selectedElement = this.selectedElements[0]));
                  }),
                  (m.unselectSelectedSlide = function () {
                    this.selectedSlide && this.selectedSlide.unselect();
                  }),
                  (m.selectInitialIndex = function () {
                    var e = this.options.initialIndex;
                    if (this.isInitActivated)
                      this.select(this.selectedIndex, !1, !0);
                    else {
                      if (e && "string" == typeof e)
                        if (this.queryCell(e))
                          return void this.selectCell(e, !1, !0);
                      var t = 0;
                      e && this.slides[e] && (t = e), this.select(t, !1, !0);
                    }
                  }),
                  (m.selectCell = function (e, t, i) {
                    var o = this.queryCell(e);
                    if (o) {
                      var n = this.getCellSlideIndex(o);
                      this.select(n, t, i);
                    }
                  }),
                  (m.getCellSlideIndex = function (e) {
                    for (var t = 0; t < this.slides.length; t++) {
                      if (-1 != this.slides[t].cells.indexOf(e)) return t;
                    }
                  }),
                  (m.getCell = function (e) {
                    for (var t = 0; t < this.cells.length; t++) {
                      var i = this.cells[t];
                      if (i.element == e) return i;
                    }
                  }),
                  (m.getCells = function (e) {
                    e = o.makeArray(e);
                    var t = [];
                    return (
                      e.forEach(function (e) {
                        var i = this.getCell(e);
                        i && t.push(i);
                      }, this),
                      t
                    );
                  }),
                  (m.getCellElements = function () {
                    return this.cells.map(function (e) {
                      return e.element;
                    });
                  }),
                  (m.getParentCell = function (e) {
                    var t = this.getCell(e);
                    return (
                      t ||
                      ((e = o.getParent(e, ".flickity-slider > *")),
                      this.getCell(e))
                    );
                  }),
                  (m.getAdjacentCellElements = function (e, t) {
                    if (!e) return this.selectedSlide.getCellElements();
                    t = void 0 === t ? this.selectedIndex : t;
                    var i = this.slides.length;
                    if (1 + 2 * e >= i) return this.getCellElements();
                    for (var n = [], r = t - e; r <= t + e; r++) {
                      var l = this.options.wrapAround ? o.modulo(r, i) : r,
                        a = this.slides[l];
                      a && (n = n.concat(a.getCellElements()));
                    }
                    return n;
                  }),
                  (m.queryCell = function (e) {
                    if ("number" == typeof e) return this.cells[e];
                    if ("string" == typeof e) {
                      if (e.match(/^[#.]?[\d/]/)) return;
                      e = this.element.querySelector(e);
                    }
                    return this.getCell(e);
                  }),
                  (m.uiChange = function () {
                    this.emitEvent("uiChange");
                  }),
                  (m.childUIPointerDown = function (e) {
                    "touchstart" != e.type && e.preventDefault(), this.focus();
                  }),
                  (m.onresize = function () {
                    this.watchCSS(), this.resize();
                  }),
                  o.debounceMethod(h, "onresize", 150),
                  (m.resize = function () {
                    if (
                      this.isActive &&
                      !this.isAnimating &&
                      !this.isDragging
                    ) {
                      this.getSize(),
                        this.options.wrapAround &&
                          (this.x = o.modulo(this.x, this.slideableWidth)),
                        this.positionCells(),
                        this._getWrapShiftCells(),
                        this.setGallerySize(),
                        this.emitEvent("resize");
                      var e = this.selectedElements && this.selectedElements[0];
                      this.selectCell(e, !1, !0);
                    }
                  }),
                  (m.watchCSS = function () {
                    this.options.watchCSS &&
                      (-1 !=
                      s(this.element, ":after").content.indexOf("flickity")
                        ? this.activate()
                        : this.deactivate());
                  }),
                  (m.onkeydown = function (e) {
                    var t =
                      document.activeElement &&
                      document.activeElement != this.element;
                    if (this.options.accessibility && !t) {
                      var i = h.keyboardHandlers[e.keyCode];
                      i && i.call(this);
                    }
                  }),
                  (h.keyboardHandlers = {
                    37: function () {
                      var e = this.options.rightToLeft ? "next" : "previous";
                      this.uiChange(), this[e]();
                    },
                    39: function () {
                      var e = this.options.rightToLeft ? "previous" : "next";
                      this.uiChange(), this[e]();
                    },
                  }),
                  (m.focus = function () {
                    var t = e.pageYOffset;
                    this.element.focus({ preventScroll: !0 }),
                      e.pageYOffset != t && e.scrollTo(e.pageXOffset, t);
                  }),
                  (m.deactivate = function () {
                    this.isActive &&
                      (this.element.classList.remove("flickity-enabled"),
                      this.element.classList.remove("flickity-rtl"),
                      this.unselectSelectedSlide(),
                      this.cells.forEach(function (e) {
                        e.destroy();
                      }),
                      this.element.removeChild(this.viewport),
                      d(this.slider.children, this.element),
                      this.options.accessibility &&
                        (this.element.removeAttribute("tabIndex"),
                        this.element.removeEventListener("keydown", this)),
                      (this.isActive = !1),
                      this.emitEvent("deactivate"));
                  }),
                  (m.destroy = function () {
                    this.deactivate(),
                      e.removeEventListener("resize", this),
                      this.allOff(),
                      this.emitEvent("destroy"),
                      a &&
                        this.$element &&
                        a.removeData(this.element, "flickity"),
                      delete this.element.flickityGUID,
                      delete p[this.guid];
                  }),
                  o.extend(m, l),
                  (h.data = function (e) {
                    var t = (e = o.getQueryElement(e)) && e.flickityGUID;
                    return t && p[t];
                  }),
                  o.htmlInit(h, "flickity"),
                  a && a.bridget && a.bridget("flickity", h);
                return (
                  (h.setJQuery = function (e) {
                    a = e;
                  }),
                  (h.Cell = n),
                  (h.Slide = r),
                  h
                );
              })(r, e, t, i, o, n, l);
            }.apply(t, o)),
            void 0 === n || (e.exports = n);
        })(window);
      },
      442: (e, t, i) => {
        var o, n, r;
        window,
          (n = [i(217), i(690), i(410), i(573), i(516), i(597), i(227)]),
          void 0 ===
            (r =
              "function" ==
              typeof (o = function (e) {
                return e;
              })
                ? o.apply(t, n)
                : o) || (e.exports = r);
      },
      227: (e, t, i) => {
        var o, n;
        window,
          (o = [i(217), i(47)]),
          void 0 ===
            (n = function (e, t) {
              return (function (e, t, i) {
                "use strict";
                t.createMethods.push("_createLazyload");
                var o = t.prototype;
                function n(e) {
                  if ("IMG" == e.nodeName) {
                    var t = e.getAttribute("data-flickity-lazyload"),
                      o = e.getAttribute("data-flickity-lazyload-src"),
                      n = e.getAttribute("data-flickity-lazyload-srcset");
                    if (t || o || n) return [e];
                  }
                  var r =
                      "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
                    l = e.querySelectorAll(r);
                  return i.makeArray(l);
                }
                function r(e, t) {
                  (this.img = e), (this.flickity = t), this.load();
                }
                return (
                  (o._createLazyload = function () {
                    this.on("select", this.lazyLoad);
                  }),
                  (o.lazyLoad = function () {
                    var e = this.options.lazyLoad;
                    if (e) {
                      var t = "number" == typeof e ? e : 0,
                        i = this.getAdjacentCellElements(t),
                        o = [];
                      i.forEach(function (e) {
                        var t = n(e);
                        o = o.concat(t);
                      }),
                        o.forEach(function (e) {
                          new r(e, this);
                        }, this);
                    }
                  }),
                  (r.prototype.handleEvent = i.handleEvent),
                  (r.prototype.load = function () {
                    this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this);
                    var e =
                        this.img.getAttribute("data-flickity-lazyload") ||
                        this.img.getAttribute("data-flickity-lazyload-src"),
                      t = this.img.getAttribute(
                        "data-flickity-lazyload-srcset"
                      );
                    (this.img.src = e),
                      t && this.img.setAttribute("srcset", t),
                      this.img.removeAttribute("data-flickity-lazyload"),
                      this.img.removeAttribute("data-flickity-lazyload-src"),
                      this.img.removeAttribute("data-flickity-lazyload-srcset");
                  }),
                  (r.prototype.onload = function (e) {
                    this.complete(e, "flickity-lazyloaded");
                  }),
                  (r.prototype.onerror = function (e) {
                    this.complete(e, "flickity-lazyerror");
                  }),
                  (r.prototype.complete = function (e, t) {
                    this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                    var i = this.flickity.getParentCell(this.img),
                      o = i && i.element;
                    this.flickity.cellSizeChange(o),
                      this.img.classList.add(t),
                      this.flickity.dispatchEvent("lazyLoad", e, o);
                  }),
                  (t.LazyLoader = r),
                  t
                );
              })(0, e, t);
            }.apply(t, o)) || (e.exports = n);
      },
      573: (e, t, i) => {
        var o, n;
        window,
          (o = [i(217), i(704), i(47)]),
          void 0 ===
            (n = function (e, t, i) {
              return (function (e, t, i, o) {
                "use strict";
                function n(e) {
                  (this.parent = e), this._create();
                }
                (n.prototype = Object.create(i.prototype)),
                  (n.prototype._create = function () {
                    (this.holder = document.createElement("ol")),
                      (this.holder.className = "flickity-page-dots"),
                      (this.dots = []),
                      (this.handleClick = this.onClick.bind(this)),
                      this.on(
                        "pointerDown",
                        this.parent.childUIPointerDown.bind(this.parent)
                      );
                  }),
                  (n.prototype.activate = function () {
                    this.setDots(),
                      this.holder.addEventListener("click", this.handleClick),
                      this.bindStartEvent(this.holder),
                      this.parent.element.appendChild(this.holder);
                  }),
                  (n.prototype.deactivate = function () {
                    this.holder.removeEventListener("click", this.handleClick),
                      this.unbindStartEvent(this.holder),
                      this.parent.element.removeChild(this.holder);
                  }),
                  (n.prototype.setDots = function () {
                    var e = this.parent.slides.length - this.dots.length;
                    e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e);
                  }),
                  (n.prototype.addDots = function (e) {
                    for (
                      var t = document.createDocumentFragment(),
                        i = [],
                        o = this.dots.length,
                        n = o + e,
                        r = o;
                      r < n;
                      r++
                    ) {
                      var l = document.createElement("li");
                      (l.className = "dot"),
                        l.setAttribute("aria-label", "Page dot " + (r + 1)),
                        t.appendChild(l),
                        i.push(l);
                    }
                    this.holder.appendChild(t),
                      (this.dots = this.dots.concat(i));
                  }),
                  (n.prototype.removeDots = function (e) {
                    this.dots
                      .splice(this.dots.length - e, e)
                      .forEach(function (e) {
                        this.holder.removeChild(e);
                      }, this);
                  }),
                  (n.prototype.updateSelected = function () {
                    this.selectedDot &&
                      ((this.selectedDot.className = "dot"),
                      this.selectedDot.removeAttribute("aria-current")),
                      this.dots.length &&
                        ((this.selectedDot =
                          this.dots[this.parent.selectedIndex]),
                        (this.selectedDot.className = "dot is-selected"),
                        this.selectedDot.setAttribute("aria-current", "step"));
                  }),
                  (n.prototype.onTap = n.prototype.onClick =
                    function (e) {
                      var t = e.target;
                      if ("LI" == t.nodeName) {
                        this.parent.uiChange();
                        var i = this.dots.indexOf(t);
                        this.parent.select(i);
                      }
                    }),
                  (n.prototype.destroy = function () {
                    this.deactivate(), this.allOff();
                  }),
                  (t.PageDots = n),
                  o.extend(t.defaults, { pageDots: !0 }),
                  t.createMethods.push("_createPageDots");
                var r = t.prototype;
                return (
                  (r._createPageDots = function () {
                    this.options.pageDots &&
                      ((this.pageDots = new n(this)),
                      this.on("activate", this.activatePageDots),
                      this.on("select", this.updateSelectedPageDots),
                      this.on("cellChange", this.updatePageDots),
                      this.on("resize", this.updatePageDots),
                      this.on("deactivate", this.deactivatePageDots));
                  }),
                  (r.activatePageDots = function () {
                    this.pageDots.activate();
                  }),
                  (r.updateSelectedPageDots = function () {
                    this.pageDots.updateSelected();
                  }),
                  (r.updatePageDots = function () {
                    this.pageDots.setDots();
                  }),
                  (r.deactivatePageDots = function () {
                    this.pageDots.deactivate();
                  }),
                  (t.PageDots = n),
                  t
                );
              })(0, e, t, i);
            }.apply(t, o)) || (e.exports = n);
      },
      516: (e, t, i) => {
        var o, n;
        window,
          (o = [i(158), i(47), i(217)]),
          void 0 ===
            (n = function (e, t, i) {
              return (function (e, t, i) {
                "use strict";
                function o(e) {
                  (this.parent = e),
                    (this.state = "stopped"),
                    (this.onVisibilityChange =
                      this.visibilityChange.bind(this)),
                    (this.onVisibilityPlay = this.visibilityPlay.bind(this));
                }
                (o.prototype = Object.create(e.prototype)),
                  (o.prototype.play = function () {
                    "playing" != this.state &&
                      (document.hidden
                        ? document.addEventListener(
                            "visibilitychange",
                            this.onVisibilityPlay
                          )
                        : ((this.state = "playing"),
                          document.addEventListener(
                            "visibilitychange",
                            this.onVisibilityChange
                          ),
                          this.tick()));
                  }),
                  (o.prototype.tick = function () {
                    if ("playing" == this.state) {
                      var e = this.parent.options.autoPlay;
                      e = "number" == typeof e ? e : 3e3;
                      var t = this;
                      this.clear(),
                        (this.timeout = setTimeout(function () {
                          t.parent.next(!0), t.tick();
                        }, e));
                    }
                  }),
                  (o.prototype.stop = function () {
                    (this.state = "stopped"),
                      this.clear(),
                      document.removeEventListener(
                        "visibilitychange",
                        this.onVisibilityChange
                      );
                  }),
                  (o.prototype.clear = function () {
                    clearTimeout(this.timeout);
                  }),
                  (o.prototype.pause = function () {
                    "playing" == this.state &&
                      ((this.state = "paused"), this.clear());
                  }),
                  (o.prototype.unpause = function () {
                    "paused" == this.state && this.play();
                  }),
                  (o.prototype.visibilityChange = function () {
                    this[document.hidden ? "pause" : "unpause"]();
                  }),
                  (o.prototype.visibilityPlay = function () {
                    this.play(),
                      document.removeEventListener(
                        "visibilitychange",
                        this.onVisibilityPlay
                      );
                  }),
                  t.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
                  i.createMethods.push("_createPlayer");
                var n = i.prototype;
                return (
                  (n._createPlayer = function () {
                    (this.player = new o(this)),
                      this.on("activate", this.activatePlayer),
                      this.on("uiChange", this.stopPlayer),
                      this.on("pointerDown", this.stopPlayer),
                      this.on("deactivate", this.deactivatePlayer);
                  }),
                  (n.activatePlayer = function () {
                    this.options.autoPlay &&
                      (this.player.play(),
                      this.element.addEventListener("mouseenter", this));
                  }),
                  (n.playPlayer = function () {
                    this.player.play();
                  }),
                  (n.stopPlayer = function () {
                    this.player.stop();
                  }),
                  (n.pausePlayer = function () {
                    this.player.pause();
                  }),
                  (n.unpausePlayer = function () {
                    this.player.unpause();
                  }),
                  (n.deactivatePlayer = function () {
                    this.player.stop(),
                      this.element.removeEventListener("mouseenter", this);
                  }),
                  (n.onmouseenter = function () {
                    this.options.pauseAutoPlayOnHover &&
                      (this.player.pause(),
                      this.element.addEventListener("mouseleave", this));
                  }),
                  (n.onmouseleave = function () {
                    this.player.unpause(),
                      this.element.removeEventListener("mouseleave", this);
                  }),
                  (i.Player = o),
                  i
                );
              })(e, t, i);
            }.apply(t, o)) || (e.exports = n);
      },
      410: (e, t, i) => {
        var o, n;
        window,
          (o = [i(217), i(704), i(47)]),
          void 0 ===
            (n = function (e, t, i) {
              return (function (e, t, i, o) {
                "use strict";
                var n = "http://www.w3.org/2000/svg";
                function r(e, t) {
                  (this.direction = e), (this.parent = t), this._create();
                }
                function l(e) {
                  return "string" == typeof e
                    ? e
                    : "M " +
                        e.x0 +
                        ",50 L " +
                        e.x1 +
                        "," +
                        (e.y1 + 50) +
                        " L " +
                        e.x2 +
                        "," +
                        (e.y2 + 50) +
                        " L " +
                        e.x3 +
                        ",50  L " +
                        e.x2 +
                        "," +
                        (50 - e.y2) +
                        " L " +
                        e.x1 +
                        "," +
                        (50 - e.y1) +
                        " Z";
                }
                (r.prototype = Object.create(i.prototype)),
                  (r.prototype._create = function () {
                    (this.isEnabled = !0),
                      (this.isPrevious = -1 == this.direction);
                    var e = this.parent.options.rightToLeft ? 1 : -1;
                    this.isLeft = this.direction == e;
                    var t = (this.element = document.createElement("button"));
                    (t.className = "flickity-button flickity-prev-next-button"),
                      (t.className += this.isPrevious ? " previous" : " next"),
                      t.setAttribute("type", "button"),
                      this.disable(),
                      t.setAttribute(
                        "aria-label",
                        this.isPrevious ? "Previous" : "Next"
                      );
                    var i = this.createSVG();
                    t.appendChild(i),
                      this.parent.on("select", this.update.bind(this)),
                      this.on(
                        "pointerDown",
                        this.parent.childUIPointerDown.bind(this.parent)
                      );
                  }),
                  (r.prototype.activate = function () {
                    this.bindStartEvent(this.element),
                      this.element.addEventListener("click", this),
                      this.parent.element.appendChild(this.element);
                  }),
                  (r.prototype.deactivate = function () {
                    this.parent.element.removeChild(this.element),
                      this.unbindStartEvent(this.element),
                      this.element.removeEventListener("click", this);
                  }),
                  (r.prototype.createSVG = function () {
                    var e = document.createElementNS(n, "svg");
                    e.setAttribute("class", "flickity-button-icon"),
                      e.setAttribute("viewBox", "0 0 100 100");
                    var t = document.createElementNS(n, "path"),
                      i = l(this.parent.options.arrowShape);
                    return (
                      t.setAttribute("d", i),
                      t.setAttribute("class", "arrow"),
                      this.isLeft ||
                        t.setAttribute(
                          "transform",
                          "translate(100, 100) rotate(180) "
                        ),
                      e.appendChild(t),
                      e
                    );
                  }),
                  (r.prototype.handleEvent = o.handleEvent),
                  (r.prototype.onclick = function () {
                    if (this.isEnabled) {
                      this.parent.uiChange();
                      var e = this.isPrevious ? "previous" : "next";
                      this.parent[e]();
                    }
                  }),
                  (r.prototype.enable = function () {
                    this.isEnabled ||
                      ((this.element.disabled = !1), (this.isEnabled = !0));
                  }),
                  (r.prototype.disable = function () {
                    this.isEnabled &&
                      ((this.element.disabled = !0), (this.isEnabled = !1));
                  }),
                  (r.prototype.update = function () {
                    var e = this.parent.slides;
                    if (this.parent.options.wrapAround && e.length > 1)
                      this.enable();
                    else {
                      var t = e.length ? e.length - 1 : 0,
                        i = this.isPrevious ? 0 : t;
                      this[
                        this.parent.selectedIndex == i ? "disable" : "enable"
                      ]();
                    }
                  }),
                  (r.prototype.destroy = function () {
                    this.deactivate(), this.allOff();
                  }),
                  o.extend(t.defaults, {
                    prevNextButtons: !0,
                    arrowShape: {
                      x0: 10,
                      x1: 60,
                      y1: 50,
                      x2: 70,
                      y2: 40,
                      x3: 30,
                    },
                  }),
                  t.createMethods.push("_createPrevNextButtons");
                var a = t.prototype;
                return (
                  (a._createPrevNextButtons = function () {
                    this.options.prevNextButtons &&
                      ((this.prevButton = new r(-1, this)),
                      (this.nextButton = new r(1, this)),
                      this.on("activate", this.activatePrevNextButtons));
                  }),
                  (a.activatePrevNextButtons = function () {
                    this.prevButton.activate(),
                      this.nextButton.activate(),
                      this.on("deactivate", this.deactivatePrevNextButtons);
                  }),
                  (a.deactivatePrevNextButtons = function () {
                    this.prevButton.deactivate(),
                      this.nextButton.deactivate(),
                      this.off("deactivate", this.deactivatePrevNextButtons);
                  }),
                  (t.PrevNextButton = r),
                  t
                );
              })(0, e, t, i);
            }.apply(t, o)) || (e.exports = n);
      },
      714: (e, t, i) => {
        var o, n;
        window,
          void 0 ===
            (n =
              "function" ==
              typeof (o = function () {
                "use strict";
                function e(e) {
                  (this.parent = e),
                    (this.isOriginLeft = "left" == e.originSide),
                    (this.cells = []),
                    (this.outerWidth = 0),
                    (this.height = 0);
                }
                var t = e.prototype;
                return (
                  (t.addCell = function (e) {
                    if (
                      (this.cells.push(e),
                      (this.outerWidth += e.size.outerWidth),
                      (this.height = Math.max(e.size.outerHeight, this.height)),
                      1 == this.cells.length)
                    ) {
                      this.x = e.x;
                      var t = this.isOriginLeft ? "marginLeft" : "marginRight";
                      this.firstMargin = e.size[t];
                    }
                  }),
                  (t.updateTarget = function () {
                    var e = this.isOriginLeft ? "marginRight" : "marginLeft",
                      t = this.getLastCell(),
                      i = t ? t.size[e] : 0,
                      o = this.outerWidth - (this.firstMargin + i);
                    this.target =
                      this.x + this.firstMargin + o * this.parent.cellAlign;
                  }),
                  (t.getLastCell = function () {
                    return this.cells[this.cells.length - 1];
                  }),
                  (t.select = function () {
                    this.cells.forEach(function (e) {
                      e.select();
                    });
                  }),
                  (t.unselect = function () {
                    this.cells.forEach(function (e) {
                      e.unselect();
                    });
                  }),
                  (t.getCellElements = function () {
                    return this.cells.map(function (e) {
                      return e.element;
                    });
                  }),
                  e
                );
              })
                ? o.call(t, i, t, e)
                : o) || (e.exports = n);
      },
      131: (e, t, i) => {
        var o, n;
        window,
          void 0 ===
            (n =
              "function" ==
              typeof (o = function () {
                "use strict";
                function e(e) {
                  var t = parseFloat(e);
                  return -1 == e.indexOf("%") && !isNaN(t) && t;
                }
                function t() {}
                var i =
                    "undefined" == typeof console
                      ? t
                      : function (e) {
                          console.error(e);
                        },
                  o = [
                    "paddingLeft",
                    "paddingRight",
                    "paddingTop",
                    "paddingBottom",
                    "marginLeft",
                    "marginRight",
                    "marginTop",
                    "marginBottom",
                    "borderLeftWidth",
                    "borderRightWidth",
                    "borderTopWidth",
                    "borderBottomWidth",
                  ],
                  n = o.length;
                function r() {
                  for (
                    var e = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0,
                      },
                      t = 0;
                    t < n;
                    t++
                  )
                    e[o[t]] = 0;
                  return e;
                }
                function l(e) {
                  var t = getComputedStyle(e);
                  return (
                    t ||
                      i(
                        "Style returned " +
                          t +
                          ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                      ),
                    t
                  );
                }
                var a,
                  s = !1;
                function c() {
                  if (!s) {
                    s = !0;
                    var t = document.createElement("div");
                    (t.style.width = "200px"),
                      (t.style.padding = "1px 2px 3px 4px"),
                      (t.style.borderStyle = "solid"),
                      (t.style.borderWidth = "1px 2px 3px 4px"),
                      (t.style.boxSizing = "border-box");
                    var i = document.body || document.documentElement;
                    i.appendChild(t);
                    var o = l(t);
                    (a = 200 == Math.round(e(o.width))),
                      (d.isBoxSizeOuter = a),
                      i.removeChild(t);
                  }
                }
                function d(t) {
                  if (
                    (c(),
                    "string" == typeof t && (t = document.querySelector(t)),
                    t && "object" == typeof t && t.nodeType)
                  ) {
                    var i = l(t);
                    if ("none" == i.display) return r();
                    var s = {};
                    (s.width = t.offsetWidth), (s.height = t.offsetHeight);
                    for (
                      var d = (s.isBorderBox = "border-box" == i.boxSizing),
                        u = 0;
                      u < n;
                      u++
                    ) {
                      var p = o[u],
                        h = i[p],
                        m = parseFloat(h);
                      s[p] = isNaN(m) ? 0 : m;
                    }
                    var g = s.paddingLeft + s.paddingRight,
                      f = s.paddingTop + s.paddingBottom,
                      y = s.marginLeft + s.marginRight,
                      v = s.marginTop + s.marginBottom,
                      x = s.borderLeftWidth + s.borderRightWidth,
                      b = s.borderTopWidth + s.borderBottomWidth,
                      w = d && a,
                      _ = e(i.width);
                    !1 !== _ && (s.width = _ + (w ? 0 : g + x));
                    var S = e(i.height);
                    return (
                      !1 !== S && (s.height = S + (w ? 0 : f + b)),
                      (s.innerWidth = s.width - (g + x)),
                      (s.innerHeight = s.height - (f + b)),
                      (s.outerWidth = s.width + y),
                      (s.outerHeight = s.height + v),
                      s
                    );
                  }
                }
                return d;
              })
                ? o.call(t, i, t, e)
                : o) || (e.exports = n);
      },
      842: (e, t, i) => {
        var o, n;
        !(function (r, l) {
          (o = [i(704)]),
            (n = function (e) {
              return (function (e, t) {
                "use strict";
                function i() {}
                var o = (i.prototype = Object.create(t.prototype));
                (o.bindHandles = function () {
                  this._bindHandles(!0);
                }),
                  (o.unbindHandles = function () {
                    this._bindHandles(!1);
                  }),
                  (o._bindHandles = function (t) {
                    for (
                      var i = (t = void 0 === t || t)
                          ? "addEventListener"
                          : "removeEventListener",
                        o = t ? this._touchActionValue : "",
                        n = 0;
                      n < this.handles.length;
                      n++
                    ) {
                      var r = this.handles[n];
                      this._bindStartEvent(r, t),
                        r[i]("click", this),
                        e.PointerEvent && (r.style.touchAction = o);
                    }
                  }),
                  (o._touchActionValue = "none"),
                  (o.pointerDown = function (e, t) {
                    this.okayPointerDown(e) &&
                      ((this.pointerDownPointer = {
                        pageX: t.pageX,
                        pageY: t.pageY,
                      }),
                      e.preventDefault(),
                      this.pointerDownBlur(),
                      this._bindPostStartEvents(e),
                      this.emitEvent("pointerDown", [e, t]));
                  });
                var n = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
                  r = {
                    radio: !0,
                    checkbox: !0,
                    button: !0,
                    submit: !0,
                    image: !0,
                    file: !0,
                  };
                return (
                  (o.okayPointerDown = function (e) {
                    var t = n[e.target.nodeName],
                      i = r[e.target.type],
                      o = !t || i;
                    return o || this._pointerReset(), o;
                  }),
                  (o.pointerDownBlur = function () {
                    var e = document.activeElement;
                    e && e.blur && e != document.body && e.blur();
                  }),
                  (o.pointerMove = function (e, t) {
                    var i = this._dragPointerMove(e, t);
                    this.emitEvent("pointerMove", [e, t, i]),
                      this._dragMove(e, t, i);
                  }),
                  (o._dragPointerMove = function (e, t) {
                    var i = {
                      x: t.pageX - this.pointerDownPointer.pageX,
                      y: t.pageY - this.pointerDownPointer.pageY,
                    };
                    return (
                      !this.isDragging &&
                        this.hasDragStarted(i) &&
                        this._dragStart(e, t),
                      i
                    );
                  }),
                  (o.hasDragStarted = function (e) {
                    return Math.abs(e.x) > 3 || Math.abs(e.y) > 3;
                  }),
                  (o.pointerUp = function (e, t) {
                    this.emitEvent("pointerUp", [e, t]),
                      this._dragPointerUp(e, t);
                  }),
                  (o._dragPointerUp = function (e, t) {
                    this.isDragging
                      ? this._dragEnd(e, t)
                      : this._staticClick(e, t);
                  }),
                  (o._dragStart = function (e, t) {
                    (this.isDragging = !0),
                      (this.isPreventingClicks = !0),
                      this.dragStart(e, t);
                  }),
                  (o.dragStart = function (e, t) {
                    this.emitEvent("dragStart", [e, t]);
                  }),
                  (o._dragMove = function (e, t, i) {
                    this.isDragging && this.dragMove(e, t, i);
                  }),
                  (o.dragMove = function (e, t, i) {
                    e.preventDefault(), this.emitEvent("dragMove", [e, t, i]);
                  }),
                  (o._dragEnd = function (e, t) {
                    (this.isDragging = !1),
                      setTimeout(
                        function () {
                          delete this.isPreventingClicks;
                        }.bind(this)
                      ),
                      this.dragEnd(e, t);
                  }),
                  (o.dragEnd = function (e, t) {
                    this.emitEvent("dragEnd", [e, t]);
                  }),
                  (o.onclick = function (e) {
                    this.isPreventingClicks && e.preventDefault();
                  }),
                  (o._staticClick = function (e, t) {
                    (this.isIgnoringMouseUp && "mouseup" == e.type) ||
                      (this.staticClick(e, t),
                      "mouseup" != e.type &&
                        ((this.isIgnoringMouseUp = !0),
                        setTimeout(
                          function () {
                            delete this.isIgnoringMouseUp;
                          }.bind(this),
                          400
                        )));
                  }),
                  (o.staticClick = function (e, t) {
                    this.emitEvent("staticClick", [e, t]);
                  }),
                  (i.getPointerPoint = t.getPointerPoint),
                  i
                );
              })(r, e);
            }.apply(t, o)),
            void 0 === n || (e.exports = n);
        })(window);
      },
      704: (e, t, i) => {
        var o, n;
        !(function (r, l) {
          (o = [i(158)]),
            (n = function (e) {
              return (function (e, t) {
                "use strict";
                function i() {}
                function o() {}
                var n = (o.prototype = Object.create(t.prototype));
                (n.bindStartEvent = function (e) {
                  this._bindStartEvent(e, !0);
                }),
                  (n.unbindStartEvent = function (e) {
                    this._bindStartEvent(e, !1);
                  }),
                  (n._bindStartEvent = function (t, i) {
                    var o = (i = void 0 === i || i)
                        ? "addEventListener"
                        : "removeEventListener",
                      n = "mousedown";
                    "ontouchstart" in e
                      ? (n = "touchstart")
                      : e.PointerEvent && (n = "pointerdown"),
                      t[o](n, this);
                  }),
                  (n.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                  }),
                  (n.getTouch = function (e) {
                    for (var t = 0; t < e.length; t++) {
                      var i = e[t];
                      if (i.identifier == this.pointerIdentifier) return i;
                    }
                  }),
                  (n.onmousedown = function (e) {
                    var t = e.button;
                    (t && 0 !== t && 1 !== t) || this._pointerDown(e, e);
                  }),
                  (n.ontouchstart = function (e) {
                    this._pointerDown(e, e.changedTouches[0]);
                  }),
                  (n.onpointerdown = function (e) {
                    this._pointerDown(e, e);
                  }),
                  (n._pointerDown = function (e, t) {
                    e.button ||
                      this.isPointerDown ||
                      ((this.isPointerDown = !0),
                      (this.pointerIdentifier =
                        void 0 !== t.pointerId ? t.pointerId : t.identifier),
                      this.pointerDown(e, t));
                  }),
                  (n.pointerDown = function (e, t) {
                    this._bindPostStartEvents(e),
                      this.emitEvent("pointerDown", [e, t]);
                  });
                var r = {
                  mousedown: ["mousemove", "mouseup"],
                  touchstart: ["touchmove", "touchend", "touchcancel"],
                  pointerdown: ["pointermove", "pointerup", "pointercancel"],
                };
                return (
                  (n._bindPostStartEvents = function (t) {
                    if (t) {
                      var i = r[t.type];
                      i.forEach(function (t) {
                        e.addEventListener(t, this);
                      }, this),
                        (this._boundPointerEvents = i);
                    }
                  }),
                  (n._unbindPostStartEvents = function () {
                    this._boundPointerEvents &&
                      (this._boundPointerEvents.forEach(function (t) {
                        e.removeEventListener(t, this);
                      }, this),
                      delete this._boundPointerEvents);
                  }),
                  (n.onmousemove = function (e) {
                    this._pointerMove(e, e);
                  }),
                  (n.onpointermove = function (e) {
                    e.pointerId == this.pointerIdentifier &&
                      this._pointerMove(e, e);
                  }),
                  (n.ontouchmove = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerMove(e, t);
                  }),
                  (n._pointerMove = function (e, t) {
                    this.pointerMove(e, t);
                  }),
                  (n.pointerMove = function (e, t) {
                    this.emitEvent("pointerMove", [e, t]);
                  }),
                  (n.onmouseup = function (e) {
                    this._pointerUp(e, e);
                  }),
                  (n.onpointerup = function (e) {
                    e.pointerId == this.pointerIdentifier &&
                      this._pointerUp(e, e);
                  }),
                  (n.ontouchend = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerUp(e, t);
                  }),
                  (n._pointerUp = function (e, t) {
                    this._pointerDone(), this.pointerUp(e, t);
                  }),
                  (n.pointerUp = function (e, t) {
                    this.emitEvent("pointerUp", [e, t]);
                  }),
                  (n._pointerDone = function () {
                    this._pointerReset(),
                      this._unbindPostStartEvents(),
                      this.pointerDone();
                  }),
                  (n._pointerReset = function () {
                    (this.isPointerDown = !1), delete this.pointerIdentifier;
                  }),
                  (n.pointerDone = i),
                  (n.onpointercancel = function (e) {
                    e.pointerId == this.pointerIdentifier &&
                      this._pointerCancel(e, e);
                  }),
                  (n.ontouchcancel = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerCancel(e, t);
                  }),
                  (n._pointerCancel = function (e, t) {
                    this._pointerDone(), this.pointerCancel(e, t);
                  }),
                  (n.pointerCancel = function (e, t) {
                    this.emitEvent("pointerCancel", [e, t]);
                  }),
                  (o.getPointerPoint = function (e) {
                    return { x: e.pageX, y: e.pageY };
                  }),
                  o
                );
              })(r, e);
            }.apply(t, o)),
            void 0 === n || (e.exports = n);
        })(window);
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var o in i)
                      Object.prototype.hasOwnProperty.call(i, o) &&
                        (e[o] = i[o]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            i =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            l = {
              elements_selector: ".lazy",
              container: i || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            a = function (t) {
              return e({}, l, t);
            },
            s = function (e, t) {
              var i,
                o = "LazyLoad::Initialized",
                n = new e(t);
              try {
                i = new CustomEvent(o, { detail: { instance: n } });
              } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(i);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            p = "poster",
            h = "llOriginalAttrs",
            m = "data",
            g = "loading",
            f = "loaded",
            y = "applied",
            v = "error",
            x = "native",
            b = "data-",
            w = "ll-status",
            _ = function (e, t) {
              return e.getAttribute(b + t);
            },
            S = function (e) {
              return _(e, w);
            },
            z = function (e, t) {
              return (function (e, t, i) {
                var o = "data-ll-status";
                null !== i ? e.setAttribute(o, i) : e.removeAttribute(o);
              })(e, 0, t);
            },
            k = function (e) {
              return z(e, null);
            },
            E = function (e) {
              return null === S(e);
            },
            C = function (e) {
              return S(e) === x;
            },
            L = [g, f, y, v],
            T = function (e, t, i, o) {
              e &&
                (void 0 === o ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, o));
            },
            M = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            A = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            P = function (e) {
              return e.llTempImage;
            },
            I = function (e, t) {
              if (t) {
                var i = t._observer;
                i && i.unobserve(e);
              }
            },
            O = function (e, t) {
              e && (e.loadingCount += t);
            },
            D = function (e, t) {
              e && (e.toLoadCount = t);
            },
            j = function (e) {
              for (var t, i = [], o = 0; (t = e.children[o]); o += 1)
                "SOURCE" === t.tagName && i.push(t);
              return i;
            },
            F = function (e, t) {
              var i = e.parentNode;
              i && "PICTURE" === i.tagName && j(i).forEach(t);
            },
            N = function (e, t) {
              j(e).forEach(t);
            },
            R = [c],
            B = [c, p],
            $ = [c, d, u],
            q = [m],
            U = function (e) {
              return !!e[h];
            },
            W = function (e) {
              return e[h];
            },
            H = function (e) {
              return delete e[h];
            },
            G = function (e, t) {
              if (!U(e)) {
                var i = {};
                t.forEach(function (t) {
                  i[t] = e.getAttribute(t);
                }),
                  (e[h] = i);
              }
            },
            V = function (e, t) {
              if (U(e)) {
                var i = W(e);
                t.forEach(function (t) {
                  !(function (e, t, i) {
                    i ? e.setAttribute(t, i) : e.removeAttribute(t);
                  })(e, t, i[t]);
                });
              }
            },
            Y = function (e, t, i) {
              M(e, t.class_applied),
                z(e, y),
                i &&
                  (t.unobserve_completed && I(e, t),
                  T(t.callback_applied, e, i));
            },
            X = function (e, t, i) {
              M(e, t.class_loading),
                z(e, g),
                i && (O(i, 1), T(t.callback_loading, e, i));
            },
            K = function (e, t, i) {
              i && e.setAttribute(t, i);
            },
            J = function (e, t) {
              K(e, u, _(e, t.data_sizes)),
                K(e, d, _(e, t.data_srcset)),
                K(e, c, _(e, t.data_src));
            },
            Q = {
              IMG: function (e, t) {
                F(e, function (e) {
                  G(e, $), J(e, t);
                }),
                  G(e, $),
                  J(e, t);
              },
              IFRAME: function (e, t) {
                G(e, R), K(e, c, _(e, t.data_src));
              },
              VIDEO: function (e, t) {
                N(e, function (e) {
                  G(e, R), K(e, c, _(e, t.data_src));
                }),
                  G(e, B),
                  K(e, p, _(e, t.data_poster)),
                  K(e, c, _(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                G(e, q), K(e, m, _(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                T(e.callback_finish, t);
            },
            te = function (e, t, i) {
              e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
            },
            ie = function (e, t, i) {
              e.removeEventListener(t, i);
            },
            oe = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (oe(e)) {
                var t = e.llEvLisnrs;
                for (var i in t) {
                  var o = t[i];
                  ie(e, i, o);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, i) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                O(i, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(i),
                A(e, t.class_loading),
                t.unobserve_completed && I(e, i);
            },
            le = function (e, t, i) {
              var o = P(e) || e;
              oe(o) ||
                (function (e, t, i) {
                  oe(e) || (e.llEvLisnrs = {});
                  var o = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, o, t), te(e, "error", i);
                })(
                  o,
                  function (n) {
                    !(function (e, t, i, o) {
                      var n = C(t);
                      re(t, i, o),
                        M(t, i.class_loaded),
                        z(t, f),
                        T(i.callback_loaded, t, o),
                        n || ee(i, o);
                    })(0, e, t, i),
                      ne(o);
                  },
                  function (n) {
                    !(function (e, t, i, o) {
                      var n = C(t);
                      re(t, i, o),
                        M(t, i.class_error),
                        z(t, v),
                        T(i.callback_error, t, o),
                        i.restore_on_error && V(t, $),
                        n || ee(i, o);
                    })(0, e, t, i),
                      ne(o);
                  }
                );
            },
            ae = function (e, t, i) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, i) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      le(e, t, i),
                      (function (e) {
                        U(e) ||
                          (e[h] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, i) {
                        var o = _(e, t.data_bg),
                          n = _(e, t.data_bg_hidpi),
                          l = r && n ? n : o;
                        l &&
                          ((e.style.backgroundImage = 'url("'.concat(l, '")')),
                          P(e).setAttribute(c, l),
                          X(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var o = _(e, t.data_bg_multi),
                          n = _(e, t.data_bg_multi_hidpi),
                          l = r && n ? n : o;
                        l && ((e.style.backgroundImage = l), Y(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var o = _(e, t.data_bg_set);
                        if (o) {
                          var n = o.split("|"),
                            r = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            Y(e, t, i);
                        }
                      })(e, t, i);
                  })(e, t, i)
                : (function (e, t, i) {
                    le(e, t, i),
                      (function (e, t, i) {
                        var o = Q[e.tagName];
                        o && (o(e, t), X(e, t, i));
                      })(e, t, i);
                  })(e, t, i);
            },
            se = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              F(e, function (e) {
                V(e, $);
              }),
                V(e, $);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                V(e, R);
              },
              VIDEO: function (e) {
                N(e, function (e) {
                  V(e, R);
                }),
                  V(e, B),
                  e.load();
              },
              OBJECT: function (e) {
                V(e, q);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (U(e)) {
                        var t = W(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  E(e) ||
                    C(e) ||
                    (A(e, t.class_entered),
                    A(e, t.class_exited),
                    A(e, t.class_applied),
                    A(e, t.class_loading),
                    A(e, t.class_loaded),
                    A(e, t.class_error));
                })(e, t),
                k(e),
                H(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            me = function (e, t, i) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, i, o) {
                      var n = (function (e) {
                        return L.indexOf(S(e)) >= 0;
                      })(e);
                      z(e, "entered"),
                        M(e, i.class_entered),
                        A(e, i.class_exited),
                        (function (e, t, i) {
                          t.unobserve_entered && I(e, i);
                        })(e, i, o),
                        T(i.callback_enter, e, t, o),
                        n || ae(e, i, o);
                    })(e.target, e, t, i)
                  : (function (e, t, i, o) {
                      E(e) ||
                        (M(e, i.class_exited),
                        (function (e, t, i, o) {
                          i.cancel_on_exit &&
                            (function (e) {
                              return S(e) === g;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              F(e, function (e) {
                                se(e);
                              }),
                                se(e);
                            })(e),
                            ce(e),
                            A(e, i.class_loading),
                            O(o, -1),
                            k(e),
                            T(i.callback_cancel, e, t, o));
                        })(e, t, i, o),
                        T(i.callback_exit, e, t, o));
                    })(e.target, e, t, i);
              });
            },
            ge = function (e) {
              return Array.prototype.slice.call(e);
            },
            fe = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ye = function (e) {
              return (function (e) {
                return S(e) === v;
              })(e);
            },
            ve = function (e, t) {
              return (function (e) {
                return ge(e).filter(E);
              })(e || fe(t));
            },
            xe = function (e, i) {
              var n = a(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  o &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (i) {
                        me(i, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, i) {
                  t &&
                    ((i._onlineHandler = function () {
                      !(function (e, t) {
                        var i;
                        ((i = fe(e)), ge(i).filter(ye)).forEach(function (t) {
                          A(t, e.class_error), k(t);
                        }),
                          t.update();
                      })(e, i);
                    }),
                    window.addEventListener("online", i._onlineHandler));
                })(n, this),
                this.update(i);
            };
          return (
            (xe.prototype = {
              update: function (e) {
                var t,
                  n,
                  r = this._settings,
                  l = ve(e, r);
                D(this, l.length),
                  !i && o
                    ? he(r)
                      ? (function (e, t, i) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, i) {
                                e.setAttribute("loading", "lazy"),
                                  le(e, t, i),
                                  (function (e, t) {
                                    var i = Q[e.tagName];
                                    i && i(e, t);
                                  })(e, t),
                                  z(e, x);
                              })(e, t, i);
                          }),
                            D(i, 0);
                        })(l, r, this)
                      : ((n = l),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(l);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  fe(this._settings).forEach(function (e) {
                    H(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  i = this._settings;
                ve(e, i).forEach(function (e) {
                  I(e, t), ae(e, i, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                fe(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (xe.load = function (e, t) {
              var i = a(t);
              ae(e, i);
            }),
            (xe.resetStatus = function (e) {
              k(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var i, o = 0; (i = t[o]); o += 1) s(e, i);
                  else s(e, t);
              })(xe, window.lazyLoadOptions),
            xe
          );
        })();
      },
      356: () => {
        window.accordion = () => ({
          activeAccordion: "",
          visible: !1,
          init() {
            this.setActiveAccordion();
          },
          setActiveAccordion(e) {
            this.activeAccordion = this.activeAccordion == e ? "" : e;
          },
        });
      },
      9: () => {},
      984: () => {},
      598: () => {
        window.videoPlayer = () => ({
          paused: !0,
          videoPlayer: null,
          isYoutube: !1,
          isVimeo: !1,
          videoToPlay: null,
          init() {
            if (
              ((this.videoPlayer = this.$el.querySelector("video")),
              null !== this.videoPlayer &&
                void 0 !== this.videoPlayer &&
                (this.videoPlayer.addEventListener("play", () => {
                  this.paused = !1;
                }),
                this.videoPlayer.addEventListener("pause", () => {
                  this.paused = !0;
                }),
                this.videoPlayer.addEventListener("ended", () => {
                  this.paused = !0;
                })),
              void 0 !== this.$el.querySelectorAll(".video-embed") &&
                null !== this.$el.querySelectorAll(".video-embed") &&
                this.$el.querySelectorAll(".video-embed").length)
            ) {
              this.$el
                .querySelector(".video-embed iframe")
                .src.includes("vimeo")
                ? (this.isVimeo = !0)
                : (this.isYoutube = !0);
            }
          },
          playVideo() {
            if (((this.paused = !1), this.isYoutube)) {
              const e = this.$root.querySelector(".video-embed iframe"),
                t = e.src.split("&");
              let i = "";
              t.forEach((e) => {
                e.includes("autoplay=") && (e = "autoplay=1"), (i += e + "&");
              }),
                (e.src = i);
            } else if (this.isVimeo)
              this.playVimeo(this.$root.querySelector(".video-embed iframe"));
            else {
              this.$root.querySelectorAll("video")[0].play();
            }
          },
          playVimeo(e) {
            (this.paused = !1), new Vimeo.Player(e).play();
          },
          pauseVimeo(e) {
            (this.paused = !0), new Vimeo.Player(e).pause();
          },
        });
      },
      226: () => {
        window.basicContactForm = () => ({
          visible: !1,
          init() {
            const e = document.querySelector(".Basic__Contact__Form").dataset
              .id;
            if (e) {
              document.getElementById("input_5_8").value = e;
            }
          },
        });
      },
      464: () => {},
      87: () => {},
      934: () => {},
      817: () => {
        window.pageModal = () => ({
          show: !1,
          init() {
            let e = document.querySelectorAll(
              ".gfield_radio .gform-field-label"
            );
            e.forEach((t) => {
              t.addEventListener("click", function () {
                e.forEach((e) => e.classList.remove("radio--active")),
                  this.classList.add("radio--active");
              });
            });
          },
          closeModal() {
            document.body.classList.remove("modal-open");
          },
        });
      },
      500: () => {},
      276: () => {},
      658: () => {},
      866: () => {
        window.scrollingTextHighlight = () => ({
          visible: !1,
          scrolling: !1,
          init() {
            this.visible = !0;
            const e = this.$el.querySelectorAll(
              ".Scrolling-Text-Highlight-word"
            );
            window.addEventListener("scroll", () => {
              if (!this.scrolling) return;
              const t = this.$el,
                i = this.$el.querySelector(".Scrolling-Text-Content"),
                o = t.offsetHeight - i.offsetHeight,
                n = (i.offsetTop / o) * 100,
                r = 100 / e.length;
              for (let t = 0; t < e.length; t++) {
                const i = e[t];
                n >= r * (t + 1)
                  ? i.classList.remove("opacity-10")
                  : i.classList.add("opacity-10");
              }
            });
          },
        });
      },
      81: () => {},
      550: () => {},
      685: () => {
        window.stackingCards = () => ({
          init() {
            var e = function (e) {
              (this.element = e),
                (this.items = this.element.getElementsByClassName(
                  "js-stack-cards__item"
                )),
                (this.scrollingFn = !1),
                (this.scrolling = !1),
                (function (e) {
                  o(e);
                  var i = new IntersectionObserver(t.bind(e), {
                    threshold: [0, 1],
                  });
                  i.observe(e.element);
                })(this),
                (function (e) {
                  e.element.addEventListener("resize-stack-cards", function () {
                    o(e), n.bind(e);
                  });
                })(this);
            };
            function t(e) {
              if (e[0].isIntersecting) {
                if (this.scrollingFn) return;
                ((t = this).scrollingFn = i.bind(t)),
                  window.addEventListener("scroll", t.scrollingFn);
              } else {
                if (!this.scrollingFn) return;
                window.removeEventListener("scroll", this.scrollingFn),
                  (this.scrollingFn = !1);
              }
              var t;
            }
            function i() {
              this.scrolling ||
                ((this.scrolling = !0),
                window.requestAnimationFrame(n.bind(this)));
            }
            function o(e) {
              (e.marginY = getComputedStyle(e.element).getPropertyValue(
                "--stack-cards-gap"
              )),
                (function (e) {
                  var t = document.createElement("div");
                  t.setAttribute(
                    "style",
                    "opacity:0; visbility: hidden;position: absolute; height:" +
                      e.marginY
                  ),
                    e.element.appendChild(t),
                    (e.marginY =
                      parseInt(getComputedStyle(t).getPropertyValue("height")) +
                      22),
                    e.element.removeChild(t);
                })(e),
                (e.elementHeight = e.element.offsetHeight);
              var t = getComputedStyle(e.items[0]);
              (e.cardTop = Math.floor(parseFloat(t.getPropertyValue("top")))),
                (e.cardHeight = Math.floor(
                  parseFloat(t.getPropertyValue("height"))
                )),
                (e.windowHeight = window.innerHeight),
                isNaN(e.marginY)
                  ? (e.element.style.paddingBottom = "0px")
                  : (e.element.style.paddingBottom =
                      e.marginY * (e.items.length - 1) + "px");
              for (var i = 0; i < e.items.length; i++)
                isNaN(e.marginY)
                  ? (e.items[i].style.transform = "none;")
                  : (e.items[i].style.transform =
                      "translateY(" + e.marginY * i + "px)");
            }
            function n() {
              if (isNaN(this.marginY)) this.scrolling = !1;
              else {
                var e = this.element.getBoundingClientRect().top;
                if (
                  this.cardTop -
                    e +
                    this.element.windowHeight -
                    this.elementHeight -
                    this.cardHeight +
                    this.marginY +
                    this.marginY * this.items.length >
                  0
                )
                  this.scrolling = !1;
                else {
                  for (var t = 0; t < this.items.length; t++) {
                    var i =
                      this.cardTop - e - t * (this.cardHeight + this.marginY);
                    if (i > 0) {
                      var o =
                        t == this.items.length - 1
                          ? 1
                          : (this.cardHeight - 0.05 * i) / this.cardHeight;
                      this.items[t].style.transform =
                        "translateY(" +
                        this.marginY * t +
                        "px) scale(" +
                        o +
                        ")";
                    } else
                      this.items[t].style.transform =
                        "translateY(" + this.marginY * t + "px)";
                  }
                  this.scrolling = !1;
                }
              }
            }
            var r = document.getElementsByClassName("js-stack-cards"),
              l =
                "IntersectionObserver" in window &&
                "IntersectionObserverEntry" in window &&
                "intersectionRatio" in
                  window.IntersectionObserverEntry.prototype;
            if (r.length > 0 && l) {
              for (var a = [], s = 0; s < r.length; s++)
                !(function (t) {
                  a.push(new e(r[t]));
                })(s);
              var c = !1,
                d = new CustomEvent("resize-stack-cards");
              function u() {
                for (var e = 0; e < a.length; e++)
                  !(function (e) {
                    a[e].element.dispatchEvent(d);
                  })(e);
              }
              window.addEventListener("resize", function () {
                clearTimeout(c), (c = setTimeout(u, 500));
              });
            }
          },
        });
      },
      846: () => {
        document.querySelectorAll(".sb-item-author-name").forEach(function (e) {
          var t = e.textContent.trim().split(" ");
          if (t.length > 1) {
            var i = t[1][0];
            t[1] = i;
          }
          e.textContent = t.join(" ");
        });
      },
      574: () => {},
      133: () => {
        window.twoColumnContent = () => ({
          visible: !1,
          isFixed: !1,
          positionTop: 0,
          lastScrollTop: 0,
          init() {
            this.positionTop = pegasus.getElemOffset(this.$el);
          },
          scroll() {
            const e = this.$el.querySelector(".Two-Column-Content-container"),
              t = this.$el.querySelector(".Two-Column-Content-left"),
              i = e.offsetHeight - t.offsetHeight,
              o = (t.offsetTop / i) * 100;
            (this.$el.querySelector("#scroll-progress").style.width = o + "%"),
              window.scrollY >= this.positionTop.top
                ? (this.visible = !0)
                : (this.visible = !1);
          },
          fix() {
            this.isFixed
              ? window.scrollY <= this.positionTop.top && (this.isFixed = !1)
              : window.scrollY >= this.positionTop.top && (this.isFixed = !0);
          },
        });
      },
      213: () => {
        window.videoPlayer = (e) => ({
          paused: !0,
          videoPlayer: null,
          isYoutube: !1,
          isVimeo: !1,
          videoToPlay: null,
          init() {
            if (
              ((this.videoPlayer = this.$el.querySelector("video")),
              null !== this.videoPlayer &&
                void 0 !== this.videoPlayer &&
                (this.videoPlayer.addEventListener("play", () => {
                  this.paused = !1;
                }),
                this.videoPlayer.addEventListener("pause", () => {
                  this.paused = !0;
                }),
                this.videoPlayer.addEventListener("ended", () => {
                  this.paused = !0;
                })),
              void 0 !== this.$el.querySelectorAll(".video-embed") &&
                null !== this.$el.querySelectorAll(".video-embed") &&
                this.$el.querySelectorAll(".video-embed").length)
            ) {
              const t = this.$el.querySelector(".video-embed iframe");
              "video_link" !== e
                ? t.src.includes("vimeo")
                  ? (this.isVimeo = !0)
                  : (this.isYoutube = !0)
                : (this.isVimeo = !0);
            }
          },
          playVideo() {
            if (((this.paused = !1), this.isYoutube)) {
              const e = this.$root.querySelector(".video-embed iframe"),
                t = e.src.split("&");
              let i = "";
              t.forEach((e) => {
                e.includes("autoplay=") && (e = "autoplay=1"), (i += e + "&");
              }),
                (e.src = i);
            } else if (this.isVimeo)
              this.playVimeo(this.$root.querySelector(".video-embed iframe"));
            else {
              this.$root.querySelectorAll("video")[0].play();
            }
          },
          playVimeo(e) {
            (this.paused = !1), new Vimeo.Player(e).play();
          },
          pauseVimeo(e) {
            (this.paused = !0), new Vimeo.Player(e).pause();
          },
        });
      },
      746: () => {
        window.wordBrandScroller = (e = 2, t = 2e3) => ({
          visible: !1,
          listItemWrapper: null,
          listItems: null,
          numberOfItems: 0,
          currentIndex: e,
          tick: null,
          delay: t,
          hasInit: !1,
          init() {
            this.$nextTick(() => {
              (this.listItemWrapper = document.querySelector(
                ".Word-Brand-Scroller__list"
              )),
                (this.listItems = document.querySelectorAll(
                  ".Word-Brand-Scroller__item"
                )),
                (this.numberOfItems = this.listItems.length),
                this.listItems[e].classList.add("active");
              for (let e = 0; e < this.numberOfItems; e++)
                this.listItemWrapper.insertAdjacentHTML(
                  "beforeend",
                  this.listItems[e].outerHTML
                );
              this.scroll(!1),
                (this.tick = setInterval(this.scroll.bind(this), this.delay)),
                (this.hasInit = !0);
            });
          },
          scroll(t = !0) {
            this.currentIndex++;
            let i = 40;
            window.innerWidth >= 768 && (i = 60),
              window.innerWidth >= 992 && (i = 94);
            const o =
              parseFloat(window.getComputedStyle(this.listItems[0]).height) +
              parseFloat(
                window.getComputedStyle(this.listItems[0]).marginBottom
              );
            this.currentIndex == this.numberOfItems + 1 + e &&
              ((this.currentIndex = e),
              (t = !1),
              setTimeout(() => {
                this.scroll();
              }, 10)),
              [...this.listItemWrapper.children].forEach((e, t) => {
                e.classList.remove("active"),
                  t == this.currentIndex && e.classList.add("active");
              }),
              (this.listItemWrapper.style.transitionDuration = t
                ? "0.7s"
                : "0s"),
              (this.listItemWrapper.style.top = `calc(50% - ${
                this.currentIndex * o + i
              }px)`);
          },
        });
      },
    },
    t = {};
  function i(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var r = (t[o] = { exports: {} });
    return e[o].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return i.d(t, { a: t }), t;
  }),
    (i.d = (e, t) => {
      for (var o in t)
        i.o(t, o) &&
          !i.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = {};
      i.r(e), i.d(e, { default: () => no });
      var t = {};
      i.r(t), i.d(t, { default: () => ro });
      var o = {};
      i.r(o);
      var n = {};
      i.r(n), i.d(n, { Map: () => so });
      var r = {};
      i.r(r);
      var l = {};
      i.r(l);
      var a = {};
      i.r(a);
      var s = {};
      i.r(s);
      var c = {};
      i.r(c);
      var d = {};
      i.r(d);
      var u = {};
      i.r(u);
      var p = {};
      i.r(p);
      var h = {};
      i.r(h);
      var m = {};
      i.r(m);
      var g = {};
      i.r(g);
      var f = {};
      i.r(f);
      var y = {};
      function v(e, t) {
        const i = Object.create(null),
          o = e.split(",");
        for (let e = 0; e < o.length; e++) i[o[e]] = !0;
        return t ? (e) => !!i[e.toLowerCase()] : (e) => !!i[e];
      }
      i.r(y);
      const x = {},
        b = (Object.assign, Object.prototype.hasOwnProperty),
        w = (e, t) => b.call(e, t),
        _ = Array.isArray,
        S = (e) => "[object Map]" === L(e),
        z = (e) => "string" == typeof e,
        k = (e) => "symbol" == typeof e,
        E = (e) => null !== e && "object" == typeof e,
        C = Object.prototype.toString,
        L = (e) => C.call(e),
        T = (e) => L(e).slice(8, -1),
        M = (e) =>
          z(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
        A = (e) => {
          const t = Object.create(null);
          return (i) => t[i] || (t[i] = e(i));
        },
        P = /-(\w)/g,
        I =
          (A((e) => e.replace(P, (e, t) => (t ? t.toUpperCase() : ""))),
          /\B([A-Z])/g),
        O =
          (A((e) => e.replace(I, "-$1").toLowerCase()),
          A((e) => e.charAt(0).toUpperCase() + e.slice(1))),
        D =
          (A((e) => (e ? `on${O(e)}` : "")),
          (e, t) => e !== t && (e == e || t == t));
      const j = new WeakMap(),
        F = [];
      let N;
      const R = Symbol(""),
        B = Symbol("");
      function $(e, t = x) {
        (function (e) {
          return e && !0 === e._isEffect;
        })(e) && (e = e.raw);
        const i = (function (e, t) {
          const i = function () {
            if (!i.active) return e();
            if (!F.includes(i)) {
              U(i);
              try {
                return H.push(W), (W = !0), F.push(i), (N = i), e();
              } finally {
                F.pop(), G(), (N = F[F.length - 1]);
              }
            }
          };
          return (
            (i.id = q++),
            (i.allowRecurse = !!t.allowRecurse),
            (i._isEffect = !0),
            (i.active = !0),
            (i.raw = e),
            (i.deps = []),
            (i.options = t),
            i
          );
        })(e, t);
        return t.lazy || i(), i;
      }
      let q = 0;
      function U(e) {
        const { deps: t } = e;
        if (t.length) {
          for (let i = 0; i < t.length; i++) t[i].delete(e);
          t.length = 0;
        }
      }
      let W = !0;
      const H = [];
      function G() {
        const e = H.pop();
        W = void 0 === e || e;
      }
      function V(e, t, i) {
        if (!W || void 0 === N) return;
        let o = j.get(e);
        o || j.set(e, (o = new Map()));
        let n = o.get(i);
        n || o.set(i, (n = new Set())), n.has(N) || (n.add(N), N.deps.push(n));
      }
      function Y(e, t, i, o, n, r) {
        const l = j.get(e);
        if (!l) return;
        const a = new Set(),
          s = (e) => {
            e &&
              e.forEach((e) => {
                (e !== N || e.allowRecurse) && a.add(e);
              });
          };
        if ("clear" === t) l.forEach(s);
        else if ("length" === i && _(e))
          l.forEach((e, t) => {
            ("length" === t || t >= o) && s(e);
          });
        else
          switch ((void 0 !== i && s(l.get(i)), t)) {
            case "add":
              _(e)
                ? M(i) && s(l.get("length"))
                : (s(l.get(R)), S(e) && s(l.get(B)));
              break;
            case "delete":
              _(e) || (s(l.get(R)), S(e) && s(l.get(B)));
              break;
            case "set":
              S(e) && s(l.get(R));
          }
        a.forEach((e) => {
          e.options.scheduler ? e.options.scheduler(e) : e();
        });
      }
      const X = v("__proto__,__v_isRef,__isVue"),
        K = new Set(
          Object.getOwnPropertyNames(Symbol)
            .map((e) => Symbol[e])
            .filter(k)
        ),
        J = te(),
        Q = te(!0),
        Z = ee();
      function ee() {
        const e = {};
        return (
          ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
            e[t] = function (...e) {
              const i = Oe(this);
              for (let e = 0, t = this.length; e < t; e++) V(i, 0, e + "");
              const o = i[t](...e);
              return -1 === o || !1 === o ? i[t](...e.map(Oe)) : o;
            };
          }),
          ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
            e[t] = function (...e) {
              H.push(W), (W = !1);
              const i = Oe(this)[t].apply(this, e);
              return G(), i;
            };
          }),
          e
        );
      }
      function te(e = !1, t = !1) {
        return function (i, o, n) {
          if ("__v_isReactive" === o) return !e;
          if ("__v_isReadonly" === o) return e;
          if ("__v_raw" === o && n === (e ? (t ? Me : Te) : t ? Le : Ce).get(i))
            return i;
          const r = _(i);
          if (!e && r && w(Z, o)) return Reflect.get(Z, o, n);
          const l = Reflect.get(i, o, n);
          if (k(o) ? K.has(o) : X(o)) return l;
          if ((e || V(i, 0, o), t)) return l;
          if (De(l)) {
            return !r || !M(o) ? l.value : l;
          }
          return E(l) ? (e ? Pe(l) : Ae(l)) : l;
        };
      }
      function ie(e = !1) {
        return function (t, i, o, n) {
          let r = t[i];
          if (!e && ((o = Oe(o)), (r = Oe(r)), !_(t) && De(r) && !De(o)))
            return (r.value = o), !0;
          const l = _(t) && M(i) ? Number(i) < t.length : w(t, i),
            a = Reflect.set(t, i, o, n);
          return (
            t === Oe(n) &&
              (l ? D(o, r) && Y(t, "set", i, o) : Y(t, "add", i, o)),
            a
          );
        };
      }
      const oe = {
          get: J,
          set: ie(),
          deleteProperty: function (e, t) {
            const i = w(e, t),
              o = (e[t], Reflect.deleteProperty(e, t));
            return o && i && Y(e, "delete", t, void 0), o;
          },
          has: function (e, t) {
            const i = Reflect.has(e, t);
            return (k(t) && K.has(t)) || V(e, 0, t), i;
          },
          ownKeys: function (e) {
            return V(e, 0, _(e) ? "length" : R), Reflect.ownKeys(e);
          },
        },
        ne = { get: Q, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
        re = (e) => (E(e) ? Ae(e) : e),
        le = (e) => (E(e) ? Pe(e) : e),
        ae = (e) => e,
        se = (e) => Reflect.getPrototypeOf(e);
      function ce(e, t, i = !1, o = !1) {
        const n = Oe((e = e.__v_raw)),
          r = Oe(t);
        t !== r && !i && V(n, 0, t), !i && V(n, 0, r);
        const { has: l } = se(n),
          a = o ? ae : i ? le : re;
        return l.call(n, t)
          ? a(e.get(t))
          : l.call(n, r)
          ? a(e.get(r))
          : void (e !== n && e.get(t));
      }
      function de(e, t = !1) {
        const i = this.__v_raw,
          o = Oe(i),
          n = Oe(e);
        return (
          e !== n && !t && V(o, 0, e),
          !t && V(o, 0, n),
          e === n ? i.has(e) : i.has(e) || i.has(n)
        );
      }
      function ue(e, t = !1) {
        return (e = e.__v_raw), !t && V(Oe(e), 0, R), Reflect.get(e, "size", e);
      }
      function pe(e) {
        e = Oe(e);
        const t = Oe(this);
        return se(t).has.call(t, e) || (t.add(e), Y(t, "add", e, e)), this;
      }
      function he(e, t) {
        t = Oe(t);
        const i = Oe(this),
          { has: o, get: n } = se(i);
        let r = o.call(i, e);
        r || ((e = Oe(e)), (r = o.call(i, e)));
        const l = n.call(i, e);
        return (
          i.set(e, t),
          r ? D(t, l) && Y(i, "set", e, t) : Y(i, "add", e, t),
          this
        );
      }
      function me(e) {
        const t = Oe(this),
          { has: i, get: o } = se(t);
        let n = i.call(t, e);
        n || ((e = Oe(e)), (n = i.call(t, e)));
        o && o.call(t, e);
        const r = t.delete(e);
        return n && Y(t, "delete", e, void 0), r;
      }
      function ge() {
        const e = Oe(this),
          t = 0 !== e.size,
          i = e.clear();
        return t && Y(e, "clear", void 0, void 0), i;
      }
      function fe(e, t) {
        return function (i, o) {
          const n = this,
            r = n.__v_raw,
            l = Oe(r),
            a = t ? ae : e ? le : re;
          return (
            !e && V(l, 0, R), r.forEach((e, t) => i.call(o, a(e), a(t), n))
          );
        };
      }
      function ye(e, t, i) {
        return function (...o) {
          const n = this.__v_raw,
            r = Oe(n),
            l = S(r),
            a = "entries" === e || (e === Symbol.iterator && l),
            s = "keys" === e && l,
            c = n[e](...o),
            d = i ? ae : t ? le : re;
          return (
            !t && V(r, 0, s ? B : R),
            {
              next() {
                const { value: e, done: t } = c.next();
                return t
                  ? { value: e, done: t }
                  : { value: a ? [d(e[0]), d(e[1])] : d(e), done: t };
              },
              [Symbol.iterator]() {
                return this;
              },
            }
          );
        };
      }
      function ve(e) {
        return function (...t) {
          return "delete" !== e && this;
        };
      }
      function xe() {
        const e = {
            get(e) {
              return ce(this, e);
            },
            get size() {
              return ue(this);
            },
            has: de,
            add: pe,
            set: he,
            delete: me,
            clear: ge,
            forEach: fe(!1, !1),
          },
          t = {
            get(e) {
              return ce(this, e, !1, !0);
            },
            get size() {
              return ue(this);
            },
            has: de,
            add: pe,
            set: he,
            delete: me,
            clear: ge,
            forEach: fe(!1, !0),
          },
          i = {
            get(e) {
              return ce(this, e, !0);
            },
            get size() {
              return ue(this, !0);
            },
            has(e) {
              return de.call(this, e, !0);
            },
            add: ve("add"),
            set: ve("set"),
            delete: ve("delete"),
            clear: ve("clear"),
            forEach: fe(!0, !1),
          },
          o = {
            get(e) {
              return ce(this, e, !0, !0);
            },
            get size() {
              return ue(this, !0);
            },
            has(e) {
              return de.call(this, e, !0);
            },
            add: ve("add"),
            set: ve("set"),
            delete: ve("delete"),
            clear: ve("clear"),
            forEach: fe(!0, !0),
          };
        return (
          ["keys", "values", "entries", Symbol.iterator].forEach((n) => {
            (e[n] = ye(n, !1, !1)),
              (i[n] = ye(n, !0, !1)),
              (t[n] = ye(n, !1, !0)),
              (o[n] = ye(n, !0, !0));
          }),
          [e, i, t, o]
        );
      }
      const [be, we, _e, Se] = xe();
      function ze(e, t) {
        const i = t ? (e ? Se : _e) : e ? we : be;
        return (t, o, n) =>
          "__v_isReactive" === o
            ? !e
            : "__v_isReadonly" === o
            ? e
            : "__v_raw" === o
            ? t
            : Reflect.get(w(i, o) && o in t ? i : t, o, n);
      }
      const ke = { get: ze(!1, !1) },
        Ee = { get: ze(!0, !1) };
      const Ce = new WeakMap(),
        Le = new WeakMap(),
        Te = new WeakMap(),
        Me = new WeakMap();
      function Ae(e) {
        return e && e.__v_isReadonly ? e : Ie(e, !1, oe, ke, Ce);
      }
      function Pe(e) {
        return Ie(e, !0, ne, Ee, Te);
      }
      function Ie(e, t, i, o, n) {
        if (!E(e)) return e;
        if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
        const r = n.get(e);
        if (r) return r;
        const l =
          (a = e).__v_skip || !Object.isExtensible(a)
            ? 0
            : (function (e) {
                switch (e) {
                  case "Object":
                  case "Array":
                    return 1;
                  case "Map":
                  case "Set":
                  case "WeakMap":
                  case "WeakSet":
                    return 2;
                  default:
                    return 0;
                }
              })(T(a));
        var a;
        if (0 === l) return e;
        const s = new Proxy(e, 2 === l ? o : i);
        return n.set(e, s), s;
      }
      function Oe(e) {
        return (e && Oe(e.__v_raw)) || e;
      }
      function De(e) {
        return Boolean(e && !0 === e.__v_isRef);
      }
      var je,
        Fe,
        Ne,
        Re,
        Be = !1,
        $e = !1,
        qe = [],
        Ue = -1;
      function We(e) {
        !(function (e) {
          qe.includes(e) || qe.push(e);
          $e || Be || ((Be = !0), queueMicrotask(Ge));
        })(e);
      }
      function He(e) {
        let t = qe.indexOf(e);
        -1 !== t && t > Ue && qe.splice(t, 1);
      }
      function Ge() {
        (Be = !1), ($e = !0);
        for (let e = 0; e < qe.length; e++) qe[e](), (Ue = e);
        (qe.length = 0), (Ue = -1), ($e = !1);
      }
      var Ve = !0;
      function Ye(e) {
        Fe = e;
      }
      var Xe = [],
        Ke = [],
        Je = [];
      function Qe(e, t) {
        "function" == typeof t
          ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
          : ((t = e), Ke.push(t));
      }
      function Ze(e, t) {
        e._x_attributeCleanups &&
          Object.entries(e._x_attributeCleanups).forEach(([i, o]) => {
            (void 0 === t || t.includes(i)) &&
              (o.forEach((e) => e()), delete e._x_attributeCleanups[i]);
          });
      }
      var et = new MutationObserver(ct),
        tt = !1;
      function it() {
        et.observe(document, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          attributeOldValue: !0,
        }),
          (tt = !0);
      }
      function ot() {
        (nt = nt.concat(et.takeRecords())).length &&
          !rt &&
          ((rt = !0),
          queueMicrotask(() => {
            ct(nt), (nt.length = 0), (rt = !1);
          })),
          et.disconnect(),
          (tt = !1);
      }
      var nt = [],
        rt = !1;
      function lt(e) {
        if (!tt) return e();
        ot();
        let t = e();
        return it(), t;
      }
      var at = !1,
        st = [];
      function ct(e) {
        if (at) return void (st = st.concat(e));
        let t = [],
          i = [],
          o = new Map(),
          n = new Map();
        for (let r = 0; r < e.length; r++)
          if (
            !e[r].target._x_ignoreMutationObserver &&
            ("childList" === e[r].type &&
              (e[r].addedNodes.forEach((e) => 1 === e.nodeType && t.push(e)),
              e[r].removedNodes.forEach((e) => 1 === e.nodeType && i.push(e))),
            "attributes" === e[r].type)
          ) {
            let t = e[r].target,
              i = e[r].attributeName,
              l = e[r].oldValue,
              a = () => {
                o.has(t) || o.set(t, []),
                  o.get(t).push({ name: i, value: t.getAttribute(i) });
              },
              s = () => {
                n.has(t) || n.set(t, []), n.get(t).push(i);
              };
            t.hasAttribute(i) && null === l
              ? a()
              : t.hasAttribute(i)
              ? (s(), a())
              : s();
          }
        n.forEach((e, t) => {
          Ze(t, e);
        }),
          o.forEach((e, t) => {
            Xe.forEach((i) => i(t, e));
          });
        for (let e of i)
          if (!t.includes(e) && (Ke.forEach((t) => t(e)), e._x_cleanups))
            for (; e._x_cleanups.length; ) e._x_cleanups.pop()();
        t.forEach((e) => {
          (e._x_ignoreSelf = !0), (e._x_ignore = !0);
        });
        for (let e of t)
          i.includes(e) ||
            (e.isConnected &&
              (delete e._x_ignoreSelf,
              delete e._x_ignore,
              Je.forEach((t) => t(e)),
              (e._x_ignore = !0),
              (e._x_ignoreSelf = !0)));
        t.forEach((e) => {
          delete e._x_ignoreSelf, delete e._x_ignore;
        }),
          (t = null),
          (i = null),
          (o = null),
          (n = null);
      }
      function dt(e) {
        return ht(pt(e));
      }
      function ut(e, t, i) {
        return (
          (e._x_dataStack = [t, ...pt(i || e)]),
          () => {
            e._x_dataStack = e._x_dataStack.filter((e) => e !== t);
          }
        );
      }
      function pt(e) {
        return e._x_dataStack
          ? e._x_dataStack
          : "function" == typeof ShadowRoot && e instanceof ShadowRoot
          ? pt(e.host)
          : e.parentNode
          ? pt(e.parentNode)
          : [];
      }
      function ht(e) {
        let t = new Proxy(
          {},
          {
            ownKeys: () =>
              Array.from(new Set(e.flatMap((e) => Object.keys(e)))),
            has: (t, i) => e.some((e) => e.hasOwnProperty(i)),
            get: (i, o) =>
              (e.find((e) => {
                if (e.hasOwnProperty(o)) {
                  let i = Object.getOwnPropertyDescriptor(e, o);
                  if (
                    (i.get && i.get._x_alreadyBound) ||
                    (i.set && i.set._x_alreadyBound)
                  )
                    return !0;
                  if ((i.get || i.set) && i.enumerable) {
                    let n = i.get,
                      r = i.set,
                      l = i;
                    (n = n && n.bind(t)),
                      (r = r && r.bind(t)),
                      n && (n._x_alreadyBound = !0),
                      r && (r._x_alreadyBound = !0),
                      Object.defineProperty(e, o, { ...l, get: n, set: r });
                  }
                  return !0;
                }
                return !1;
              }) || {})[o],
            set: (t, i, o) => {
              let n = e.find((e) => e.hasOwnProperty(i));
              return n ? (n[i] = o) : (e[e.length - 1][i] = o), !0;
            },
          }
        );
        return t;
      }
      function mt(e) {
        let t = (i, o = "") => {
          Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(
            ([n, { value: r, enumerable: l }]) => {
              if (!1 === l || void 0 === r) return;
              let a = "" === o ? n : `${o}.${n}`;
              var s;
              "object" == typeof r && null !== r && r._x_interceptor
                ? (i[n] = r.initialize(e, a, n))
                : "object" != typeof (s = r) ||
                  Array.isArray(s) ||
                  null === s ||
                  r === i ||
                  r instanceof Element ||
                  t(r, a);
            }
          );
        };
        return t(e);
      }
      function gt(e, t = () => {}) {
        let i = {
          initialValue: void 0,
          _x_interceptor: !0,
          initialize(t, i, o) {
            return e(
              this.initialValue,
              () =>
                (function (e, t) {
                  return t.split(".").reduce((e, t) => e[t], e);
                })(t, i),
              (e) => ft(t, i, e),
              i,
              o
            );
          },
        };
        return (
          t(i),
          (e) => {
            if ("object" == typeof e && null !== e && e._x_interceptor) {
              let t = i.initialize.bind(i);
              i.initialize = (o, n, r) => {
                let l = e.initialize(o, n, r);
                return (i.initialValue = l), t(o, n, r);
              };
            } else i.initialValue = e;
            return i;
          }
        );
      }
      function ft(e, t, i) {
        if (("string" == typeof t && (t = t.split(".")), 1 !== t.length)) {
          if (0 === t.length) throw error;
          return e[t[0]] || (e[t[0]] = {}), ft(e[t[0]], t.slice(1), i);
        }
        e[t[0]] = i;
      }
      var yt = {};
      function vt(e, t) {
        yt[e] = t;
      }
      function xt(e, t) {
        return (
          Object.entries(yt).forEach(([i, o]) => {
            let n = null;
            Object.defineProperty(e, `$${i}`, {
              get: () =>
                o(
                  t,
                  (function () {
                    if (n) return n;
                    {
                      let [e, i] = Nt(t);
                      return (n = { interceptor: gt, ...e }), Qe(t, i), n;
                    }
                  })()
                ),
              enumerable: !1,
            });
          }),
          e
        );
      }
      function bt(e, t, i, ...o) {
        try {
          return i(...o);
        } catch (i) {
          wt(i, e, t);
        }
      }
      function wt(e, t, i = void 0) {
        Object.assign(e, { el: t, expression: i }),
          console.warn(
            `Alpine Expression Error: ${e.message}\n\n${
              i ? 'Expression: "' + i + '"\n\n' : ""
            }`,
            t
          ),
          setTimeout(() => {
            throw e;
          }, 0);
      }
      var _t = !0;
      function St(e, t, i = {}) {
        let o;
        return zt(e, t)((e) => (o = e), i), o;
      }
      function zt(...e) {
        return kt(...e);
      }
      var kt = Et;
      function Et(e, t) {
        let i = {};
        xt(i, e);
        let o = [i, ...pt(e)],
          n =
            "function" == typeof t
              ? (function (e, t) {
                  return (
                    i = () => {},
                    { scope: o = {}, params: n = [] } = {}
                  ) => {
                    Lt(i, t.apply(ht([o, ...e]), n));
                  };
                })(o, t)
              : (function (e, t, i) {
                  let o = (function (e, t) {
                    if (Ct[e]) return Ct[e];
                    let i = Object.getPrototypeOf(
                        async function () {}
                      ).constructor,
                      o =
                        /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e)
                          ? `(async()=>{ ${e} })()`
                          : e;
                    const n = () => {
                      try {
                        return new i(
                          ["__self", "scope"],
                          `with (scope) { __self.result = ${o} }; __self.finished = true; return __self.result;`
                        );
                      } catch (i) {
                        return wt(i, t, e), Promise.resolve();
                      }
                    };
                    let r = n();
                    return (Ct[e] = r), r;
                  })(t, i);
                  return (
                    n = () => {},
                    { scope: r = {}, params: l = [] } = {}
                  ) => {
                    (o.result = void 0), (o.finished = !1);
                    let a = ht([r, ...e]);
                    if ("function" == typeof o) {
                      let e = o(o, a).catch((e) => wt(e, i, t));
                      o.finished
                        ? (Lt(n, o.result, a, l, i), (o.result = void 0))
                        : e
                            .then((e) => {
                              Lt(n, e, a, l, i);
                            })
                            .catch((e) => wt(e, i, t))
                            .finally(() => (o.result = void 0));
                    }
                  };
                })(o, t, e);
        return bt.bind(null, e, t, n);
      }
      var Ct = {};
      function Lt(e, t, i, o, n) {
        if (_t && "function" == typeof t) {
          let r = t.apply(i, o);
          r instanceof Promise
            ? r.then((t) => Lt(e, t, i, o)).catch((e) => wt(e, n, t))
            : e(r);
        } else
          "object" == typeof t && t instanceof Promise
            ? t.then((t) => e(t))
            : e(t);
      }
      var Tt = "x-";
      function Mt(e = "") {
        return Tt + e;
      }
      var At = {};
      function Pt(e, t) {
        return (
          (At[e] = t),
          {
            before(t) {
              if (!At[t])
                return void console.warn(
                  "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
                );
              const i = Gt.indexOf(t);
              Gt.splice(i >= 0 ? i : Gt.indexOf("DEFAULT"), 0, e);
            },
          }
        );
      }
      function It(e, t, i) {
        if (((t = Array.from(t)), e._x_virtualDirectives)) {
          let i = Object.entries(e._x_virtualDirectives).map(([e, t]) => ({
              name: e,
              value: t,
            })),
            o = Ot(i);
          (i = i.map((e) =>
            o.find((t) => t.name === e.name)
              ? { name: `x-bind:${e.name}`, value: `"${e.value}"` }
              : e
          )),
            (t = t.concat(i));
        }
        let o = {},
          n = t
            .map(Bt((e, t) => (o[e] = t)))
            .filter(Ut)
            .map(
              (function (e, t) {
                return ({ name: i, value: o }) => {
                  let n = i.match(Wt()),
                    r = i.match(/:([a-zA-Z0-9\-:]+)/),
                    l = i.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                    a = t || e[i] || i;
                  return {
                    type: n ? n[1] : null,
                    value: r ? r[1] : null,
                    modifiers: l.map((e) => e.replace(".", "")),
                    expression: o,
                    original: a,
                  };
                };
              })(o, i)
            )
            .sort(Vt);
        return n.map((t) =>
          (function (e, t) {
            let i = () => {},
              o = At[t.type] || i,
              [n, r] = Nt(e);
            !(function (e, t, i) {
              e._x_attributeCleanups || (e._x_attributeCleanups = {}),
                e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
                e._x_attributeCleanups[t].push(i);
            })(e, t.original, r);
            let l = () => {
              e._x_ignore ||
                e._x_ignoreSelf ||
                (o.inline && o.inline(e, t, n),
                (o = o.bind(o, e, t, n)),
                Dt ? jt.get(Ft).push(o) : o());
            };
            return (l.runCleanups = r), l;
          })(e, t)
        );
      }
      function Ot(e) {
        return Array.from(e)
          .map(Bt())
          .filter((e) => !Ut(e));
      }
      var Dt = !1,
        jt = new Map(),
        Ft = Symbol();
      function Nt(e) {
        let t = [],
          [i, o] = (function (e) {
            let t = () => {};
            return [
              (i) => {
                let o = Fe(i);
                return (
                  e._x_effects ||
                    ((e._x_effects = new Set()),
                    (e._x_runEffects = () => {
                      e._x_effects.forEach((e) => e());
                    })),
                  e._x_effects.add(o),
                  (t = () => {
                    void 0 !== o && (e._x_effects.delete(o), Ne(o));
                  }),
                  o
                );
              },
              () => {
                t();
              },
            ];
          })(e);
        t.push(o);
        return [
          {
            Alpine: Oi,
            effect: i,
            cleanup: (e) => t.push(e),
            evaluateLater: zt.bind(zt, e),
            evaluate: St.bind(St, e),
          },
          () => t.forEach((e) => e()),
        ];
      }
      var Rt =
        (e, t) =>
        ({ name: i, value: o }) => (
          i.startsWith(e) && (i = i.replace(e, t)), { name: i, value: o }
        );
      function Bt(e = () => {}) {
        return ({ name: t, value: i }) => {
          let { name: o, value: n } = $t.reduce((e, t) => t(e), {
            name: t,
            value: i,
          });
          return o !== t && e(o, t), { name: o, value: n };
        };
      }
      var $t = [];
      function qt(e) {
        $t.push(e);
      }
      function Ut({ name: e }) {
        return Wt().test(e);
      }
      var Wt = () => new RegExp(`^${Tt}([^:^.]+)\\b`);
      var Ht = "DEFAULT",
        Gt = [
          "ignore",
          "ref",
          "data",
          "id",
          "bind",
          "init",
          "for",
          "model",
          "modelable",
          "transition",
          "show",
          "if",
          Ht,
          "teleport",
        ];
      function Vt(e, t) {
        let i = -1 === Gt.indexOf(e.type) ? Ht : e.type,
          o = -1 === Gt.indexOf(t.type) ? Ht : t.type;
        return Gt.indexOf(i) - Gt.indexOf(o);
      }
      function Yt(e, t, i = {}) {
        e.dispatchEvent(
          new CustomEvent(t, {
            detail: i,
            bubbles: !0,
            composed: !0,
            cancelable: !0,
          })
        );
      }
      function Xt(e, t) {
        if ("function" == typeof ShadowRoot && e instanceof ShadowRoot)
          return void Array.from(e.children).forEach((e) => Xt(e, t));
        let i = !1;
        if ((t(e, () => (i = !0)), i)) return;
        let o = e.firstElementChild;
        for (; o; ) Xt(o, t), (o = o.nextElementSibling);
      }
      function Kt(e, ...t) {
        console.warn(`Alpine Warning: ${e}`, ...t);
      }
      var Jt = !1;
      var Qt = [],
        Zt = [];
      function ei() {
        return Qt.map((e) => e());
      }
      function ti() {
        return Qt.concat(Zt).map((e) => e());
      }
      function ii(e) {
        Qt.push(e);
      }
      function oi(e) {
        Zt.push(e);
      }
      function ni(e, t = !1) {
        return ri(e, (e) => {
          if ((t ? ti() : ei()).some((t) => e.matches(t))) return !0;
        });
      }
      function ri(e, t) {
        if (e) {
          if (t(e)) return e;
          if ((e._x_teleportBack && (e = e._x_teleportBack), e.parentElement))
            return ri(e.parentElement, t);
        }
      }
      var li = [];
      function ai(e, t = Xt, i = () => {}) {
        !(function (e) {
          Dt = !0;
          let t = Symbol();
          (Ft = t), jt.set(t, []);
          let i = () => {
            for (; jt.get(t).length; ) jt.get(t).shift()();
            jt.delete(t);
          };
          e(i), (Dt = !1), i();
        })(() => {
          t(e, (e, t) => {
            i(e, t),
              li.forEach((i) => i(e, t)),
              It(e, e.attributes).forEach((e) => e()),
              e._x_ignore && t();
          });
        });
      }
      function si(e) {
        Xt(e, (e) => Ze(e));
      }
      var ci = [],
        di = !1;
      function ui(e = () => {}) {
        return (
          queueMicrotask(() => {
            di ||
              setTimeout(() => {
                pi();
              });
          }),
          new Promise((t) => {
            ci.push(() => {
              e(), t();
            });
          })
        );
      }
      function pi() {
        for (di = !1; ci.length; ) ci.shift()();
      }
      function hi(e, t) {
        return Array.isArray(t)
          ? mi(e, t.join(" "))
          : "object" == typeof t && null !== t
          ? (function (e, t) {
              let i = (e) => e.split(" ").filter(Boolean),
                o = Object.entries(t)
                  .flatMap(([e, t]) => !!t && i(e))
                  .filter(Boolean),
                n = Object.entries(t)
                  .flatMap(([e, t]) => !t && i(e))
                  .filter(Boolean),
                r = [],
                l = [];
              return (
                n.forEach((t) => {
                  e.classList.contains(t) && (e.classList.remove(t), l.push(t));
                }),
                o.forEach((t) => {
                  e.classList.contains(t) || (e.classList.add(t), r.push(t));
                }),
                () => {
                  l.forEach((t) => e.classList.add(t)),
                    r.forEach((t) => e.classList.remove(t));
                }
              );
            })(e, t)
          : "function" == typeof t
          ? hi(e, t())
          : mi(e, t);
      }
      function mi(e, t) {
        return (
          (t = !0 === t ? (t = "") : t || ""),
          ((t) => (
            e.classList.add(...t),
            () => {
              e.classList.remove(...t);
            }
          ))(
            t
              .split(" ")
              .filter((t) => !e.classList.contains(t))
              .filter(Boolean)
          )
        );
      }
      function gi(e, t) {
        return "object" == typeof t && null !== t
          ? (function (e, t) {
              let i = {};
              return (
                Object.entries(t).forEach(([t, o]) => {
                  (i[t] = e.style[t]),
                    t.startsWith("--") ||
                      (t = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
                    e.style.setProperty(t, o);
                }),
                setTimeout(() => {
                  0 === e.style.length && e.removeAttribute("style");
                }),
                () => {
                  gi(e, i);
                }
              );
            })(e, t)
          : (function (e, t) {
              let i = e.getAttribute("style", t);
              return (
                e.setAttribute("style", t),
                () => {
                  e.setAttribute("style", i || "");
                }
              );
            })(e, t);
      }
      function fi(e, t = () => {}) {
        let i = !1;
        return function () {
          i ? t.apply(this, arguments) : ((i = !0), e.apply(this, arguments));
        };
      }
      function yi(e, t, i = {}) {
        e._x_transition ||
          (e._x_transition = {
            enter: { during: i, start: i, end: i },
            leave: { during: i, start: i, end: i },
            in(i = () => {}, o = () => {}) {
              xi(
                e,
                t,
                {
                  during: this.enter.during,
                  start: this.enter.start,
                  end: this.enter.end,
                },
                i,
                o
              );
            },
            out(i = () => {}, o = () => {}) {
              xi(
                e,
                t,
                {
                  during: this.leave.during,
                  start: this.leave.start,
                  end: this.leave.end,
                },
                i,
                o
              );
            },
          });
      }
      function vi(e) {
        let t = e.parentNode;
        if (t) return t._x_hidePromise ? t : vi(t);
      }
      function xi(
        e,
        t,
        { during: i, start: o, end: n } = {},
        r = () => {},
        l = () => {}
      ) {
        if (
          (e._x_transitioning && e._x_transitioning.cancel(),
          0 === Object.keys(i).length &&
            0 === Object.keys(o).length &&
            0 === Object.keys(n).length)
        )
          return r(), void l();
        let a, s, c;
        !(function (e, t) {
          let i,
            o,
            n,
            r = fi(() => {
              lt(() => {
                (i = !0),
                  o || t.before(),
                  n || (t.end(), pi()),
                  t.after(),
                  e.isConnected && t.cleanup(),
                  delete e._x_transitioning;
              });
            });
          (e._x_transitioning = {
            beforeCancels: [],
            beforeCancel(e) {
              this.beforeCancels.push(e);
            },
            cancel: fi(function () {
              for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
              r();
            }),
            finish: r,
          }),
            lt(() => {
              t.start(), t.during();
            }),
            (di = !0),
            requestAnimationFrame(() => {
              if (i) return;
              let r =
                  1e3 *
                  Number(
                    getComputedStyle(e)
                      .transitionDuration.replace(/,.*/, "")
                      .replace("s", "")
                  ),
                l =
                  1e3 *
                  Number(
                    getComputedStyle(e)
                      .transitionDelay.replace(/,.*/, "")
                      .replace("s", "")
                  );
              0 === r &&
                (r =
                  1e3 *
                  Number(
                    getComputedStyle(e).animationDuration.replace("s", "")
                  )),
                lt(() => {
                  t.before();
                }),
                (o = !0),
                requestAnimationFrame(() => {
                  i ||
                    (lt(() => {
                      t.end();
                    }),
                    pi(),
                    setTimeout(e._x_transitioning.finish, r + l),
                    (n = !0));
                });
            });
        })(e, {
          start() {
            a = t(e, o);
          },
          during() {
            s = t(e, i);
          },
          before: r,
          end() {
            a(), (c = t(e, n));
          },
          after: l,
          cleanup() {
            s(), c();
          },
        });
      }
      function bi(e, t, i) {
        if (-1 === e.indexOf(t)) return i;
        const o = e[e.indexOf(t) + 1];
        if (!o) return i;
        if ("scale" === t && isNaN(o)) return i;
        if ("duration" === t || "delay" === t) {
          let e = o.match(/([0-9]+)ms/);
          if (e) return e[1];
        }
        return "origin" === t &&
          ["top", "right", "left", "center", "bottom"].includes(
            e[e.indexOf(t) + 2]
          )
          ? [o, e[e.indexOf(t) + 2]].join(" ")
          : o;
      }
      Pt(
        "transition",
        (e, { value: t, modifiers: i, expression: o }, { evaluate: n }) => {
          "function" == typeof o && (o = n(o)),
            !1 !== o &&
              (o && "boolean" != typeof o
                ? (function (e, t, i) {
                    yi(e, hi, "");
                    let o = {
                      enter: (t) => {
                        e._x_transition.enter.during = t;
                      },
                      "enter-start": (t) => {
                        e._x_transition.enter.start = t;
                      },
                      "enter-end": (t) => {
                        e._x_transition.enter.end = t;
                      },
                      leave: (t) => {
                        e._x_transition.leave.during = t;
                      },
                      "leave-start": (t) => {
                        e._x_transition.leave.start = t;
                      },
                      "leave-end": (t) => {
                        e._x_transition.leave.end = t;
                      },
                    };
                    o[i](t);
                  })(e, o, t)
                : (function (e, t, i) {
                    yi(e, gi);
                    let o = !t.includes("in") && !t.includes("out") && !i,
                      n = o || t.includes("in") || ["enter"].includes(i),
                      r = o || t.includes("out") || ["leave"].includes(i);
                    t.includes("in") &&
                      !o &&
                      (t = t.filter((e, i) => i < t.indexOf("out")));
                    t.includes("out") &&
                      !o &&
                      (t = t.filter((e, i) => i > t.indexOf("out")));
                    let l = !t.includes("opacity") && !t.includes("scale"),
                      a = l || t.includes("opacity"),
                      s = l || t.includes("scale"),
                      c = a ? 0 : 1,
                      d = s ? bi(t, "scale", 95) / 100 : 1,
                      u = bi(t, "delay", 0) / 1e3,
                      p = bi(t, "origin", "center"),
                      h = "opacity, transform",
                      m = bi(t, "duration", 150) / 1e3,
                      g = bi(t, "duration", 75) / 1e3,
                      f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
                    n &&
                      ((e._x_transition.enter.during = {
                        transformOrigin: p,
                        transitionDelay: `${u}s`,
                        transitionProperty: h,
                        transitionDuration: `${m}s`,
                        transitionTimingFunction: f,
                      }),
                      (e._x_transition.enter.start = {
                        opacity: c,
                        transform: `scale(${d})`,
                      }),
                      (e._x_transition.enter.end = {
                        opacity: 1,
                        transform: "scale(1)",
                      }));
                    r &&
                      ((e._x_transition.leave.during = {
                        transformOrigin: p,
                        transitionDelay: `${u}s`,
                        transitionProperty: h,
                        transitionDuration: `${g}s`,
                        transitionTimingFunction: f,
                      }),
                      (e._x_transition.leave.start = {
                        opacity: 1,
                        transform: "scale(1)",
                      }),
                      (e._x_transition.leave.end = {
                        opacity: c,
                        transform: `scale(${d})`,
                      }));
                  })(e, i, t));
        }
      ),
        (window.Element.prototype._x_toggleAndCascadeWithTransitions =
          function (e, t, i, o) {
            const n =
              "visible" === document.visibilityState
                ? requestAnimationFrame
                : setTimeout;
            let r = () => n(i);
            t
              ? e._x_transition &&
                (e._x_transition.enter || e._x_transition.leave)
                ? e._x_transition.enter &&
                  (Object.entries(e._x_transition.enter.during).length ||
                    Object.entries(e._x_transition.enter.start).length ||
                    Object.entries(e._x_transition.enter.end).length)
                  ? e._x_transition.in(i)
                  : r()
                : e._x_transition
                ? e._x_transition.in(i)
                : r()
              : ((e._x_hidePromise = e._x_transition
                  ? new Promise((t, i) => {
                      e._x_transition.out(
                        () => {},
                        () => t(o)
                      ),
                        e._x_transitioning.beforeCancel(() =>
                          i({ isFromCancelledTransition: !0 })
                        );
                    })
                  : Promise.resolve(o)),
                queueMicrotask(() => {
                  let t = vi(e);
                  t
                    ? (t._x_hideChildren || (t._x_hideChildren = []),
                      t._x_hideChildren.push(e))
                    : n(() => {
                        let t = (e) => {
                          let i = Promise.all([
                            e._x_hidePromise,
                            ...(e._x_hideChildren || []).map(t),
                          ]).then(([e]) => e());
                          return (
                            delete e._x_hidePromise, delete e._x_hideChildren, i
                          );
                        };
                        t(e).catch((e) => {
                          if (!e.isFromCancelledTransition) throw e;
                        });
                      });
                }));
          });
      var wi = !1;
      function _i(e, t = () => {}) {
        return (...i) => (wi ? t(...i) : e(...i));
      }
      function Si(e, t, i, o = []) {
        switch (
          (e._x_bindings || (e._x_bindings = je({})),
          (e._x_bindings[t] = i),
          (t = o.includes("camel")
            ? t.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase())
            : t))
        ) {
          case "value":
            !(function (e, t) {
              if ("radio" === e.type)
                void 0 === e.attributes.value && (e.value = t),
                  window.fromModel && (e.checked = ki(e.value, t));
              else if ("checkbox" === e.type)
                Number.isInteger(t)
                  ? (e.value = t)
                  : Number.isInteger(t) ||
                    Array.isArray(t) ||
                    "boolean" == typeof t ||
                    [null, void 0].includes(t)
                  ? Array.isArray(t)
                    ? (e.checked = t.some((t) => ki(t, e.value)))
                    : (e.checked = !!t)
                  : (e.value = String(t));
              else if ("SELECT" === e.tagName)
                !(function (e, t) {
                  const i = [].concat(t).map((e) => e + "");
                  Array.from(e.options).forEach((e) => {
                    e.selected = i.includes(e.value);
                  });
                })(e, t);
              else {
                if (e.value === t) return;
                e.value = t;
              }
            })(e, i);
            break;
          case "style":
            !(function (e, t) {
              e._x_undoAddedStyles && e._x_undoAddedStyles();
              e._x_undoAddedStyles = gi(e, t);
            })(e, i);
            break;
          case "class":
            !(function (e, t) {
              e._x_undoAddedClasses && e._x_undoAddedClasses();
              e._x_undoAddedClasses = hi(e, t);
            })(e, i);
            break;
          case "selected":
          case "checked":
            !(function (e, t, i) {
              zi(e, t, i),
                (function (e, t, i) {
                  e[t] !== i && (e[t] = i);
                })(e, t, i);
            })(e, t, i);
            break;
          default:
            zi(e, t, i);
        }
      }
      function zi(e, t, i) {
        [null, void 0, !1].includes(i) &&
        (function (e) {
          return ![
            "aria-pressed",
            "aria-checked",
            "aria-expanded",
            "aria-selected",
          ].includes(e);
        })(t)
          ? e.removeAttribute(t)
          : (Ei(t) && (i = t),
            (function (e, t, i) {
              e.getAttribute(t) != i && e.setAttribute(t, i);
            })(e, t, i));
      }
      function ki(e, t) {
        return e == t;
      }
      function Ei(e) {
        return [
          "disabled",
          "checked",
          "required",
          "readonly",
          "hidden",
          "open",
          "selected",
          "autofocus",
          "itemscope",
          "multiple",
          "novalidate",
          "allowfullscreen",
          "allowpaymentrequest",
          "formnovalidate",
          "autoplay",
          "controls",
          "loop",
          "muted",
          "playsinline",
          "default",
          "ismap",
          "reversed",
          "async",
          "defer",
          "nomodule",
        ].includes(e);
      }
      function Ci(e, t) {
        var i;
        return function () {
          var o = this,
            n = arguments;
          clearTimeout(i),
            (i = setTimeout(function () {
              (i = null), e.apply(o, n);
            }, t));
        };
      }
      function Li(e, t) {
        let i;
        return function () {
          let o = this,
            n = arguments;
          i || (e.apply(o, n), (i = !0), setTimeout(() => (i = !1), t));
        };
      }
      var Ti = {},
        Mi = !1;
      var Ai = {};
      function Pi(e, t, i) {
        let o = [];
        for (; o.length; ) o.pop()();
        let n = Object.entries(t).map(([e, t]) => ({ name: e, value: t })),
          r = Ot(n);
        (n = n.map((e) =>
          r.find((t) => t.name === e.name)
            ? { name: `x-bind:${e.name}`, value: `"${e.value}"` }
            : e
        )),
          It(e, n, i).map((e) => {
            o.push(e.runCleanups), e();
          });
      }
      var Ii = {};
      var Oi = {
        get reactive() {
          return je;
        },
        get release() {
          return Ne;
        },
        get effect() {
          return Fe;
        },
        get raw() {
          return Re;
        },
        version: "3.12.1",
        flushAndStopDeferringMutations: function () {
          (at = !1), ct(st), (st = []);
        },
        dontAutoEvaluateFunctions: function (e) {
          let t = _t;
          (_t = !1), e(), (_t = t);
        },
        disableEffectScheduling: function (e) {
          (Ve = !1), e(), (Ve = !0);
        },
        startObservingMutations: it,
        stopObservingMutations: ot,
        setReactivityEngine: function (e) {
          (je = e.reactive),
            (Ne = e.release),
            (Fe = (t) =>
              e.effect(t, {
                scheduler: (e) => {
                  Ve ? We(e) : e();
                },
              })),
            (Re = e.raw);
        },
        closestDataStack: pt,
        skipDuringClone: _i,
        onlyDuringClone: function (e) {
          return (...t) => wi && e(...t);
        },
        addRootSelector: ii,
        addInitSelector: oi,
        addScopeToNode: ut,
        deferMutations: function () {
          at = !0;
        },
        mapAttributes: qt,
        evaluateLater: zt,
        interceptInit: function (e) {
          li.push(e);
        },
        setEvaluator: function (e) {
          kt = e;
        },
        mergeProxies: ht,
        findClosest: ri,
        closestRoot: ni,
        destroyTree: si,
        interceptor: gt,
        transition: xi,
        setStyles: gi,
        mutateDom: lt,
        directive: Pt,
        throttle: Li,
        debounce: Ci,
        evaluate: St,
        initTree: ai,
        nextTick: ui,
        prefixed: Mt,
        prefix: function (e) {
          Tt = e;
        },
        plugin: function (e) {
          (Array.isArray(e) ? e : [e]).forEach((e) => e(Oi));
        },
        magic: vt,
        store: function (e, t) {
          if ((Mi || ((Ti = je(Ti)), (Mi = !0)), void 0 === t)) return Ti[e];
          (Ti[e] = t),
            "object" == typeof t &&
              null !== t &&
              t.hasOwnProperty("init") &&
              "function" == typeof t.init &&
              Ti[e].init(),
            mt(Ti[e]);
        },
        start: function () {
          var e;
          Jt &&
            Kt(
              "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."
            ),
            (Jt = !0),
            document.body ||
              Kt(
                "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
              ),
            Yt(document, "alpine:init"),
            Yt(document, "alpine:initializing"),
            it(),
            (e = (e) => ai(e, Xt)),
            Je.push(e),
            Qe((e) => si(e)),
            (function (e) {
              Xe.push(e);
            })((e, t) => {
              It(e, t).forEach((e) => e());
            }),
            Array.from(document.querySelectorAll(ti()))
              .filter((e) => !ni(e.parentElement, !0))
              .forEach((e) => {
                ai(e);
              }),
            Yt(document, "alpine:initialized");
        },
        clone: function (e, t) {
          t._x_dataStack || (t._x_dataStack = e._x_dataStack),
            (wi = !0),
            (function (e) {
              let t = Fe;
              Ye((e, i) => {
                let o = t(e);
                return Ne(o), () => {};
              }),
                e(),
                Ye(t);
            })(() => {
              !(function (e) {
                let t = !1;
                ai(e, (e, i) => {
                  Xt(e, (e, o) => {
                    if (
                      t &&
                      (function (e) {
                        return ei().some((t) => e.matches(t));
                      })(e)
                    )
                      return o();
                    (t = !0), i(e, o);
                  });
                });
              })(t);
            }),
            (wi = !1);
        },
        bound: function (e, t, i) {
          if (e._x_bindings && void 0 !== e._x_bindings[t])
            return e._x_bindings[t];
          let o = e.getAttribute(t);
          return null === o
            ? "function" == typeof i
              ? i()
              : i
            : "" === o || (Ei(t) ? !![t, "true"].includes(o) : o);
        },
        $data: dt,
        walk: Xt,
        data: function (e, t) {
          Ii[e] = t;
        },
        bind: function (e, t) {
          let i = "function" != typeof t ? () => t : t;
          e instanceof Element ? Pi(e, i()) : (Ai[e] = i);
        },
      };
      vt("nextTick", () => ui),
        vt("dispatch", (e) => Yt.bind(Yt, e)),
        vt("watch", (e, { evaluateLater: t, effect: i }) => (o, n) => {
          let r,
            l = t(o),
            a = !0,
            s = i(() =>
              l((e) => {
                JSON.stringify(e),
                  a
                    ? (r = e)
                    : queueMicrotask(() => {
                        n(e, r), (r = e);
                      }),
                  (a = !1);
              })
            );
          e._x_effects.delete(s);
        }),
        vt("store", function () {
          return Ti;
        }),
        vt("data", (e) => dt(e)),
        vt("root", (e) => ni(e)),
        vt(
          "refs",
          (e) => (
            e._x_refs_proxy ||
              (e._x_refs_proxy = ht(
                (function (e) {
                  let t = [],
                    i = e;
                  for (; i; )
                    i._x_refs && t.push(i._x_refs), (i = i.parentNode);
                  return t;
                })(e)
              )),
            e._x_refs_proxy
          )
        );
      var Di = {};
      function ji(e) {
        return Di[e] || (Di[e] = 0), ++Di[e];
      }
      function Fi(e, t, i) {
        vt(t, (t) =>
          Kt(
            `You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,
            t
          )
        );
      }
      vt("id", (e) => (t, i = null) => {
        let o = (function (e, t) {
            return ri(e, (e) => {
              if (e._x_ids && e._x_ids[t]) return !0;
            });
          })(e, t),
          n = o ? o._x_ids[t] : ji(t);
        return i ? `${t}-${n}-${i}` : `${t}-${n}`;
      }),
        vt("el", (e) => e),
        Fi("Focus", "focus", "focus"),
        Fi("Persist", "persist", "persist"),
        Pt(
          "modelable",
          (
            e,
            { expression: t },
            { effect: i, evaluateLater: o, cleanup: n }
          ) => {
            let r = o(t),
              l = () => {
                let e;
                return r((t) => (e = t)), e;
              },
              a = o(`${t} = __placeholder`),
              s = (e) => a(() => {}, { scope: { __placeholder: e } }),
              c = l();
            s(c),
              queueMicrotask(() => {
                if (!e._x_model) return;
                e._x_removeModelListeners.default();
                let t = e._x_model.get,
                  i = e._x_model.set,
                  o = (function ({ get: e, set: t }, { get: i, set: o }) {
                    let n,
                      r,
                      l,
                      a,
                      s = !0,
                      c = Fe(() => {
                        let c, d;
                        s
                          ? ((c = e()), o(c), (d = i()), (s = !1))
                          : ((c = e()),
                            (d = i()),
                            (l = JSON.stringify(c)),
                            (a = JSON.stringify(d)),
                            l !== n
                              ? ((d = i()), o(c), (d = c))
                              : (t(d), (c = d))),
                          (n = JSON.stringify(c)),
                          (r = JSON.stringify(d));
                      });
                    return () => {
                      Ne(c);
                    };
                  })(
                    {
                      get: () => t(),
                      set(e) {
                        i(e);
                      },
                    },
                    {
                      get: () => l(),
                      set(e) {
                        s(e);
                      },
                    }
                  );
                n(o);
              });
          }
        );
      var Ni = document.createElement("div");
      Pt("teleport", (e, { modifiers: t, expression: i }, { cleanup: o }) => {
        "template" !== e.tagName.toLowerCase() &&
          Kt("x-teleport can only be used on a <template> tag", e);
        let n = _i(
          () => document.querySelector(i),
          () => Ni
        )();
        n || Kt(`Cannot find x-teleport element for selector: "${i}"`);
        let r = e.content.cloneNode(!0).firstElementChild;
        (e._x_teleport = r),
          (r._x_teleportBack = e),
          e._x_forwardEvents &&
            e._x_forwardEvents.forEach((t) => {
              r.addEventListener(t, (t) => {
                t.stopPropagation(),
                  e.dispatchEvent(new t.constructor(t.type, t));
              });
            }),
          ut(r, {}, e),
          lt(() => {
            t.includes("prepend")
              ? n.parentNode.insertBefore(r, n)
              : t.includes("append")
              ? n.parentNode.insertBefore(r, n.nextSibling)
              : n.appendChild(r),
              ai(r),
              (r._x_ignore = !0);
          }),
          o(() => r.remove());
      });
      var Ri = () => {};
      function Bi(e, t, i, o) {
        let n = e,
          r = (e) => o(e),
          l = {},
          a = (e, t) => (i) => t(e, i);
        if (
          (i.includes("dot") && (t = t.replace(/-/g, ".")),
          i.includes("camel") &&
            (t = (function (e) {
              return e
                .toLowerCase()
                .replace(/-(\w)/g, (e, t) => t.toUpperCase());
            })(t)),
          i.includes("passive") && (l.passive = !0),
          i.includes("capture") && (l.capture = !0),
          i.includes("window") && (n = window),
          i.includes("document") && (n = document),
          i.includes("debounce"))
        ) {
          let e = i[i.indexOf("debounce") + 1] || "invalid-wait",
            t = $i(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
          r = Ci(r, t);
        }
        if (i.includes("throttle")) {
          let e = i[i.indexOf("throttle") + 1] || "invalid-wait",
            t = $i(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
          r = Li(r, t);
        }
        return (
          i.includes("prevent") &&
            (r = a(r, (e, t) => {
              t.preventDefault(), e(t);
            })),
          i.includes("stop") &&
            (r = a(r, (e, t) => {
              t.stopPropagation(), e(t);
            })),
          i.includes("self") &&
            (r = a(r, (t, i) => {
              i.target === e && t(i);
            })),
          (i.includes("away") || i.includes("outside")) &&
            ((n = document),
            (r = a(r, (t, i) => {
              e.contains(i.target) ||
                (!1 !== i.target.isConnected &&
                  ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
                    (!1 !== e._x_isShown && t(i))));
            }))),
          i.includes("once") &&
            (r = a(r, (e, i) => {
              e(i), n.removeEventListener(t, r, l);
            })),
          (r = a(r, (e, o) => {
            ((function (e) {
              return ["keydown", "keyup"].includes(e);
            })(t) &&
              (function (e, t) {
                let i = t.filter(
                  (e) =>
                    ![
                      "window",
                      "document",
                      "prevent",
                      "stop",
                      "once",
                      "capture",
                    ].includes(e)
                );
                if (i.includes("debounce")) {
                  let e = i.indexOf("debounce");
                  i.splice(
                    e,
                    $i((i[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1
                  );
                }
                if (i.includes("throttle")) {
                  let e = i.indexOf("throttle");
                  i.splice(
                    e,
                    $i((i[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1
                  );
                }
                if (0 === i.length) return !1;
                if (1 === i.length && qi(e.key).includes(i[0])) return !1;
                const o = [
                  "ctrl",
                  "shift",
                  "alt",
                  "meta",
                  "cmd",
                  "super",
                ].filter((e) => i.includes(e));
                if (((i = i.filter((e) => !o.includes(e))), o.length > 0)) {
                  if (
                    o.filter(
                      (t) => (
                        ("cmd" !== t && "super" !== t) || (t = "meta"),
                        e[`${t}Key`]
                      )
                    ).length === o.length &&
                    qi(e.key).includes(i[0])
                  )
                    return !1;
                }
                return !0;
              })(o, i)) ||
              e(o);
          })),
          n.addEventListener(t, r, l),
          () => {
            n.removeEventListener(t, r, l);
          }
        );
      }
      function $i(e) {
        return !Array.isArray(e) && !isNaN(e);
      }
      function qi(e) {
        if (!e) return [];
        var t;
        e = [" ", "_"].includes((t = e))
          ? t
          : t
              .replace(/([a-z])([A-Z])/g, "$1-$2")
              .replace(/[_\s]/, "-")
              .toLowerCase();
        let i = {
          ctrl: "control",
          slash: "/",
          space: " ",
          spacebar: " ",
          cmd: "meta",
          esc: "escape",
          up: "arrow-up",
          down: "arrow-down",
          left: "arrow-left",
          right: "arrow-right",
          period: ".",
          equal: "=",
          minus: "-",
          underscore: "_",
        };
        return (
          (i[e] = e),
          Object.keys(i)
            .map((t) => {
              if (i[t] === e) return t;
            })
            .filter((e) => e)
        );
      }
      function Ui(e) {
        let t = e ? parseFloat(e) : null;
        return (i = t), Array.isArray(i) || isNaN(i) ? e : t;
        var i;
      }
      function Wi(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "function" == typeof e.get &&
          "function" == typeof e.set
        );
      }
      function Hi(e, t, i, o) {
        let n = {};
        if (/^\[.*\]$/.test(e.item) && Array.isArray(t)) {
          e.item
            .replace("[", "")
            .replace("]", "")
            .split(",")
            .map((e) => e.trim())
            .forEach((e, i) => {
              n[e] = t[i];
            });
        } else if (
          /^\{.*\}$/.test(e.item) &&
          !Array.isArray(t) &&
          "object" == typeof t
        ) {
          e.item
            .replace("{", "")
            .replace("}", "")
            .split(",")
            .map((e) => e.trim())
            .forEach((e) => {
              n[e] = t[e];
            });
        } else n[e.item] = t;
        return (
          e.index && (n[e.index] = i), e.collection && (n[e.collection] = o), n
        );
      }
      function Gi() {}
      function Vi(e, t, i) {
        Pt(t, (o) =>
          Kt(
            `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,
            o
          )
        );
      }
      (Ri.inline = (e, { modifiers: t }, { cleanup: i }) => {
        t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
          i(() => {
            t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
          });
      }),
        Pt("ignore", Ri),
        Pt("effect", (e, { expression: t }, { effect: i }) => i(zt(e, t))),
        Pt(
          "model",
          (e, { modifiers: t, expression: i }, { effect: o, cleanup: n }) => {
            let r = e;
            t.includes("parent") && (r = e.parentNode);
            let l,
              a = zt(r, i);
            l =
              "string" == typeof i
                ? zt(r, `${i} = __placeholder`)
                : "function" == typeof i && "string" == typeof i()
                ? zt(r, `${i()} = __placeholder`)
                : () => {};
            let s = () => {
                let e;
                return a((t) => (e = t)), Wi(e) ? e.get() : e;
              },
              c = (e) => {
                let t;
                a((e) => (t = e)),
                  Wi(t)
                    ? t.set(e)
                    : l(() => {}, { scope: { __placeholder: e } });
              };
            "string" == typeof i &&
              "radio" === e.type &&
              lt(() => {
                e.hasAttribute("name") || e.setAttribute("name", i);
              });
            var d =
              "select" === e.tagName.toLowerCase() ||
              ["checkbox", "radio"].includes(e.type) ||
              t.includes("lazy")
                ? "change"
                : "input";
            let u = wi
              ? () => {}
              : Bi(e, d, t, (i) => {
                  c(
                    (function (e, t, i, o) {
                      return lt(() => {
                        if (i instanceof CustomEvent && void 0 !== i.detail)
                          return i.detail ?? i.target.value;
                        if ("checkbox" === e.type) {
                          if (Array.isArray(o)) {
                            let e = t.includes("number")
                              ? Ui(i.target.value)
                              : i.target.value;
                            return i.target.checked
                              ? o.concat([e])
                              : o.filter((t) => !(t == e));
                          }
                          return i.target.checked;
                        }
                        if ("select" === e.tagName.toLowerCase() && e.multiple)
                          return t.includes("number")
                            ? Array.from(i.target.selectedOptions).map((e) =>
                                Ui(e.value || e.text)
                              )
                            : Array.from(i.target.selectedOptions).map(
                                (e) => e.value || e.text
                              );
                        {
                          let e = i.target.value;
                          return t.includes("number")
                            ? Ui(e)
                            : t.includes("trim")
                            ? e.trim()
                            : e;
                        }
                      });
                    })(e, t, i, s())
                  );
                });
            if (
              (t.includes("fill") &&
                [null, ""].includes(s()) &&
                e.dispatchEvent(new Event(d, {})),
              e._x_removeModelListeners || (e._x_removeModelListeners = {}),
              (e._x_removeModelListeners.default = u),
              n(() => e._x_removeModelListeners.default()),
              e.form)
            ) {
              let t = Bi(e.form, "reset", [], (t) => {
                ui(() => e._x_model && e._x_model.set(e.value));
              });
              n(() => t());
            }
            (e._x_model = {
              get: () => s(),
              set(e) {
                c(e);
              },
            }),
              (e._x_forceModelUpdate = (t) => {
                void 0 === (t = void 0 === t ? s() : t) &&
                  "string" == typeof i &&
                  i.match(/\./) &&
                  (t = ""),
                  (window.fromModel = !0),
                  lt(() => Si(e, "value", t)),
                  delete window.fromModel;
              }),
              o(() => {
                let i = s();
                (t.includes("unintrusive") &&
                  document.activeElement.isSameNode(e)) ||
                  e._x_forceModelUpdate(i);
              });
          }
        ),
        Pt("cloak", (e) =>
          queueMicrotask(() => lt(() => e.removeAttribute(Mt("cloak"))))
        ),
        oi(() => `[${Mt("init")}]`),
        Pt(
          "init",
          _i((e, { expression: t }, { evaluate: i }) =>
            "string" == typeof t ? !!t.trim() && i(t, {}, !1) : i(t, {}, !1)
          )
        ),
        Pt("text", (e, { expression: t }, { effect: i, evaluateLater: o }) => {
          let n = o(t);
          i(() => {
            n((t) => {
              lt(() => {
                e.textContent = t;
              });
            });
          });
        }),
        Pt("html", (e, { expression: t }, { effect: i, evaluateLater: o }) => {
          let n = o(t);
          i(() => {
            n((t) => {
              lt(() => {
                (e.innerHTML = t),
                  (e._x_ignoreSelf = !0),
                  ai(e),
                  delete e._x_ignoreSelf;
              });
            });
          });
        }),
        qt(Rt(":", Mt("bind:"))),
        Pt(
          "bind",
          (
            e,
            { value: t, modifiers: i, expression: o, original: n },
            { effect: r }
          ) => {
            if (!t) {
              let t = {};
              return (
                (l = t),
                Object.entries(Ai).forEach(([e, t]) => {
                  Object.defineProperty(l, e, {
                    get:
                      () =>
                      (...e) =>
                        t(...e),
                  });
                }),
                void zt(e, o)(
                  (t) => {
                    Pi(e, t, n);
                  },
                  { scope: t }
                )
              );
            }
            var l;
            if ("key" === t)
              return (function (e, t) {
                e._x_keyExpression = t;
              })(e, o);
            let a = zt(e, o);
            r(() =>
              a((n) => {
                void 0 === n &&
                  "string" == typeof o &&
                  o.match(/\./) &&
                  (n = ""),
                  lt(() => Si(e, t, n, i));
              })
            );
          }
        ),
        ii(() => `[${Mt("data")}]`),
        Pt(
          "data",
          _i((e, { expression: t }, { cleanup: i }) => {
            t = "" === t ? "{}" : t;
            let o = {};
            xt(o, e);
            let n = {};
            var r, l;
            (r = n),
              (l = o),
              Object.entries(Ii).forEach(([e, t]) => {
                Object.defineProperty(r, e, {
                  get:
                    () =>
                    (...e) =>
                      t.bind(l)(...e),
                  enumerable: !1,
                });
              });
            let a = St(e, t, { scope: n });
            (void 0 !== a && !0 !== a) || (a = {}), xt(a, e);
            let s = je(a);
            mt(s);
            let c = ut(e, s);
            s.init && St(e, s.init),
              i(() => {
                s.destroy && St(e, s.destroy), c();
              });
          })
        ),
        Pt("show", (e, { modifiers: t, expression: i }, { effect: o }) => {
          let n = zt(e, i);
          e._x_doHide ||
            (e._x_doHide = () => {
              lt(() => {
                e.style.setProperty(
                  "display",
                  "none",
                  t.includes("important") ? "important" : void 0
                );
              });
            }),
            e._x_doShow ||
              (e._x_doShow = () => {
                lt(() => {
                  1 === e.style.length && "none" === e.style.display
                    ? e.removeAttribute("style")
                    : e.style.removeProperty("display");
                });
              });
          let r,
            l = () => {
              e._x_doHide(), (e._x_isShown = !1);
            },
            a = () => {
              e._x_doShow(), (e._x_isShown = !0);
            },
            s = () => setTimeout(a),
            c = fi(
              (e) => (e ? a() : l()),
              (t) => {
                "function" == typeof e._x_toggleAndCascadeWithTransitions
                  ? e._x_toggleAndCascadeWithTransitions(e, t, a, l)
                  : t
                  ? s()
                  : l();
              }
            ),
            d = !0;
          o(() =>
            n((e) => {
              (d || e !== r) &&
                (t.includes("immediate") && (e ? s() : l()),
                c(e),
                (r = e),
                (d = !1));
            })
          );
        }),
        Pt("for", (e, { expression: t }, { effect: i, cleanup: o }) => {
          let n = (function (e) {
              let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                i = /^\s*\(|\)\s*$/g,
                o = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                n = e.match(o);
              if (!n) return;
              let r = {};
              r.items = n[2].trim();
              let l = n[1].replace(i, "").trim(),
                a = l.match(t);
              a
                ? ((r.item = l.replace(t, "").trim()),
                  (r.index = a[1].trim()),
                  a[2] && (r.collection = a[2].trim()))
                : (r.item = l);
              return r;
            })(t),
            r = zt(e, n.items),
            l = zt(e, e._x_keyExpression || "index");
          (e._x_prevKeys = []),
            (e._x_lookup = {}),
            i(() =>
              (function (e, t, i, o) {
                let n = (e) => "object" == typeof e && !Array.isArray(e),
                  r = e;
                i((i) => {
                  var l;
                  (l = i),
                    !Array.isArray(l) &&
                      !isNaN(l) &&
                      i >= 0 &&
                      (i = Array.from(Array(i).keys(), (e) => e + 1)),
                    void 0 === i && (i = []);
                  let a = e._x_lookup,
                    s = e._x_prevKeys,
                    c = [],
                    d = [];
                  if (n(i))
                    i = Object.entries(i).map(([e, n]) => {
                      let r = Hi(t, n, e, i);
                      o((e) => d.push(e), { scope: { index: e, ...r } }),
                        c.push(r);
                    });
                  else
                    for (let e = 0; e < i.length; e++) {
                      let n = Hi(t, i[e], e, i);
                      o((e) => d.push(e), { scope: { index: e, ...n } }),
                        c.push(n);
                    }
                  let u = [],
                    p = [],
                    h = [],
                    m = [];
                  for (let e = 0; e < s.length; e++) {
                    let t = s[e];
                    -1 === d.indexOf(t) && h.push(t);
                  }
                  s = s.filter((e) => !h.includes(e));
                  let g = "template";
                  for (let e = 0; e < d.length; e++) {
                    let t = d[e],
                      i = s.indexOf(t);
                    if (-1 === i) s.splice(e, 0, t), u.push([g, e]);
                    else if (i !== e) {
                      let t = s.splice(e, 1)[0],
                        o = s.splice(i - 1, 1)[0];
                      s.splice(e, 0, o), s.splice(i, 0, t), p.push([t, o]);
                    } else m.push(t);
                    g = t;
                  }
                  for (let e = 0; e < h.length; e++) {
                    let t = h[e];
                    a[t]._x_effects && a[t]._x_effects.forEach(He),
                      a[t].remove(),
                      (a[t] = null),
                      delete a[t];
                  }
                  for (let e = 0; e < p.length; e++) {
                    let [t, i] = p[e],
                      o = a[t],
                      n = a[i],
                      l = document.createElement("div");
                    lt(() => {
                      n || Kt('x-for ":key" is undefined or invalid', r),
                        n.after(l),
                        o.after(n),
                        n._x_currentIfEl && n.after(n._x_currentIfEl),
                        l.before(o),
                        o._x_currentIfEl && o.after(o._x_currentIfEl),
                        l.remove();
                    }),
                      n._x_refreshXForScope(c[d.indexOf(i)]);
                  }
                  for (let e = 0; e < u.length; e++) {
                    let [t, i] = u[e],
                      o = "template" === t ? r : a[t];
                    o._x_currentIfEl && (o = o._x_currentIfEl);
                    let n = c[i],
                      l = d[i],
                      s = document.importNode(r.content, !0).firstElementChild,
                      p = je(n);
                    ut(s, p, r),
                      (s._x_refreshXForScope = (e) => {
                        Object.entries(e).forEach(([e, t]) => {
                          p[e] = t;
                        });
                      }),
                      lt(() => {
                        o.after(s), ai(s);
                      }),
                      "object" == typeof l &&
                        Kt(
                          "x-for key cannot be an object, it must be a string or an integer",
                          r
                        ),
                      (a[l] = s);
                  }
                  for (let e = 0; e < m.length; e++)
                    a[m[e]]._x_refreshXForScope(c[d.indexOf(m[e])]);
                  r._x_prevKeys = d;
                });
              })(e, n, r, l)
            ),
            o(() => {
              Object.values(e._x_lookup).forEach((e) => e.remove()),
                delete e._x_prevKeys,
                delete e._x_lookup;
            });
        }),
        (Gi.inline = (e, { expression: t }, { cleanup: i }) => {
          let o = ni(e);
          o._x_refs || (o._x_refs = {}),
            (o._x_refs[t] = e),
            i(() => delete o._x_refs[t]);
        }),
        Pt("ref", Gi),
        Pt("if", (e, { expression: t }, { effect: i, cleanup: o }) => {
          let n = zt(e, t);
          i(() =>
            n((t) => {
              t
                ? (() => {
                    if (e._x_currentIfEl) return e._x_currentIfEl;
                    let t = e.content.cloneNode(!0).firstElementChild;
                    ut(t, {}, e),
                      lt(() => {
                        e.after(t), ai(t);
                      }),
                      (e._x_currentIfEl = t),
                      (e._x_undoIf = () => {
                        Xt(t, (e) => {
                          e._x_effects && e._x_effects.forEach(He);
                        }),
                          t.remove(),
                          delete e._x_currentIfEl;
                      });
                  })()
                : e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
            })
          ),
            o(() => e._x_undoIf && e._x_undoIf());
        }),
        Pt("id", (e, { expression: t }, { evaluate: i }) => {
          i(t).forEach((t) =>
            (function (e, t) {
              e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = ji(t));
            })(e, t)
          );
        }),
        qt(Rt("@", Mt("on:"))),
        Pt(
          "on",
          _i((e, { value: t, modifiers: i, expression: o }, { cleanup: n }) => {
            let r = o ? zt(e, o) : () => {};
            "template" === e.tagName.toLowerCase() &&
              (e._x_forwardEvents || (e._x_forwardEvents = []),
              e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
            let l = Bi(e, t, i, (e) => {
              r(() => {}, { scope: { $event: e }, params: [e] });
            });
            n(() => l());
          })
        ),
        Vi("Collapse", "collapse", "collapse"),
        Vi("Intersect", "intersect", "intersect"),
        Vi("Focus", "trap", "focus"),
        Vi("Mask", "mask", "mask"),
        Oi.setEvaluator(Et),
        Oi.setReactivityEngine({
          reactive: Ae,
          effect: $,
          release: function (e) {
            e.active &&
              (U(e), e.options.onStop && e.options.onStop(), (e.active = !1));
          },
          raw: Oe,
        });
      var Yi = Oi;
      function Xi(e) {
        if (e.includes("full")) return 0.99;
        if (e.includes("half")) return 0.5;
        if (!e.includes("threshold")) return 0;
        let t = e[e.indexOf("threshold") + 1];
        return "100" === t ? 1 : "0" === t ? 0 : Number(`.${t}`);
      }
      function Ki(e) {
        let t = e.match(/^(-?[0-9]+)(px|%)?$/);
        return t ? t[1] + (t[2] || "px") : void 0;
      }
      function Ji(e) {
        const t = "0px 0px 0px 0px",
          i = e.indexOf("margin");
        if (-1 === i) return t;
        let o = [];
        for (let t = 1; t < 5; t++) o.push(Ki(e[i + t] || ""));
        return (
          (o = o.filter((e) => void 0 !== e)), o.length ? o.join(" ").trim() : t
        );
      }
      var Qi = function (e) {
        e.directive(
          "intersect",
          (
            e,
            { value: t, expression: i, modifiers: o },
            { evaluateLater: n, cleanup: r }
          ) => {
            let l = n(i),
              a = { rootMargin: Ji(o), threshold: Xi(o) },
              s = new IntersectionObserver((e) => {
                e.forEach((e) => {
                  e.isIntersecting !== ("leave" === t) &&
                    (l(), o.includes("once") && s.disconnect());
                });
              }, a);
            s.observe(e),
              r(() => {
                s.disconnect();
              });
          }
        );
      };
      function Zi(e, t, i) {
        if (-1 === e.indexOf(t)) return i;
        const o = e[e.indexOf(t) + 1];
        if (!o) return i;
        if ("duration" === t) {
          let e = o.match(/([0-9]+)ms/);
          if (e) return e[1];
        }
        if ("min" === t) {
          let e = o.match(/([0-9]+)px/);
          if (e) return e[1];
        }
        return o;
      }
      var eo = function (e) {
          function t(t, { modifiers: i }) {
            let o = Zi(i, "duration", 250) / 1e3,
              n = Zi(i, "min", 0),
              r = !i.includes("min");
            t._x_isShown || (t.style.height = `${n}px`),
              !t._x_isShown && r && (t.hidden = !0),
              t._x_isShown || (t.style.overflow = "hidden");
            let l = (t, i) => {
                let o = e.setStyles(t, i);
                return i.height ? () => {} : o;
              },
              a = {
                transitionProperty: "height",
                transitionDuration: `${o}s`,
                transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
              };
            t._x_transition = {
              in(i = () => {}, o = () => {}) {
                r && (t.hidden = !1), r && (t.style.display = null);
                let l = t.getBoundingClientRect().height;
                t.style.height = "auto";
                let s = t.getBoundingClientRect().height;
                l === s && (l = n),
                  e.transition(
                    t,
                    e.setStyles,
                    {
                      during: a,
                      start: { height: l + "px" },
                      end: { height: s + "px" },
                    },
                    () => (t._x_isShown = !0),
                    () => {
                      t.getBoundingClientRect().height == s &&
                        (t.style.overflow = null);
                    }
                  );
              },
              out(i = () => {}, o = () => {}) {
                let s = t.getBoundingClientRect().height;
                e.transition(
                  t,
                  l,
                  {
                    during: a,
                    start: { height: s + "px" },
                    end: { height: n + "px" },
                  },
                  () => (t.style.overflow = "hidden"),
                  () => {
                    (t._x_isShown = !1),
                      t.style.height == `${n}px` &&
                        r &&
                        ((t.style.display = "none"), (t.hidden = !0));
                  }
                );
              },
            };
          }
          e.directive("collapse", t),
            (t.inline = (e, { modifiers: t }) => {
              t.includes("min") &&
                ((e._x_doShow = () => {}), (e._x_doHide = () => {}));
            });
        },
        to = i(732),
        io = i.n(to);
      let oo = {};
      (window.pegasus = oo),
        (oo.getURL = () =>
          window.location.protocol +
          "//" +
          window.location.hostname +
          window.location.pathname),
        (oo.urlWithParams = (e, t, i = window.location.href) => {
          let o = new URL(i),
            n = new URLSearchParams(o.search.slice(1));
          return n.append(e, t), oo.getURL() + "?" + n;
        }),
        (oo.ajaxContent = (e, t = [], i = {}, o) => {
          oo.fetchContent(e, i)
            .then((e) => {
              if (!e.ok) throw Error(e.statusText);
              return e.text();
            })
            .then((e) => {
              oo.ajaxReplaceContent(e, t);
            })
            .then(() => {
              void 0 !== o && o();
            })
            .catch((e) => {
              console.error(e), void 0 !== o && o();
            })
            .finally(() => {
              document.lazyLoadInstance && document.lazyLoadInstance.update();
            });
        }),
        (oo.loadMoreContent = (e, t, i = [], o = {}, n) => {
          oo.fetchContent(e, o)
            .then((e) => {
              if (!e.ok) throw Error(e.statusText);
              return e.text();
            })
            .then((e) => {
              const o = new DOMParser().parseFromString(e, "text/html");
              i.map((e) => {
                const i = document.querySelectorAll("[" + t + "]")[0];
                o.querySelectorAll(e).forEach((e) => {
                  i.appendChild(e);
                });
              });
            })
            .then(() => {
              void 0 !== n && n();
            })
            .catch((e) => {
              console.error(e), void 0 !== n && n();
            })
            .finally(() => {
              document.lazyLoadInstance && document.lazyLoadInstance.update();
            });
        }),
        (oo.fetchContent = async (e, t = {}) =>
          await fetch(e, oo.setAjaxData("GET", t))),
        (oo.setAjaxData = (e, t) => {
          const i = {
            method: `${e}`,
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },
          };
          return oo.extend(i, t);
        }),
        (oo.ajaxReplaceContent = (e, t) => {
          const i = new DOMParser().parseFromString(e, "text/html");
          t.map((e) => {
            const t = document.querySelectorAll("[" + e + "]")[0],
              o = i.querySelectorAll("[" + e + "]")[0];
            console.log(t), console.log(o), t.parentNode.replaceChild(o, t);
          });
        }),
        (oo.extend = function () {
          let e = {},
            t = !1,
            i = 0,
            o = arguments.length;
          "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
            ((t = arguments[0]), i++);
          let n = function (i) {
            for (let o in i)
              Object.prototype.hasOwnProperty.call(i, o) &&
                (t && "[object Object]" === Object.prototype.toString.call(i[o])
                  ? (e[o] = oo.extend(!0, e[o], i[o]))
                  : (e[o] = i[o]));
          };
          for (; i < o; i++) {
            n(arguments[i]);
          }
          return e;
        }),
        (oo.onResizeFinished = (e, t) => {
          let i;
          window.addEventListener("resize", (t) => {
            clearTimeout(i), (i = setTimeout(e, 50));
          }),
            t && e.call();
        }),
        (oo.scroll = (e, t = 0, i = "scrollTo") => {
          if (!e || !e instanceof HTMLElement)
            throw new Error("The target element must be an HTML element.");
          let o = 0;
          const n = e.getBoundingClientRect(),
            r = window.pageYOffset || document.documentElement.scrollTop;
          "scrollTo" === i && (o = n.top + r + t),
            "scrollPast" === i && (o = n.top + e.offsetHeight + r + t);
          let l = o;
          l > document.body.offsetHeight
            ? (l = document.body.offsetHeight)
            : l < 0 && (l = 0),
            window.scrollTo({ top: l, behavior: "smooth" });
        }),
        (oo.setCookie = (e, t, i) => {
          const o = new Date();
          o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3);
          let n = "expires=" + o.toUTCString();
          document.cookie = e + "=" + t + ";" + n + ";path=/";
        }),
        (oo.getCookie = (e) => {
          let t = e + "=",
            i = decodeURIComponent(document.cookie).split(";");
          for (let e = 0; e < i.length; e++) {
            let o = i[e];
            for (; " " == o.charAt(0); ) o = o.substring(1);
            if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
          }
          return "";
        }),
        (oo.stringToHTML = function (e) {
          if (
            (function () {
              if (!window.DOMParser) return !1;
              const e = new DOMParser();
              try {
                e.parseFromString("x", "text/html");
              } catch (e) {
                return !1;
              }
              return !0;
            })()
          ) {
            return new DOMParser().parseFromString(e, "text/html").body
              .firstChild;
          }
          const t = document.createElement("div");
          return (t.innerHTML = e), t;
        }),
        (oo.getElemOffset = (e) => {
          if (!e || !e.getBoundingClientRect) return null;
          const t = e.getBoundingClientRect(),
            i = window.pageXOffset || document.documentElement.scrollLeft,
            o = window.pageYOffset || document.documentElement.scrollTop;
          return {
            top: t.top + o,
            bottom: t.top + o + t.height,
            left: t.left + i,
          };
        }),
        (oo.numberWithCommas = (e) =>
          e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      const no = oo;
      no.selectField = (e, t = {}) => {
        function i(e, t) {
          const i = this;
          return (
            (this.select = e),
            (this.defaults = {
              openOnHover: !1,
              itemsToShow: 10,
              firstItemDisabled: !1,
              columns: 1,
              cancelSelection: !1,
              hideSelected: !1,
              searchField: !1,
              keys: {
                previous: [37, 38],
                next: [39, 40],
                select: [13],
                open: [13, 32, 37, 38, 39, 40],
                close: [9, 27],
              },
              classNames: {
                outerWrapper: "",
                selectorWrapper: "",
                selector: "flex justify-between w-full",
                selectorOpen: "",
                selectionList: "mt-1 w-full",
                listItem:
                  "text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",
                listItemFocus: "bg-gray-300",
              },
            }),
            (this.options = no.extend(!0, this.defaults, t)),
            (this.structure = {
              wrapper: "",
              hideSelectWrapper: "",
              newSelectorWrapper: "",
              selectorButton: "",
              listScroll: "",
              listBox: "",
            }),
            (this.choices = []),
            (this.currentChoice = 0),
            (this.listOpen = !1),
            (this.init = {
              setup() {
                this.createWrapper(),
                  this.buildChoices(),
                  this.createSelector(),
                  this.createListBox(),
                  this.addEventListeners(),
                  void 0 !== i.select.value && "" !== i.select.value
                    ? i.structure.selectorButton.classList.add("-selected")
                    : i.structure.selectorButton.classList.remove("-selected");
              },
              createWrapper() {
                const e = document.createElement("div"),
                  t = document.createElement("div"),
                  o = document.createElement("div");
                e.setAttribute(
                  "class",
                  "Pegasus__Select-wrapper relative " +
                    i.options.classNames.outerWrapper
                ),
                  t.setAttribute("class", "Pegasus__Select-hide-input"),
                  o.setAttribute(
                    "class",
                    "Pegasus__Select-selector " +
                      i.options.classNames.selectorWrapper
                  ),
                  this.wrapElement(i.select, t),
                  this.wrapElement(t, e),
                  e.appendChild(o),
                  (i.structure.wrapper = e),
                  (i.structure.hideSelectWrapper = t),
                  (i.structure.newSelectorWrapper = o);
              },
              createSelector() {
                if (i.options.searchField) return void this.createSearchField();
                let e =
                  '<button type="button" class="' +
                  i.options.classNames.selector +
                  '" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">';
                const t = i.select.selectedOptions;
                let o = "";
                void 0 !== t[0].dataset.pegasusOptionImage &&
                  t[0].dataset.pegasusOptionImage.length &&
                  (o =
                    '<img src="' +
                    t[0].dataset.pegasusOptionImage +
                    '" width="18" height="12" alt="' +
                    t[0].textContent +
                    '">'),
                  (e +=
                    '<span class="Pegasus__Select-selector-label flex items-center">' +
                    o +
                    t[0].textContent +
                    "</span>"),
                  i.options.cancelSelection &&
                    (e +=
                      '<span class="cancel"><i class="icon ion-ios-close"></i></span>'),
                  (e += "</button>");
                const n = new DOMParser()
                  .parseFromString(e, "text/html")
                  .body.querySelectorAll("button")[0];
                (i.structure.selectorButton = n),
                  i.structure.newSelectorWrapper.appendChild(n);
              },
              createSearchField() {
                const e = i.select.selectedOptions;
                let t =
                  '<input type="text" class="' +
                  i.options.classNames.selector +
                  '" value="' +
                  e[0].textContent +
                  '" aria-haspopup="listbox">';
                const o = new DOMParser().parseFromString(t, "text/html"),
                  n = document.createElement("div");
                n.classList.add("input-wrapper");
                const r = o.body.querySelectorAll('input[type="text"]')[0];
                (i.structure.selectorButton = r),
                  n.appendChild(r),
                  i.structure.newSelectorWrapper.appendChild(n);
              },
              createListBox() {
                const e = new DOMParser()
                  .parseFromString(
                    '<div class="Select_Scroll-Box overflow-scroll absolute z-10"></div>',
                    "text/html"
                  )
                  .body.querySelectorAll("div")[0];
                (i.structure.listScroll = e),
                  i.structure.newSelectorWrapper.appendChild(e);
                let t =
                  '<ul class="" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="' +
                  i.select.selectedOptions[0].value +
                  '">';
                this.getChoices().map((e) => {
                  if ("OPTION" === e.tagName) {
                    if (
                      (void 0 === e.attributes.value ||
                        "" === e.attributes.value) &&
                      i.options.firstItemDisabled
                    )
                      return;
                    const o =
                      i.select.id +
                      "-" +
                      e.attributes.value.replaceAll(/\s+/g, "__");
                    let n = "";
                    void 0 !== e.attributes.disabled && (n = " -disabled");
                    let r = "";
                    const l =
                      void 0 !== e.attributes.datapegasusoptionimage &&
                      null !== e.attributes.datapegasusoptionimage;
                    l &&
                      (r =
                        '<img src="' +
                        e.attributes.datapegasusoptionimage +
                        '" width="18" height="12" alt="' +
                        e.text +
                        '" class="mr-2" />'),
                      (t +=
                        '<li class="' +
                        i.options.classNames.listItem +
                        " " +
                        n +
                        '" role="option" id="' +
                        o +
                        '"><span class="flex items-center ' +
                        (l ? "has-image" : "") +
                        '">' +
                        r +
                        e.text +
                        "</span></li>");
                  }
                  if ("OPTGROUP" === e.tagName) {
                    let o = "";
                    [...e.children].map((e) => {
                      if (
                        void 0 === e.attributes.value ||
                        "" === e.attributes.value
                      )
                        return;
                      const t =
                        i.select.id +
                        "-" +
                        e.attributes.value.replaceAll(/\s+/g, "__");
                      let n = "";
                      void 0 !== e.attributes.disabled && (n = " -disabled"),
                        (o +=
                          '<li class="' +
                          i.options.classNames.listItem +
                          " " +
                          n +
                          '" role="option" id="' +
                          t +
                          '"><span>' +
                          e.text +
                          "</span></li>");
                    }),
                      (t +=
                        '<li class="option-group"><h5>' +
                        e.attributes.label +
                        "</h5><ul>" +
                        o +
                        "</ul></li>");
                  }
                }),
                  (t += "</ul>");
                const o = new DOMParser().parseFromString(t, "text/html");
                1 ===
                  o.body
                    .querySelectorAll("ul")[0]
                    .querySelectorAll("li.option-group").length &&
                  o.body
                    .querySelectorAll("ul")[0]
                    .classList.add("single-column");
                const n = o.body.querySelectorAll("ul")[0];
                (i.structure.listBox = n),
                  i.structure.listScroll.appendChild(n),
                  (i.structure.listBox.style.display = "none"),
                  this.setBoxHeight();
              },
              setBoxHeight() {
                const e = i.structure.listBox.querySelectorAll("li");
                if (i.options.itemsToShow >= e.length) return;
                let t = 0;
                [...e].map((e, o) => {
                  if (o + 1 <= i.options.itemsToShow) {
                    let i = this.getBoundingRect(e);
                    t += i.bottom - i.top;
                  }
                }),
                  (i.structure.listScroll.style.height = t + "px");
              },
              buildChoices() {
                [...i.select.children].map((e) => {
                  if (
                    i.options.hideSelected &&
                    e.value == i.select.selectedOptions[0].value
                  )
                    return;
                  let t = {};
                  (t.tagName = e.tagName),
                    (t.text = this.sanitizeContent(e.text)),
                    (t.attributes = {}),
                    (t.children = []);
                  for (let i = 0; i <= e.attributes.length; i++) {
                    const o = e.attributes[i];
                    void 0 !== o &&
                      (t.attributes[o.name.replaceAll("-", "")] = o.value);
                  }
                  e.hasChildNodes() &&
                    [...e.children].map((e) => {
                      let i = {};
                      (i.tagName = e.tagName),
                        (i.text = this.sanitizeContent(e.text)),
                        (i.attributes = {});
                      for (let t = 0; t <= e.attributes.length; t++) {
                        const o = e.attributes[t];
                        void 0 !== o && (i.attributes[o.name] = o.value);
                      }
                      t.children.push(i);
                    }),
                    i.choices.push(t);
                });
              },
              getChoices: () => i.choices,
              sanitizeContent(e) {
                let t = document.createElement("div");
                return (t.textContent = e), t.innerHTML;
              },
              wrapElement(e, t) {
                null !== e.parentNode
                  ? e.parentNode.insertBefore(t, e)
                  : e.insertBefore(t, e),
                  t.appendChild(e);
              },
              selectedValue(e) {
                let t = e.replace(i.select.id + "-", "");
                return (t = t.replaceAll("__", " ")), t;
              },
              setValue(e) {
                (i.select.value =
                  "0" == this.selectedValue(e) ? "" : this.selectedValue(e)),
                  i.select.dispatchEvent(new Event("change")),
                  void 0 !== i.select.value && "" !== i.select.value
                    ? i.structure.selectorButton.classList.add("-selected")
                    : i.structure.selectorButton.classList.remove("-selected");
              },
              updateButton(e) {
                if (i.options.searchField)
                  return void [...e].map((e) => {
                    i.structure.selectorButton.value = e.textContent;
                  });
                const t = i.structure.selectorButton.querySelector(
                  ".Pegasus__Select-selector-label"
                );
                (t.textContent = ""),
                  [...e].map((e) => {
                    void 0 !== e.classList && e.classList.contains("has-image")
                      ? (t.innerHTML = e.innerHTML)
                      : void 0 !== e.textContent
                      ? (t.textContent = e.textContent)
                      : (t.textContent = e);
                  });
              },
              addEventListeners() {
                i.structure.selectorButton.addEventListener(
                  "click",
                  () => {
                    this.toggleList();
                  },
                  !1
                ),
                  i.options.openOnHover &&
                    (i.structure.wrapper.addEventListener(
                      "mouseenter",
                      () => {
                        this.showList();
                      },
                      !1
                    ),
                    i.structure.wrapper.addEventListener(
                      "mouseleave",
                      () => {
                        this.hideList();
                      },
                      !1
                    )),
                  document.body.addEventListener(
                    "click",
                    (e) => {
                      e.target === i.structure.selectorButton ||
                        i.structure.selectorButton.contains(e.target) ||
                        this.hideList();
                    },
                    !1
                  );
                let e = [];
                [...i.structure.listBox.children].map((t) => {
                  if (
                    (t.classList.contains("option-group") ||
                      t.classList.contains("-disabled") ||
                      e.push(t),
                    t.hasChildNodes())
                  ) {
                    t.querySelectorAll("li").forEach((t) => {
                      t.classList.contains("option-group") ||
                        t.classList.contains("-disabled") ||
                        e.push(t);
                    });
                  }
                }),
                  [...e].map((e) => {
                    let t = [];
                    i.options.classNames.listItemFocus.length &&
                      (t = i.options.classNames.listItemFocus.split(" ")),
                      t.push("-focused"),
                      e.addEventListener(
                        "click",
                        (e) => {
                          this.setValue(e.currentTarget.id);
                        },
                        !1
                      ),
                      e.addEventListener(
                        "mouseenter",
                        (e) => {
                          e.currentTarget.classList.add(...t);
                        },
                        !1
                      ),
                      e.addEventListener(
                        "mouseleave",
                        (e) => {
                          e.currentTarget.classList.remove(...t);
                        },
                        !1
                      );
                  }),
                  i.select.addEventListener(
                    "change",
                    (e) => {
                      [...i.structure.listBox.querySelectorAll("li")].map(
                        (t) => {
                          if (this.selectedValue(t.id) === e.target.value)
                            this.updateButton(t.children);
                          else if ("" === e.target.value) {
                            const e =
                              i.select.querySelector('option[value=""]');
                            null != e && this.updateButton([e.textContent]);
                          }
                        }
                      );
                    },
                    !1
                  ),
                  i.select.addEventListener(
                    "focus",
                    () => {
                      i.structure.selectorButton.focus();
                    },
                    !1
                  ),
                  window.addEventListener(
                    "scroll",
                    () => {
                      i.listOpen;
                    },
                    !1
                  ),
                  window.addEventListener(
                    "resize",
                    () => {
                      i.listOpen;
                    },
                    !1
                  ),
                  document.addEventListener(
                    "keydown",
                    (e) => {
                      this.handleKeys(e);
                    },
                    !1
                  );
                const t = i.structure.selectorButton.querySelector(".cancel");
                null !== t &&
                  t.addEventListener("click", (e) => {
                    this.setValue("");
                  }),
                  i.options.searchField &&
                    i.structure.selectorButton.addEventListener(
                      "keyup",
                      (t) => {
                        const i = t.target.value.toUpperCase();
                        [...e].map((e) => {
                          -1 === e.textContent.toUpperCase().indexOf(i)
                            ? (e.style.display = "none")
                            : (e.style.display = "block");
                        });
                      }
                    );
              },
              handleKeys(e) {
                if (document.activeElement !== i.structure.selectorButton)
                  return;
                i.options.searchField || e.preventDefault();
                let t = e.which,
                  o = i.options.keys,
                  n = o.previous.includes(t),
                  r = o.next.includes(t),
                  l = o.select.includes(t),
                  a = o.open.includes(t),
                  s = o.close.includes(t);
                if (
                  (a && (i.listOpen || this.showList()),
                  s && i.listOpen && this.hideList(),
                  i.listOpen)
                ) {
                  if (r || n) {
                    let e =
                      i.structure.listBox.querySelectorAll("li.-focused")[0];
                    if (void 0 !== e) {
                      let t = r ? e.nextSibling : e.previousSibling;
                      null !== t
                        ? t.dispatchEvent(new Event("mouseenter"))
                        : i.structure.listBox
                            .querySelectorAll("li")[0]
                            .dispatchEvent(new Event("mouseenter")),
                        e.dispatchEvent(new Event("mouseleave"));
                    } else
                      i.structure.listBox
                        .querySelectorAll("li")[0]
                        .dispatchEvent(new Event("mouseenter"));
                  }
                  l &&
                    (this.setValue(
                      i.structure.listBox.querySelectorAll("li.-focused")[0].id
                    ),
                    this.hideList(!1));
                }
              },
              setListPosition() {
                let e = i.structure.listScroll.getBoundingClientRect();
                i.structure.listScroll.classList.remove(
                  "top-0",
                  "transform",
                  "-translate-y-full"
                ),
                  i.structure.listScroll.classList.add(
                    "bottom-0",
                    "transform",
                    "translate-y-full"
                  );
                window.scrollY;
                const t = window.innerHeight,
                  o = e.top;
                e.top + e.height > t &&
                  (i.structure.listScroll.classList.add(
                    "top-0",
                    "transform",
                    "-translate-y-full"
                  ),
                  i.structure.listScroll.classList.remove(
                    "bottom-0",
                    "translate-y-full"
                  )),
                  o <= 90 &&
                    (i.structure.listScroll.classList.remove(
                      "top-0",
                      "transform",
                      "-translate-y-full"
                    ),
                    i.structure.listScroll.classList.add(
                      "bottom-0",
                      "transform",
                      "translate-y-full"
                    ));
              },
              getBoundingRect(e) {
                const t = e.cloneNode(!0);
                (t.style.display = "block"),
                  (t.style.visibility = "hidden"),
                  document.body.appendChild(t);
                let i = t.getBoundingClientRect();
                return document.body.removeChild(t), i;
              },
              toggleList() {
                null === i.structure.listBox.offsetParent
                  ? (this.showList(),
                    i.options.searchField &&
                      (i.structure.selectorButton.value = ""))
                  : i.options.searchField || this.hideList();
              },
              showList: (e = !0) => (
                (i.structure.listBox.style.display = "block"),
                i.structure.selectorButton.classList.add(
                  ...i.options.classNames.selectorOpen.split(" ")
                ),
                i.structure.listScroll.classList.add(
                  ...i.options.classNames.selectionList.split(" ")
                ),
                e &&
                  (i.structure.wrapper.classList.add("Pegasus__Select-open"),
                  i.select.dispatchEvent(new Event("pegasus-select-open")),
                  setTimeout(() => {
                    i.listOpen = !0;
                  }, 10)),
                !0
              ),
              hideList(e = !0) {
                if (
                  ((i.structure.listBox.style.display = "none"),
                  i.structure.selectorButton.classList.remove(
                    ...i.options.classNames.selectorOpen.split(" ")
                  ),
                  i.structure.listScroll.classList.remove(
                    ...i.options.classNames.selectionList.split(" ")
                  ),
                  i.structure.wrapper.classList.remove("Pegasus__Select-open"),
                  e &&
                    ((i.listOpen = !1),
                    i.select.dispatchEvent(new Event("pegasus-select-close"))),
                  i.options.searchField)
                )
                  if ("" === i.select.value) {
                    const e = i.structure.listBox.children;
                    i.structure.selectorButton.value = e[0].textContent;
                  } else {
                    const e = i.structure.listBox.querySelector(
                      "#" +
                        i.select.id +
                        "-" +
                        i.select.value.replaceAll(/\s+/g, "__")
                    );
                    i.structure.selectorButton.value = e.textContent;
                  }
                return !0;
              },
            }),
            this.init.setup()
          );
        }
        if (
          !HTMLCollection.prototype.isPrototypeOf(e) &&
          !NodeList.prototype.isPrototypeOf(e)
        )
          return new i(e, t);
        [...e].map((e) => new i(e, t));
      };
      const ro = no;
      var lo = i(442),
        ao = i.n(lo);
      window.simpleSlider = (e = !0, t = 5e3, i = 1) => ({
        visible: !1,
        sliderContainer: null,
        slider: { ref: null, currentIndex: null, options: {} },
        init() {
          if (
            (this.$el.querySelector('[x-ref="slider"]')
              ? (this.sliderContainer = this.$refs.slider)
              : (this.sliderContainer = this.$el),
            this.sliderContainer.childElementCount <= i)
          )
            return;
          let o,
            n = {
              draggable: !0,
              freeScroll: !1,
              contain: !0,
              selectedAttraction: 0.02,
              friction: 0.3,
              pageDots: !0,
              groupCells: i,
              wrapAround: !0,
              accessibility: !0,
              autoPlay: !!e && t,
              prevNextButtons: !1,
              on: {
                ready: () => {
                  window.dispatchEvent(new Event("resize"));
                },
                select: (e) => {
                  this.slider.currentIndex = e;
                },
              },
            };
          (this.slider.options = no.extend(n, {})),
            (this.slider.ref = new (ao())(
              this.sliderContainer,
              this.slider.options
            )),
            window.addEventListener("resize", (e) => {
              clearTimeout(o),
                (o = setTimeout(() => {
                  this.slider.ref.resize(), this.slider.ref.reposition();
                }, 100));
            });
        },
      });
      class so {
        constructor(e, t = {}) {
          (this.bounds = null),
            (this.mapMarkers = []),
            (this.mapElement = e),
            (this.markerId = "rsl_markers_" + Math.floor(1e3 * Math.random())),
            (this.mapRef = new google.maps.Map(e, {
              zoom: t.zoom || 6,
              center: t.center || null,
              mapTypeControl: t.mapTypeControl || !1,
              streetViewControl: t.streetViewControl || !1,
              mapTypeControlOptions: t.mapTypeControlOptions || {
                mapTypeIds: [
                  "roadmap",
                  "satellite",
                  "hybrid",
                  "terrain",
                  "rsl_style",
                ],
              },
            })),
            this.mapRef.mapTypes.set("rsl_style", this.mapStyles()),
            this.mapRef.setMapTypeId("rsl_style"),
            (this.mapRefInfoWindow = new google.maps.InfoWindow({
              content: "",
              disableAutoPan: !0,
            }));
        }
        deleteMarkers() {
          for (let e = 0; e < this.mapMarkers; e++)
            this.mapMarkers[e].setMap(null);
          this.mapMarkers = [];
        }
        setMarkers(e, t = !0) {
          e &&
            (this.deleteMarkers(),
            (this.bounds = new google.maps.LatLngBounds()),
            (this.mapMarkers = e.map((e) => this.buildMarker(e))),
            t && this.mapRef.fitBounds(this.bounds));
        }
        buildMarker(e) {
          const t = {
            lat: parseFloat(e?.latitude),
            lng: parseFloat(e?.longitude),
          };
          const i = new google.maps.MarkerImage(
              "/wp-content/themes/pegasus/build/global/img/icons/map-pin.svg",
              null,
              null,
              null,
              new google.maps.Size(41, 57)
            ),
            o = new google.maps.Marker({
              position: t,
              icon: i,
              map: this.mapRef,
            });
          o.set("id", "marker-" + e.latitude + "-" + e.longitude);
          const n = 0.4000000059604645,
            r = document.querySelectorAll(".Google-Map__address"),
            l = [],
            a = Array.from(r).map((e) => e.dataset.latitude),
            s = Array.from(r).find((e) => "1" === e.dataset.headquarters);
          function c(e) {
            l.forEach((t) => {
              t.latitude === e
                ? t.marker.setOpacity(1)
                : t.marker.setOpacity(n);
            });
          }
          if (s) {
            c(s.dataset.latitude);
          }
          return (
            r.forEach((e, t) => {
              const i = e.dataset.latitude;
              e.addEventListener("click", () => {
                r.forEach((e) =>
                  e.classList.remove("Google-Map__address--active")
                ),
                  e.classList.add("Google-Map__address--active");
                const t = document.getElementById(
                  "Google-Map__scroll-container"
                );
                if (t) {
                  const i = e.offsetTop;
                  t.scrollTop = i;
                }
                c(i);
              });
            }),
            o.addListener("click", (t) => {
              let i = o.getOpacity(),
                l = `marker-${e.latitude}-${e.longitude}`,
                s = new CustomEvent("markerClick", {
                  bubbles: !0,
                  detail: { markerID: l },
                });
              if (
                (this.mapElement.dispatchEvent(s),
                1 === i
                  ? o.setOpacity(n)
                  : (this.mapMarkers.forEach((e) => e.setOpacity(n)),
                    o.setOpacity(1)),
                a.includes(e.latitude))
              ) {
                const t = a.indexOf(e.latitude);
                if (r[t].classList.contains("Google-Map__address--active"))
                  r[t].classList.remove("Google-Map__address--active");
                else {
                  r.forEach((e) =>
                    e.classList.remove("Google-Map__address--active")
                  ),
                    r[t].classList.add("Google-Map__address--active");
                  const e = document.getElementById(
                    "Google-Map__scroll-container"
                  );
                  if (e) {
                    const i = r[t].offsetTop;
                    e.scrollTop = i;
                  }
                }
              }
            }),
            this.mapMarkers.forEach((t) => {
              l.push({ marker: t, latitude: e.latitude });
            }),
            this.bounds && this.bounds.extend(t),
            o
          );
        }
        addMapEventListener(e, t) {
          google.maps.event.addListener(this.mapRef, e, t);
        }
        mapStyles() {
          return new google.maps.StyledMapType([
            {
              version: 8,
              name: "Mapbox Outdoors",
              metadata: {
                "mapbox:autocomposite": !0,
                "mapbox:type": "default",
                "mapbox:groups": {
                  1444934828655.3389: { name: "Aeroways", collapsed: !0 },
                  1444933322393.2852: {
                    name: "POI labels  (scalerank 1)",
                    collapsed: !0,
                  },
                  1444934749452.0452: { name: "Wetlands", collapsed: !0 },
                  1444855786460.0557: { name: "Roads", collapsed: !0 },
                  1444933575858.6992: {
                    name: "Highway shields",
                    collapsed: !0,
                  },
                  1444934295202.7542: {
                    name: "Admin boundaries",
                    collapsed: !0,
                  },
                  1444856151690.9143: { name: "State labels", collapsed: !0 },
                  1444933721429.3076: { name: "Road labels", collapsed: !0 },
                  1444933358918.2366: {
                    name: "POI labels (scalerank 2)",
                    collapsed: !0,
                  },
                  1444933808272.805: { name: "Water labels", collapsed: !0 },
                  1444855815295.714: { name: "Hillshading", collapsed: !0 },
                  1444855831248.8289: { name: "Landcover", collapsed: !0 },
                  1444933372896.5967: {
                    name: "POI labels (scalerank 3)",
                    collapsed: !0,
                  },
                  1444855799204.86: { name: "Bridges", collapsed: !0 },
                  1444856087950.3635: { name: "Marine labels", collapsed: !0 },
                  1444862510685.128: { name: "City labels", collapsed: !0 },
                  1444855769305.6016: { name: "Tunnels", collapsed: !0 },
                  1444856144497.7825: { name: "Country labels", collapsed: !0 },
                  1444933456003.5437: {
                    name: "POI labels (scalerank 4)",
                    collapsed: !0,
                  },
                  1444933837268.9458: { name: "Contour lines", collapsed: !0 },
                },
                "mapbox:trackposition": !0,
                "mapbox:sdk-support": {
                  js: "3.0.0",
                  android: "11.0.0",
                  ios: "11.0.0",
                },
              },
              sources: {
                composite: {
                  url: "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v8",
                  type: "vector",
                },
              },
              sprite:
                "mapbox://sprites/sam-savill/clk0xtryz00au01qy6lxsdk9s/5bzb141wp1ovystn1vdrfptv0",
              glyphs: "mapbox://fonts/sam-savill/{fontstack}/{range}.pbf",
              layers: [
                {
                  id: "background",
                  type: "background",
                  layout: {},
                  paint: {
                    "background-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      "hsl(35, 32%, 91%)",
                      13,
                      "hsl(35, 12%, 89%)",
                    ],
                  },
                },
                {
                  id: "landcover_crop",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855831248.8289" },
                  source: "composite",
                  "source-layer": "landcover",
                  maxzoom: 12,
                  filter: ["==", ["get", "class"], "crop"],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(75, 62%, 81%)",
                    "fill-opacity": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      2,
                      0.3,
                      12,
                      0,
                    ],
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "landcover_grass",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855831248.8289" },
                  source: "composite",
                  "source-layer": "landcover",
                  maxzoom: 12,
                  filter: ["==", ["get", "class"], "grass"],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(75, 62%, 81%)",
                    "fill-opacity": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      2,
                      0.3,
                      12,
                      0,
                    ],
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "landcover_scrub",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855831248.8289" },
                  source: "composite",
                  "source-layer": "landcover",
                  maxzoom: 12,
                  filter: ["==", ["get", "class"], "scrub"],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(75, 62%, 81%)",
                    "fill-opacity": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      2,
                      0.3,
                      12,
                      0,
                    ],
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "landcover_wood",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855831248.8289" },
                  source: "composite",
                  "source-layer": "landcover",
                  maxzoom: 12,
                  filter: ["==", ["get", "class"], "wood"],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(75, 62%, 81%)",
                    "fill-opacity": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      2,
                      0.3,
                      12,
                      0,
                    ],
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "landcover_snow",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855831248.8289" },
                  source: "composite",
                  "source-layer": "landcover",
                  filter: ["==", ["get", "class"], "snow"],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(0, 0%, 100%)",
                    "fill-opacity": 0.2,
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "national_park",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse_overlay",
                  filter: ["==", ["get", "class"], "national_park"],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(100, 59%, 76%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      5,
                      0,
                      5.5,
                      0.75,
                      9,
                      0.75,
                      10,
                      0.35,
                    ],
                  },
                },
                {
                  id: "scrub",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  minzoom: 9,
                  filter: ["==", ["get", "class"], "scrub"],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(75, 41%, 74%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      9,
                      0,
                      15,
                      0.2,
                    ],
                  },
                },
                {
                  id: "grass",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  minzoom: 9,
                  filter: ["==", ["get", "class"], "grass"],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(75, 41%, 74%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      9,
                      0,
                      15,
                      0.4,
                    ],
                  },
                },
                {
                  id: "wood",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  minzoom: 6,
                  filter: ["==", ["get", "class"], "wood"],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(75, 41%, 74%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7,
                      0,
                      15,
                      0.5,
                    ],
                  },
                },
                {
                  id: "agriculture",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  minzoom: 11,
                  filter: ["==", ["get", "class"], "agriculture"],
                  layout: {},
                  paint: {
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      0,
                      14,
                      0.75,
                    ],
                    "fill-color": "hsl(75, 37%, 81%)",
                    "fill-outline-color": "hsl(75, 32%, 68%)",
                  },
                },
                {
                  id: "national_park-tint-band",
                  type: "line",
                  source: "composite",
                  "source-layer": "landuse_overlay",
                  minzoom: 9,
                  filter: ["==", ["get", "class"], "national_park"],
                  layout: { "line-cap": "round" },
                  paint: {
                    "line-color": "hsl(100, 62%, 74%)",
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.4],
                      ["zoom"],
                      9,
                      1,
                      14,
                      8,
                    ],
                    "line-offset": [
                      "interpolate",
                      ["exponential", 1.4],
                      ["zoom"],
                      9,
                      0,
                      14,
                      -2.5,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      9,
                      0,
                      10,
                      0.75,
                    ],
                    "line-blur": 3,
                  },
                },
                {
                  id: "national_park-outline",
                  type: "line",
                  source: "composite",
                  "source-layer": "landuse_overlay",
                  minzoom: 9,
                  filter: ["==", ["get", "class"], "national_park"],
                  layout: {},
                  paint: {
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      12,
                      "hsl(100, 49%, 71%)",
                      14,
                      "hsl(100, 40%, 67%)",
                    ],
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      9,
                      0.75,
                      12,
                      1,
                    ],
                    "line-offset": 0,
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      9,
                      0,
                      10,
                      1,
                    ],
                  },
                },
                {
                  id: "hospital",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  filter: ["==", ["get", "class"], "hospital"],
                  layout: {},
                  paint: {
                    "fill-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15.5,
                      "hsl(340, 37%, 87%)",
                      16,
                      "hsl(340, 63%, 89%)",
                    ],
                  },
                },
                {
                  id: "school",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  filter: ["==", ["get", "class"], "school"],
                  layout: {},
                  paint: {
                    "fill-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15.5,
                      "hsl(50, 47%, 81%)",
                      16,
                      "hsl(50, 63%, 84%)",
                    ],
                  },
                },
                {
                  id: "park",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  filter: [
                    "all",
                    ["==", ["get", "class"], "park"],
                    [
                      "match",
                      ["get", "type"],
                      ["garden", "golf_course", "playground", "zoo"],
                      !1,
                      !0,
                    ],
                  ],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(100, 59%, 76%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      5,
                      0,
                      6,
                      1,
                    ],
                  },
                },
                {
                  id: "other-green-areas",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  filter: [
                    "all",
                    ["==", ["get", "class"], "park"],
                    [
                      "match",
                      ["get", "type"],
                      ["garden", "golf_course", "playground", "zoo"],
                      !0,
                      !1,
                    ],
                  ],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(100, 59%, 81%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      5,
                      0,
                      6,
                      1,
                    ],
                  },
                },
                {
                  id: "glacier",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  minzoom: 9,
                  filter: ["==", ["get", "class"], "glacier"],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(196, 71%, 93%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      9,
                      0,
                      10,
                      0.5,
                    ],
                  },
                },
                {
                  id: "pitch",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  filter: ["==", ["get", "class"], "pitch"],
                  layout: {},
                  paint: { "fill-color": "hsl(100, 57%, 72%)" },
                },
                {
                  id: "pitch-line",
                  type: "line",
                  source: "composite",
                  "source-layer": "landuse",
                  minzoom: 15,
                  filter: ["==", ["get", "class"], "pitch"],
                  layout: { "line-join": "miter" },
                  paint: { "line-color": "hsl(75, 57%, 84%)" },
                },
                {
                  id: "cemetery",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  filter: ["==", ["get", "class"], "cemetery"],
                  layout: {},
                  paint: { "fill-color": "hsl(75, 37%, 81%)" },
                },
                {
                  id: "industrial",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  filter: ["==", ["get", "class"], "airport"],
                  layout: {},
                  paint: {
                    "fill-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15.5,
                      "hsl(230, 15%, 86%)",
                      16,
                      "hsl(230, 29%, 89%)",
                    ],
                  },
                },
                {
                  id: "sand",
                  type: "fill",
                  source: "composite",
                  "source-layer": "landuse",
                  filter: ["==", ["get", "class"], "sand"],
                  layout: {},
                  paint: { "fill-color": "hsl(60, 46%, 87%)" },
                },
                {
                  id: "contour-line",
                  type: "line",
                  metadata: { "mapbox:group": "1444933837268.9458" },
                  source: "composite",
                  "source-layer": "contour",
                  minzoom: 11,
                  filter: ["match", ["get", "index"], [10, 5], !1, !0],
                  layout: {},
                  paint: {
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      0.15,
                      12,
                      0.3,
                    ],
                    "line-color": "hsl(100, 100%, 20%)",
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0.5,
                      16,
                      0.8,
                    ],
                    "line-offset": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      1,
                      16,
                      1.6,
                    ],
                  },
                },
                {
                  id: "contour-line-index",
                  type: "line",
                  metadata: { "mapbox:group": "1444933837268.9458" },
                  source: "composite",
                  "source-layer": "contour",
                  minzoom: 11,
                  filter: ["match", ["get", "index"], [10, 5], !0, !1],
                  layout: {},
                  paint: {
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      0.25,
                      12,
                      0.5,
                    ],
                    "line-color": "hsl(100, 100%, 20%)",
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0.6,
                      16,
                      1.2,
                    ],
                    "line-offset": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0.6,
                      16,
                      1.2,
                    ],
                  },
                },
                {
                  id: "hillshade_highlight_bright",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855815295.714" },
                  source: "composite",
                  "source-layer": "hillshade",
                  maxzoom: 18,
                  filter: ["==", ["get", "level"], 94],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(0, 0%, 100%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      0.15,
                      18,
                      0,
                    ],
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "hillshade_highlight_med",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855815295.714" },
                  source: "composite",
                  "source-layer": "hillshade",
                  filter: ["==", ["get", "level"], 90],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(0, 0%, 100%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      0.15,
                      18,
                      0,
                    ],
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "hillshade_shadow_faint",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855815295.714" },
                  source: "composite",
                  "source-layer": "hillshade",
                  maxzoom: 17,
                  filter: ["==", ["get", "level"], 89],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(56, 59%, 22%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      0.07,
                      17,
                      0,
                    ],
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "hillshade_shadow_med",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855815295.714" },
                  source: "composite",
                  "source-layer": "hillshade",
                  filter: ["==", ["get", "level"], 78],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(56, 59%, 22%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      0.07,
                      17,
                      0,
                    ],
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "hillshade_shadow_dark",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855815295.714" },
                  source: "composite",
                  "source-layer": "hillshade",
                  filter: ["==", ["get", "level"], 67],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(56, 59%, 22%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      0.08,
                      17,
                      0,
                    ],
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "hillshade_shadow_extreme",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855815295.714" },
                  source: "composite",
                  "source-layer": "hillshade",
                  maxzoom: 17,
                  filter: ["==", ["get", "level"], 56],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(56, 59%, 22%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      0.08,
                      17,
                      0,
                    ],
                    "fill-antialias": !1,
                  },
                },
                {
                  id: "waterway-river-canal-shadow",
                  type: "line",
                  source: "composite",
                  "source-layer": "waterway",
                  minzoom: 8,
                  filter: [
                    "match",
                    ["get", "class"],
                    ["canal", "river"],
                    !0,
                    !1,
                  ],
                  layout: {
                    "line-cap": ["step", ["zoom"], "butt", 11, "round"],
                    "line-join": "round",
                  },
                  paint: {
                    "line-color": "hsl(215, 84%, 69%)",
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.3],
                      ["zoom"],
                      8.5,
                      0.4,
                      20,
                      8,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      8,
                      0,
                      8.5,
                      1,
                    ],
                    "line-translate": [
                      "interpolate",
                      ["exponential", 1.2],
                      ["zoom"],
                      7,
                      ["literal", [0, 0]],
                      16,
                      ["literal", [-1, -1]],
                    ],
                    "line-translate-anchor": "viewport",
                  },
                },
                {
                  id: "waterway-river-canal",
                  type: "line",
                  source: "composite",
                  "source-layer": "waterway",
                  minzoom: 8,
                  filter: [
                    "match",
                    ["get", "class"],
                    ["canal", "river"],
                    !0,
                    !1,
                  ],
                  layout: {
                    "line-cap": ["step", ["zoom"], "butt", 11, "round"],
                    "line-join": "round",
                  },
                  paint: {
                    "line-color": "hsl(205, 87%, 76%)",
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.3],
                      ["zoom"],
                      8.5,
                      0.4,
                      20,
                      8,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      8,
                      0,
                      8.5,
                      1,
                    ],
                  },
                },
                {
                  id: "waterway-small",
                  type: "line",
                  source: "composite",
                  "source-layer": "waterway",
                  minzoom: 13,
                  filter: [
                    "match",
                    ["get", "class"],
                    ["canal", "river"],
                    !1,
                    !0,
                  ],
                  layout: { "line-join": "round", "line-cap": "round" },
                  paint: {
                    "line-color": "hsl(205, 87%, 76%)",
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.35],
                      ["zoom"],
                      13.5,
                      0.4,
                      20,
                      3,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.5,
                      1,
                    ],
                  },
                },
                {
                  id: "water-shadow",
                  type: "fill",
                  source: "composite",
                  "source-layer": "water",
                  layout: {},
                  paint: {
                    "fill-color": "hsl(215, 84%, 69%)",
                    "fill-translate": [
                      "interpolate",
                      ["exponential", 1.2],
                      ["zoom"],
                      7,
                      ["literal", [0, 0]],
                      16,
                      ["literal", [-1, -1]],
                    ],
                    "fill-translate-anchor": "viewport",
                    "fill-opacity": 1,
                  },
                },
                {
                  id: "water",
                  type: "fill",
                  source: "composite",
                  "source-layer": "water",
                  layout: {},
                  paint: { "fill-color": "hsl(196, 80%, 70%)" },
                },
                {
                  id: "wetlands",
                  type: "fill",
                  metadata: { "mapbox:group": "1444934749452.0452" },
                  source: "composite",
                  "source-layer": "landuse_overlay",
                  filter: [
                    "match",
                    ["get", "class"],
                    ["wetland", "wetland_noveg"],
                    !0,
                    !1,
                  ],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(185, 43%, 74%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      0.25,
                      10.5,
                      0.15,
                    ],
                  },
                },
                {
                  id: "wetlands-pattern",
                  type: "fill",
                  metadata: { "mapbox:group": "1444934749452.0452" },
                  source: "composite",
                  "source-layer": "landuse_overlay",
                  filter: [
                    "match",
                    ["get", "class"],
                    ["wetland", "wetland_noveg"],
                    !0,
                    !1,
                  ],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(185, 43%, 74%)",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      0,
                      10.5,
                      1,
                    ],
                    "fill-pattern": "wetland",
                    "fill-translate-anchor": "viewport",
                  },
                },
                {
                  id: "barrier_line-land-polygon",
                  type: "fill",
                  source: "composite",
                  "source-layer": "structure",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "Polygon"],
                    ["==", ["get", "class"], "land"],
                  ],
                  layout: {},
                  paint: { "fill-color": "hsl(35, 12%, 89%)" },
                },
                {
                  id: "barrier_line-land-line",
                  type: "line",
                  source: "composite",
                  "source-layer": "structure",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    ["==", ["get", "class"], "land"],
                  ],
                  layout: { "line-cap": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.99],
                      ["zoom"],
                      14,
                      0.75,
                      20,
                      40,
                    ],
                    "line-color": "hsl(35, 12%, 89%)",
                  },
                },
                {
                  id: "aeroway-polygon",
                  type: "fill",
                  metadata: { "mapbox:group": "1444934828655.3389" },
                  source: "composite",
                  "source-layer": "aeroway",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["!=", ["get", "type"], "apron"],
                    ["==", ["geometry-type"], "Polygon"],
                  ],
                  layout: {},
                  paint: {
                    "fill-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      "hsl(230, 23%, 82%)",
                      16,
                      "hsl(230, 37%, 84%)",
                    ],
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      0,
                      11.5,
                      1,
                    ],
                  },
                },
                {
                  id: "aeroway-runway",
                  type: "line",
                  metadata: { "mapbox:group": "1444934828655.3389" },
                  source: "composite",
                  "source-layer": "aeroway",
                  minzoom: 9,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    ["==", ["get", "type"], "runway"],
                  ],
                  layout: {},
                  paint: {
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      "hsl(230, 23%, 82%)",
                      16,
                      "hsl(230, 37%, 84%)",
                    ],
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      9,
                      1,
                      18,
                      80,
                    ],
                  },
                },
                {
                  id: "aeroway-taxiway",
                  type: "line",
                  metadata: { "mapbox:group": "1444934828655.3389" },
                  source: "composite",
                  "source-layer": "aeroway",
                  minzoom: 9,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    ["==", ["get", "type"], "taxiway"],
                  ],
                  layout: {},
                  paint: {
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      "hsl(230, 23%, 82%)",
                      16,
                      "hsl(230, 37%, 84%)",
                    ],
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      10,
                      0.5,
                      18,
                      20,
                    ],
                  },
                },
                {
                  id: "building-line",
                  type: "line",
                  source: "composite",
                  "source-layer": "building",
                  minzoom: 15,
                  filter: [
                    "all",
                    ["!=", ["get", "type"], "building:part"],
                    ["==", ["get", "underground"], "false"],
                  ],
                  layout: {},
                  paint: {
                    "line-color": "hsl(35, 6%, 79%)",
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      0.75,
                      20,
                      3,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15.5,
                      0,
                      16,
                      1,
                    ],
                  },
                },
                {
                  id: "building",
                  type: "fill",
                  source: "composite",
                  "source-layer": "building",
                  minzoom: 15,
                  filter: [
                    "all",
                    ["!=", ["get", "type"], "building:part"],
                    ["==", ["get", "underground"], "false"],
                  ],
                  layout: {},
                  paint: {
                    "fill-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      "hsl(35, 11%, 88%)",
                      16,
                      "hsl(35, 8%, 85%)",
                    ],
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15.5,
                      0,
                      16,
                      1,
                    ],
                    "fill-outline-color": "hsl(35, 6%, 79%)",
                  },
                },
                {
                  id: "tunnel-street-low",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11.5,
                      0,
                      12,
                      1,
                      14,
                      1,
                      14.01,
                      0,
                    ],
                  },
                },
                {
                  id: "tunnel-street_limited-low",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street_limited"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11.5,
                      0,
                      12,
                      1,
                      14,
                      1,
                      14.01,
                      0,
                    ],
                  },
                },
                {
                  id: "tunnel-track-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "track"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(50, 100%, 40%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      12,
                    ],
                    "line-dasharray": [3, 3],
                  },
                },
                {
                  id: "tunnel-service-link-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 14,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["!=", ["get", "type"], "trunk_link"],
                      ["==", ["get", "structure"], "tunnel"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "service",
                        ],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(230, 19%, 75%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      18,
                      12,
                    ],
                    "line-dasharray": [3, 3],
                  },
                },
                {
                  id: "tunnel-street_limited-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street_limited"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(230, 19%, 75%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      13,
                      0,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-dasharray": [3, 3],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "tunnel-street-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(230, 19%, 75%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      13,
                      0,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-dasharray": [3, 3],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "tunnel-secondary-tertiary-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "tunnel"],
                      [
                        "match",
                        ["get", "class"],
                        ["secondary", "tertiary"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.2],
                      ["zoom"],
                      10,
                      0.75,
                      18,
                      2,
                    ],
                    "line-dasharray": [3, 3],
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      8.5,
                      0.5,
                      10,
                      0.75,
                      18,
                      26,
                    ],
                    "line-color": "hsl(230, 19%, 75%)",
                  },
                },
                {
                  id: "tunnel-primary-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "primary"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      16,
                      2,
                    ],
                    "line-dasharray": [3, 3],
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": "hsl(230, 19%, 75%)",
                  },
                },
                {
                  id: "tunnel-trunk_link-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "tunnel"],
                      ["==", ["get", "type"], "trunk_link"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-dasharray": [3, 3],
                  },
                },
                {
                  id: "tunnel-motorway_link-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway_link"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-dasharray": [3, 3],
                  },
                },
                {
                  id: "tunnel-trunk-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "tunnel"],
                      ["==", ["get", "type"], "trunk"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      16,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-opacity": 1,
                    "line-dasharray": [3, 3],
                  },
                },
                {
                  id: "tunnel-motorway-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      16,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-opacity": 1,
                    "line-dasharray": [3, 3],
                  },
                },
                {
                  id: "tunnel-construction",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 14,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "construction"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-join": "miter" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [0.4, 0.8]],
                      15,
                      ["literal", [0.3, 0.6]],
                      16,
                      ["literal", [0.2, 0.3]],
                      17,
                      ["literal", [0.2, 0.25]],
                      18,
                      ["literal", [0.15, 0.15]],
                    ],
                  },
                },
                {
                  id: "tunnel-path",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      ["==", ["get", "structure"], "tunnel"],
                      [
                        "match",
                        ["get", "type"],
                        ["cycleway", "piste", "steps"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      4,
                    ],
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [4, 0.4]],
                      15,
                      ["literal", [3, 0.4]],
                      16,
                      ["literal", [3, 0.35]],
                      17,
                      ["literal", [3, 0.35]],
                    ],
                    "line-color": "hsl(35, 26%, 95%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "tunnel-cycleway-piste",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      ["==", ["get", "structure"], "tunnel"],
                      ["match", ["get", "type"], ["cycleway", "piste"], !0, !1],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      4,
                    ],
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [4, 0.4]],
                      15,
                      ["literal", [3, 0.4]],
                      16,
                      ["literal", [3, 0.35]],
                      17,
                      ["literal", [3, 0.35]],
                    ],
                    "line-color": "hsl(35, 26%, 95%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "tunnel-steps",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "tunnel"],
                      ["==", ["get", "type"], "steps"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      16,
                      1.6,
                      18,
                      6,
                    ],
                    "line-color": "hsl(35, 26%, 95%)",
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [4, 0.4]],
                      15,
                      ["literal", [1.75, 0.4]],
                      16,
                      ["literal", [0.75, 0.4]],
                      17,
                      ["literal", [0.3, 0.3]],
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "tunnel-trunk_link",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "tunnel"],
                      ["==", ["get", "type"], "trunk_link"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(46, 77%, 78%)",
                    "line-opacity": 1,
                    "line-dasharray": [1, 0],
                  },
                },
                {
                  id: "tunnel-motorway_link",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway_link"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(26, 74%, 81%)",
                    "line-opacity": 1,
                    "line-dasharray": [1, 0],
                  },
                },
                {
                  id: "tunnel-pedestrian",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "pedestrian"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      18,
                      12,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": 1,
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [1, 0]],
                      15,
                      ["literal", [1.5, 0.4]],
                      16,
                      ["literal", [1, 0.2]],
                    ],
                  },
                },
                {
                  id: "tunnel-track",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "track"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      12,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                  },
                },
                {
                  id: "tunnel-service-link",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 14,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["!=", ["get", "type"], "trunk_link"],
                      ["==", ["get", "structure"], "tunnel"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "service",
                        ],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      18,
                      12,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-dasharray": [1, 0],
                  },
                },
                {
                  id: "tunnel-street_limited",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street_limited"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(35, 14%, 93%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "tunnel-street",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "tunnel-secondary-tertiary",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "tunnel"],
                      [
                        "match",
                        ["get", "class"],
                        ["secondary", "tertiary"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      8.5,
                      0.5,
                      10,
                      0.75,
                      18,
                      26,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": 1,
                    "line-dasharray": [1, 0],
                    "line-blur": 0,
                  },
                },
                {
                  id: "tunnel-primary",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "primary"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": 1,
                    "line-dasharray": [1, 0],
                    "line-blur": 0,
                  },
                },
                {
                  id: "tunnel-oneway-arrows-blue-minor",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 16,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["!=", ["get", "type"], "trunk_link"],
                      ["==", ["get", "oneway"], "true"],
                      ["==", ["get", "structure"], "tunnel"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "path",
                          "pedestrian",
                          "service",
                          "track",
                        ],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: {
                    "symbol-placement": "line",
                    "icon-image": [
                      "step",
                      ["zoom"],
                      "oneway-small",
                      18,
                      "oneway-large",
                    ],
                    "symbol-spacing": 200,
                    "icon-padding": 2,
                  },
                  paint: {},
                },
                {
                  id: "tunnel-oneway-arrows-blue-major",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 15,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["!=", ["get", "type"], "trunk_link"],
                      ["==", ["get", "oneway"], "true"],
                      ["==", ["get", "structure"], "tunnel"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "primary",
                          "secondary",
                          "street",
                          "street_limited",
                          "tertiary",
                        ],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: {
                    "symbol-placement": "line",
                    "icon-image": [
                      "step",
                      ["zoom"],
                      "oneway-small",
                      17,
                      "oneway-large",
                    ],
                    "symbol-spacing": 200,
                    "icon-padding": 2,
                  },
                  paint: {},
                },
                {
                  id: "tunnel-trunk",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "trunk"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": "hsl(46, 77%, 78%)",
                  },
                },
                {
                  id: "tunnel-motorway",
                  type: "line",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway"],
                      ["==", ["get", "structure"], "tunnel"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-dasharray": [1, 0],
                    "line-opacity": 1,
                    "line-color": "hsl(26, 74%, 81%)",
                    "line-blur": 0,
                  },
                },
                {
                  id: "tunnel-oneway-arrows-white",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444855769305.6016" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 16,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "oneway"], "true"],
                      ["==", ["get", "structure"], "tunnel"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "trunk",
                        ],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "type"],
                        ["primary_link", "secondary_link", "tertiary_link"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: {
                    "symbol-placement": "line",
                    "icon-image": [
                      "step",
                      ["zoom"],
                      "oneway-white-small",
                      17,
                      "oneway-white-large",
                    ],
                    "symbol-spacing": 200,
                    "icon-padding": 2,
                  },
                  paint: { "icon-opacity": 0.5 },
                },
                {
                  id: "cliffs",
                  type: "line",
                  source: "composite",
                  "source-layer": "structure",
                  minzoom: 15,
                  filter: ["==", ["get", "class"], "cliff"],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      0,
                      15.25,
                      1,
                    ],
                    "line-width": 10,
                    "line-pattern": "cliff",
                  },
                },
                {
                  id: "ferry",
                  type: "line",
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    ["==", ["get", "type"], "ferry"],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      "hsl(205, 73%, 63%)",
                      17,
                      "hsl(230, 73%, 63%)",
                    ],
                    "line-opacity": 1,
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      20,
                      1,
                    ],
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [1, 0]],
                      13,
                      ["literal", [12, 4]],
                    ],
                  },
                },
                {
                  id: "ferry-auto",
                  type: "line",
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    ["==", ["get", "type"], "ferry_auto"],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      "hsl(205, 73%, 63%)",
                      17,
                      "hsl(230, 73%, 63%)",
                    ],
                    "line-opacity": 1,
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      20,
                      1,
                    ],
                  },
                },
                {
                  id: "road-path-bg",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                      [
                        "match",
                        ["get", "type"],
                        ["corridor", "crossing", "piste", "sidewalk", "steps"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      2.5,
                      18,
                      8,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                    "line-color": "hsl(50, 100%, 40%)",
                    "line-blur": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      14,
                      0,
                      17,
                      1,
                    ],
                  },
                },
                {
                  id: "road-piste-bg",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      ["==", ["get", "type"], "piste"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      2,
                      18,
                      7,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                    "line-color": "hsl(230, 85%, 67%)",
                    "line-blur": 0,
                  },
                },
                {
                  id: "road-sidewalk-corridor-bg",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 16,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                      [
                        "match",
                        ["get", "type"],
                        ["corridor", "crossing", "sidewalk"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      2,
                      18,
                      7,
                    ],
                    "line-dasharray": [1, 0],
                    "line-color": "hsl(230, 17%, 82%)",
                    "line-blur": 0,
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      0,
                      16.25,
                      0.25,
                    ],
                  },
                },
                {
                  id: "road-steps-bg",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "type"], "steps"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      2.5,
                      18,
                      8,
                    ],
                    "line-color": "hsl(50, 100%, 40%)",
                    "line-blur": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      14,
                      0,
                      17,
                      1,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      0.25,
                    ],
                  },
                },
                {
                  id: "road-pedestrian-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 12,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "pedestrian"],
                      ["==", ["get", "structure"], "none"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      2,
                      18,
                      14.5,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": 0,
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "road-street-low",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street"],
                      ["==", ["get", "structure"], "none"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      0,
                      11.25,
                      1,
                      14,
                      1,
                      14.01,
                      0,
                    ],
                  },
                },
                {
                  id: "road-street_limited-low",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street_limited"],
                      ["==", ["get", "structure"], "none"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      0,
                      11.25,
                      1,
                      14,
                      1,
                      14.01,
                      0,
                    ],
                  },
                },
                {
                  id: "road-track-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "track"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(50, 100%, 40%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      12,
                    ],
                  },
                },
                {
                  id: "road-service-link-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 14,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["!=", ["get", "type"], "trunk_link"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "service",
                        ],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      18,
                      12,
                    ],
                  },
                },
                {
                  id: "road-street_limited-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street_limited"],
                      ["==", ["get", "structure"], "none"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      13,
                      0,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "road-street-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street"],
                      ["==", ["get", "structure"], "none"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      13,
                      0,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "road-secondary-tertiary-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      [
                        "match",
                        ["get", "class"],
                        ["secondary", "tertiary"],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.2],
                      ["zoom"],
                      10,
                      0.75,
                      18,
                      2,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      8.5,
                      0.5,
                      10,
                      0.75,
                      18,
                      26,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      9.99,
                      0,
                      10,
                      1,
                    ],
                  },
                },
                {
                  id: "road-primary-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "primary"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      16,
                      2,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      9.99,
                      0,
                      10,
                      1,
                    ],
                  },
                },
                {
                  id: "road-motorway_link-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 10,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway_link"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10.99,
                      0,
                      11,
                      1,
                    ],
                  },
                },
                {
                  id: "road-trunk_link-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "type"], "trunk_link"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10.99,
                      0,
                      11,
                      1,
                    ],
                  },
                },
                {
                  id: "road-trunk-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "trunk"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      10,
                      1,
                      16,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      6,
                      0,
                      6.1,
                      1,
                    ],
                  },
                },
                {
                  id: "road-motorway-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      10,
                      1,
                      16,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                  },
                },
                {
                  id: "road-construction",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 14,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "construction"],
                      ["==", ["get", "structure"], "none"],
                    ],
                  ],
                  layout: { "line-join": "miter" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [0.4, 0.8]],
                      15,
                      ["literal", [0.3, 0.6]],
                      16,
                      ["literal", [0.2, 0.3]],
                      17,
                      ["literal", [0.2, 0.25]],
                      18,
                      ["literal", [0.15, 0.15]],
                    ],
                  },
                },
                {
                  id: "road-sidewalk-corridor",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 16,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                      [
                        "match",
                        ["get", "type"],
                        ["corridor", "crossing", "sidewalk"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      4,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [4, 0.4]],
                      15,
                      ["literal", [3, 0.4]],
                      16,
                      ["literal", [3, 0.35]],
                      17,
                      ["literal", [3, 0.35]],
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      0,
                      16.25,
                      1,
                    ],
                  },
                },
                {
                  id: "road-path-smooth",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                      [
                        "match",
                        ["get", "type"],
                        ["bridleway", "footway", "path"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      4,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [4, 0.4]],
                      15,
                      ["literal", [3, 0.4]],
                      16,
                      ["literal", [3, 0.35]],
                      17,
                      ["literal", [3, 0.35]],
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "road-path-rough",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                      [
                        "match",
                        ["get", "type"],
                        ["hiking", "mountain_bike", "trail"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      4,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [4, 0.4]],
                      15,
                      ["literal", [1.75, 0.4]],
                      16,
                      ["literal", [1, 0.4]],
                      17,
                      ["literal", [1, 0.35]],
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "road-cycleway-piste",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                      ["match", ["get", "type"], ["cycleway", "piste"], !0, !1],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      4,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "road-steps",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "type"], "steps"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      16,
                      1.6,
                      18,
                      6,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [4, 0.4]],
                      15,
                      ["literal", [1.75, 0.4]],
                      16,
                      ["literal", [0.75, 0.4]],
                      17,
                      ["literal", [0.3, 0.3]],
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "road-trunk_link",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "type"], "trunk_link"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(46, 69%, 68%)",
                    "line-opacity": 1,
                  },
                },
                {
                  id: "road-motorway_link",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 10,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway_link"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(26, 67%, 70%)",
                    "line-opacity": 1,
                  },
                },
                {
                  id: "road-pedestrian",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 12,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "pedestrian"],
                      ["==", ["get", "structure"], "none"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      18,
                      12,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": 1,
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [1, 0]],
                      15,
                      ["literal", [1.5, 0.4]],
                      16,
                      ["literal", [1, 0.2]],
                    ],
                  },
                },
                {
                  id: "road-pedestrian-polygon-fill",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 12,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "Polygon"],
                    [
                      "all",
                      ["==", ["get", "structure"], "none"],
                      [
                        "match",
                        ["get", "class"],
                        ["path", "pedestrian"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: {},
                  paint: {
                    "fill-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      "hsl(230, 16%, 94%)",
                      16.25,
                      "hsl(230, 50%, 98%)",
                    ],
                    "fill-outline-color": "hsl(230, 26%, 88%)",
                    "fill-opacity": 1,
                  },
                },
                {
                  id: "road-pedestrian-polygon-pattern",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 12,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "Polygon"],
                    [
                      "all",
                      ["==", ["get", "structure"], "none"],
                      [
                        "match",
                        ["get", "class"],
                        ["path", "pedestrian"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(0, 0%, 100%)",
                    "fill-outline-color": "hsl(35, 10%, 83%)",
                    "fill-pattern": "pedestrian-polygon",
                    "fill-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      0,
                      16.25,
                      1,
                    ],
                  },
                },
                {
                  id: "road-polygon",
                  type: "fill",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 12,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "Polygon"],
                    [
                      "all",
                      [
                        "match",
                        ["get", "class"],
                        ["motorway", "path", "pedestrian", "trunk"],
                        !1,
                        !0,
                      ],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: {},
                  paint: {
                    "fill-color": "hsl(0, 0%, 100%)",
                    "fill-outline-color": "hsl(230, 19%, 75%)",
                  },
                },
                {
                  id: "road-track",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "track"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      12,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                  },
                },
                {
                  id: "road-service-link",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 14,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["!=", ["get", "type"], "trunk_link"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "service",
                        ],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      18,
                      12,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                  },
                },
                {
                  id: "road-street_limited",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street_limited"],
                      ["==", ["get", "structure"], "none"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(35, 14%, 93%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "road-street",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street"],
                      ["==", ["get", "structure"], "none"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "road-secondary-tertiary",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      [
                        "match",
                        ["get", "class"],
                        ["secondary", "tertiary"],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      8.5,
                      0.5,
                      10,
                      0.75,
                      18,
                      26,
                    ],
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      5,
                      "hsl(35, 32%, 91%)",
                      8,
                      "hsl(0, 0%, 100%)",
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["exponential", 1.2],
                      ["zoom"],
                      5,
                      0,
                      5.5,
                      1,
                    ],
                  },
                },
                {
                  id: "road-primary",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "primary"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      5,
                      "hsl(35, 32%, 91%)",
                      8,
                      "hsl(0, 0%, 100%)",
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["exponential", 1.2],
                      ["zoom"],
                      5,
                      0,
                      5.5,
                      1,
                    ],
                  },
                },
                {
                  id: "road-oneway-arrows-blue-minor",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 16,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["!=", ["get", "type"], "trunk_link"],
                      ["==", ["get", "oneway"], "true"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "path",
                          "pedestrian",
                          "service",
                          "track",
                        ],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: {
                    "symbol-placement": "line",
                    "icon-image": [
                      "step",
                      ["zoom"],
                      "oneway-small",
                      18,
                      "oneway-large",
                    ],
                    "icon-rotation-alignment": "map",
                    "icon-padding": 2,
                    "symbol-spacing": 200,
                  },
                  paint: {},
                },
                {
                  id: "road-oneway-arrows-blue-major",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 15,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["!=", ["get", "type"], "trunk_link"],
                      ["==", ["get", "oneway"], "true"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "primary",
                          "secondary",
                          "street",
                          "street_limited",
                          "tertiary",
                        ],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: {
                    "symbol-placement": "line",
                    "icon-image": [
                      "step",
                      ["zoom"],
                      "oneway-small",
                      17,
                      "oneway-large",
                    ],
                    "icon-rotation-alignment": "map",
                    "icon-padding": 2,
                    "symbol-spacing": 200,
                  },
                  paint: {},
                },
                {
                  id: "road-trunk",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "trunk"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      6,
                      "hsl(0, 0%, 100%)",
                      6.1,
                      "hsl(46, 80%, 60%)",
                      9,
                      "hsl(46, 69%, 68%)",
                    ],
                  },
                },
                {
                  id: "road-motorway",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway"],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      8,
                      "hsl(26, 87%, 62%)",
                      9,
                      "hsl(26, 67%, 70%)",
                    ],
                  },
                },
                {
                  id: "road-rail",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      [
                        "match",
                        ["get", "class"],
                        ["major_rail", "minor_rail", "service_rail"],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      "hsl(50, 17%, 82%)",
                      16,
                      "hsl(230, 10%, 74%)",
                    ],
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      20,
                      1,
                    ],
                  },
                },
                {
                  id: "road-rail-tracks",
                  type: "line",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      [
                        "match",
                        ["get", "class"],
                        ["major_rail", "minor_rail", "service_rail"],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      "hsl(50, 17%, 82%)",
                      16,
                      "hsl(230, 10%, 74%)",
                    ],
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      4,
                      20,
                      8,
                    ],
                    "line-dasharray": [0.1, 15],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.75,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "road-oneway-arrows-white",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444855786460.0557" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 16,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "oneway"], "true"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "trunk",
                        ],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "structure"],
                        ["bridge", "tunnel"],
                        !1,
                        !0,
                      ],
                      [
                        "match",
                        ["get", "type"],
                        ["primary_link", "secondary_link", "tertiary_link"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: {
                    "symbol-placement": "line",
                    "icon-image": [
                      "step",
                      ["zoom"],
                      "oneway-white-small",
                      17,
                      "oneway-white-large",
                    ],
                    "icon-padding": 2,
                    "symbol-spacing": 200,
                  },
                  paint: { "icon-opacity": 0.5 },
                },
                {
                  id: "hedges",
                  type: "line",
                  source: "composite",
                  "source-layer": "structure",
                  minzoom: 16,
                  filter: ["==", ["get", "class"], "hedge"],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-color": "hsl(100, 59%, 70%)",
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      1,
                      20,
                      3,
                    ],
                    "line-opacity": 1,
                    "line-dasharray": [1, 2, 5, 2, 1, 2],
                  },
                },
                {
                  id: "fences",
                  type: "line",
                  source: "composite",
                  "source-layer": "structure",
                  minzoom: 16,
                  filter: ["==", ["get", "class"], "fence"],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-color": "hsl(46, 17%, 76%)",
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      1,
                      20,
                      3,
                    ],
                    "line-opacity": 1,
                    "line-dasharray": [1, 2, 5, 2, 1, 2],
                  },
                },
                {
                  id: "gates",
                  type: "line",
                  source: "composite",
                  "source-layer": "structure",
                  minzoom: 17,
                  filter: ["==", ["get", "class"], "gate"],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-color": "hsl(46, 17%, 76%)",
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      1,
                      20,
                      3,
                    ],
                    "line-opacity": 0.5,
                    "line-dasharray": [1, 2, 5, 2, 1, 2],
                  },
                },
                {
                  id: "bridge-path-bg",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      ["==", ["get", "structure"], "bridge"],
                      ["match", ["get", "type"], ["piste", "steps"], !1, !0],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      2.5,
                      18,
                      8,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                    "line-color": "hsl(50, 100%, 40%)",
                    "line-blur": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      14,
                      0,
                      17,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-piste-bg",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      ["==", ["get", "structure"], "bridge"],
                      ["==", ["get", "type"], "piste"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      2,
                      18,
                      7,
                    ],
                    "line-dasharray": [1, 0],
                    "line-color": "hsl(205, 63%, 60%)",
                    "line-blur": 0,
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-steps-bg",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      ["==", ["get", "type"], "steps"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      2.5,
                      18,
                      8,
                    ],
                    "line-color": "hsl(50, 100%, 40%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                    "line-blur": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      14,
                      0,
                      17,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-pedestrian-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "pedestrian"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      2,
                      18,
                      14.5,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": 0,
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-street-low",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11.5,
                      0,
                      12,
                      1,
                      14,
                      1,
                      14.01,
                      0,
                    ],
                  },
                },
                {
                  id: "bridge-street_limited-low",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street_limited"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11.5,
                      0,
                      12,
                      1,
                      14,
                      1,
                      14.01,
                      0,
                    ],
                  },
                },
                {
                  id: "bridge-track-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "track"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(50, 100%, 40%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      12,
                    ],
                  },
                },
                {
                  id: "bridge-service-link-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 14,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["!=", ["get", "type"], "trunk_link"],
                      ["==", ["get", "structure"], "bridge"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "service",
                        ],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      18,
                      12,
                    ],
                  },
                },
                {
                  id: "bridge-street_limited-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street_limited"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      13,
                      0,
                      14,
                      2,
                      18,
                      18,
                    ],
                  },
                },
                {
                  id: "bridge-street-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      13,
                      0,
                      14,
                      2,
                      18,
                      18,
                    ],
                  },
                },
                {
                  id: "bridge-secondary-tertiary-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      [
                        "match",
                        ["get", "class"],
                        ["secondary", "tertiary"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.2],
                      ["zoom"],
                      10,
                      0.75,
                      18,
                      2,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      8.5,
                      0.5,
                      10,
                      0.75,
                      18,
                      26,
                    ],
                    "line-translate": [0, 0],
                  },
                },
                {
                  id: "bridge-primary-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "primary"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      16,
                      2,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-translate": [0, 0],
                  },
                },
                {
                  id: "bridge-trunk_link-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      ["==", ["get", "type"], "trunk_link"],
                      ["match", ["get", "layer"], [2, 3, 4, 5], !1, !0],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10.99,
                      0,
                      11,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-motorway_link-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway_link"],
                      ["==", ["get", "structure"], "bridge"],
                      ["match", ["get", "layer"], [2, 3, 4, 5], !1, !0],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-opacity": 1,
                  },
                },
                {
                  id: "bridge-trunk-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "trunk"],
                      ["==", ["get", "structure"], "bridge"],
                      ["match", ["get", "layer"], [2, 3, 4, 5], !1, !0],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      16,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                  },
                },
                {
                  id: "bridge-motorway-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway"],
                      ["==", ["get", "structure"], "bridge"],
                      ["match", ["get", "layer"], [2, 3, 4, 5], !1, !0],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      16,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                  },
                },
                {
                  id: "bridge-construction",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 14,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "construction"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-join": "miter" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(230, 24%, 87%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [0.4, 0.8]],
                      15,
                      ["literal", [0.3, 0.6]],
                      16,
                      ["literal", [0.2, 0.3]],
                      17,
                      ["literal", [0.2, 0.25]],
                      18,
                      ["literal", [0.15, 0.15]],
                    ],
                  },
                },
                {
                  id: "bridge-path",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      ["==", ["get", "structure"], "bridge"],
                      [
                        "match",
                        ["get", "type"],
                        ["cycleway", "piste", "steps"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      4,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [4, 0.4]],
                      15,
                      ["literal", [3, 0.4]],
                      16,
                      ["literal", [3, 0.35]],
                      17,
                      ["literal", [3, 0.35]],
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-cycleway-piste",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "path"],
                      ["==", ["get", "structure"], "bridge"],
                      ["match", ["get", "type"], ["cycleway", "piste"], !0, !1],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      4,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-steps",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      ["==", ["get", "type"], "steps"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      16,
                      1.6,
                      18,
                      6,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [4, 0.4]],
                      15,
                      ["literal", [1.75, 0.4]],
                      16,
                      ["literal", [0.75, 0.4]],
                      17,
                      ["literal", [0.3, 0.3]],
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      0,
                      13.25,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-trunk_link",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      ["==", ["get", "type"], "trunk_link"],
                      ["match", ["get", "layer"], [2, 3, 4, 5], !1, !0],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(46, 69%, 68%)",
                  },
                },
                {
                  id: "bridge-motorway_link",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway_link"],
                      ["==", ["get", "structure"], "bridge"],
                      ["match", ["get", "layer"], [2, 3, 4, 5], !1, !0],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(26, 67%, 70%)",
                  },
                },
                {
                  id: "bridge-pedestrian",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "pedestrian"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      18,
                      12,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": 1,
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [1, 0]],
                      15,
                      ["literal", [1.5, 0.4]],
                      16,
                      ["literal", [1, 0.2]],
                    ],
                  },
                },
                {
                  id: "bridge-track",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "track"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      15,
                      1,
                      18,
                      12,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                  },
                },
                {
                  id: "bridge-service-link",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 14,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["!=", ["get", "type"], "trunk_link"],
                      ["==", ["get", "structure"], "bridge"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "service",
                          "track",
                        ],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      18,
                      12,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                  },
                },
                {
                  id: "bridge-street_limited",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street_limited"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(35, 14%, 93%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-street",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "street"],
                      ["==", ["get", "structure"], "bridge"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12.5,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-secondary-tertiary",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      [
                        "match",
                        ["get", "type"],
                        ["secondary", "tertiary"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      8.5,
                      0.5,
                      10,
                      0.75,
                      18,
                      26,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["exponential", 1.2],
                      ["zoom"],
                      5,
                      0,
                      5.5,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-primary",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      ["==", ["get", "type"], "primary"],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-opacity": [
                      "interpolate",
                      ["exponential", 1.2],
                      ["zoom"],
                      5,
                      0,
                      5.5,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-oneway-arrows-blue-minor",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 16,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "oneway"], "true"],
                      ["==", ["get", "structure"], "bridge"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "path",
                          "pedestrian",
                          "service",
                          "track",
                        ],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: {
                    "symbol-placement": "line",
                    "icon-image": [
                      "step",
                      ["zoom"],
                      "oneway-small",
                      18,
                      "oneway-large",
                    ],
                    "symbol-spacing": 200,
                    "icon-rotation-alignment": "map",
                    "icon-padding": 2,
                  },
                  paint: {},
                },
                {
                  id: "bridge-oneway-arrows-blue-major",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 15,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "oneway"], "true"],
                      ["==", ["get", "structure"], "bridge"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "primary",
                          "secondary",
                          "street",
                          "street_limited",
                          "tertiary",
                        ],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: {
                    "symbol-placement": "line",
                    "icon-image": [
                      "step",
                      ["zoom"],
                      "oneway-small",
                      17,
                      "oneway-large",
                    ],
                    "symbol-spacing": 200,
                    "icon-rotation-alignment": "map",
                    "icon-padding": 2,
                  },
                  paint: {},
                },
                {
                  id: "bridge-trunk",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "trunk"],
                      ["==", ["get", "structure"], "bridge"],
                      ["match", ["get", "layer"], [2, 3, 4, 5], !1, !0],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": "hsl(46, 69%, 68%)",
                  },
                },
                {
                  id: "bridge-motorway",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway"],
                      ["==", ["get", "structure"], "bridge"],
                      ["match", ["get", "layer"], [2, 3, 4, 5], !1, !0],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": "hsl(26, 67%, 70%)",
                  },
                },
                {
                  id: "bridge-rail",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      [
                        "match",
                        ["get", "class"],
                        ["major_rail", "minor_rail", "service_rail"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      "hsl(50, 17%, 82%)",
                      16,
                      "hsl(230, 10%, 74%)",
                    ],
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      20,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-rail-tracks",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      [
                        "match",
                        ["get", "class"],
                        ["major_rail", "minor_rail", "service_rail"],
                        !0,
                        !1,
                      ],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      "hsl(50, 17%, 82%)",
                      16,
                      "hsl(230, 10%, 74%)",
                    ],
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      4,
                      20,
                      8,
                    ],
                    "line-dasharray": [0.1, 15],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.75,
                      0,
                      20,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-trunk_link-2-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      ["==", ["get", "type"], "trunk_link"],
                      [">=", ["get", "layer"], 2],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10.99,
                      0,
                      11,
                      1,
                    ],
                  },
                },
                {
                  id: "bridge-motorway_link-2-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway_link"],
                      ["==", ["get", "structure"], "bridge"],
                      [">=", ["get", "layer"], 2],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.75,
                      20,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-opacity": 1,
                  },
                },
                {
                  id: "bridge-trunk-2-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "trunk"],
                      ["==", ["get", "structure"], "bridge"],
                      [">=", ["get", "layer"], 2],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      10,
                      1,
                      16,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                  },
                },
                {
                  id: "bridge-motorway-2-case",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway"],
                      ["==", ["get", "structure"], "bridge"],
                      [">=", ["get", "layer"], 2],
                    ],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      10,
                      1,
                      16,
                      2,
                    ],
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-gap-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                  },
                },
                {
                  id: "bridge-trunk_link-2",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "structure"], "bridge"],
                      ["==", ["get", "type"], "trunk_link"],
                      [">=", ["get", "layer"], 2],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(46, 69%, 68%)",
                  },
                },
                {
                  id: "bridge-motorway_link-2",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway_link"],
                      ["==", ["get", "structure"], "bridge"],
                      [">=", ["get", "layer"], 2],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      12,
                      0.5,
                      14,
                      2,
                      18,
                      18,
                    ],
                    "line-color": "hsl(26, 67%, 70%)",
                  },
                },
                {
                  id: "bridge-trunk-2",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "trunk"],
                      ["==", ["get", "structure"], "bridge"],
                      [">=", ["get", "layer"], 2],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": "hsl(46, 69%, 68%)",
                  },
                },
                {
                  id: "bridge-motorway-2",
                  type: "line",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "class"], "motorway"],
                      ["==", ["get", "structure"], "bridge"],
                      [">=", ["get", "layer"], 2],
                    ],
                  ],
                  layout: { "line-cap": "round", "line-join": "round" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      5,
                      0.75,
                      18,
                      32,
                    ],
                    "line-color": "hsl(26, 67%, 70%)",
                  },
                },
                {
                  id: "bridge-oneway-arrows-white",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444855799204.86" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 16,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "all",
                      ["==", ["get", "oneway"], "true"],
                      ["==", ["get", "structure"], "bridge"],
                      [
                        "match",
                        ["get", "class"],
                        [
                          "trunk_link",
                          "primary_link",
                          "secondary_link",
                          "tertiary_link",
                          "trunk",
                        ],
                        !0,
                        !1,
                      ],
                      [
                        "match",
                        ["get", "type"],
                        ["primary_link", "secondary_link", "tertiary_link"],
                        !1,
                        !0,
                      ],
                    ],
                  ],
                  layout: {
                    "symbol-placement": "line",
                    "icon-image": [
                      "step",
                      ["zoom"],
                      "oneway-white-small",
                      17,
                      "oneway-white-large",
                    ],
                    "symbol-spacing": 200,
                    "icon-padding": 2,
                  },
                  paint: { "icon-opacity": 0.5 },
                },
                {
                  id: "aerialway-bg",
                  type: "line",
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    ["==", ["get", "class"], "aerialway"],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-color": "hsl(0, 0%, 100%)",
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      2.5,
                      20,
                      3,
                    ],
                    "line-blur": 0.5,
                  },
                },
                {
                  id: "aerialway",
                  type: "line",
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 13,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    ["==", ["get", "class"], "aerialway"],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-color": "hsl(230, 4%, 29%)",
                    "line-width": [
                      "interpolate",
                      ["exponential", 1.5],
                      ["zoom"],
                      14,
                      0.5,
                      20,
                      1,
                    ],
                  },
                },
                {
                  id: "admin-3-4-boundaries-bg",
                  type: "line",
                  metadata: { "mapbox:group": "1444934295202.7542" },
                  source: "composite",
                  "source-layer": "admin",
                  filter: [
                    "all",
                    ["<=", ["get", "admin_level"], 1],
                    ["==", ["get", "maritime"], "false"],
                    [">=", ["get", "admin_level"], 0],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: { "line-join": "bevel" },
                  paint: {
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      8,
                      "hsl(35, 12%, 89%)",
                      16,
                      "hsl(230, 49%, 90%)",
                    ],
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7,
                      3.75,
                      12,
                      5.5,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7,
                      0,
                      8,
                      0.75,
                    ],
                    "line-dasharray": [1, 0],
                    "line-translate": [0, 0],
                    "line-blur": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      3,
                      0,
                      8,
                      3,
                    ],
                  },
                },
                {
                  id: "admin-2-boundaries-bg",
                  type: "line",
                  metadata: { "mapbox:group": "1444934295202.7542" },
                  source: "composite",
                  "source-layer": "admin",
                  minzoom: 1,
                  filter: [
                    "all",
                    ["<=", ["get", "admin_level"], 1],
                    ["==", ["get", "admin_level"], 0],
                    ["==", ["get", "maritime"], "false"],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: { "line-join": "miter" },
                  paint: {
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      3,
                      3.5,
                      10,
                      8,
                    ],
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      6,
                      "hsl(35, 12%, 89%)",
                      8,
                      "hsl(230, 49%, 90%)",
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      3,
                      0,
                      4,
                      0.5,
                    ],
                    "line-translate": [0, 0],
                    "line-blur": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      3,
                      0,
                      10,
                      2,
                    ],
                  },
                },
                {
                  id: "admin-3-4-boundaries",
                  type: "line",
                  metadata: { "mapbox:group": "1444934295202.7542" },
                  source: "composite",
                  "source-layer": "admin",
                  filter: [
                    "all",
                    ["<=", ["get", "admin_level"], 1],
                    ["==", ["get", "maritime"], "false"],
                    [">=", ["get", "admin_level"], 0],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: { "line-join": "round", "line-cap": "round" },
                  paint: {
                    "line-dasharray": [
                      "step",
                      ["zoom"],
                      ["literal", [2, 0]],
                      7,
                      ["literal", [2, 2, 6, 2]],
                    ],
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7,
                      0.75,
                      12,
                      1.5,
                    ],
                    "line-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      2,
                      0,
                      3,
                      1,
                    ],
                    "line-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      3,
                      "hsl(230, 14%, 77%)",
                      7,
                      "hsl(230, 8%, 62%)",
                    ],
                  },
                },
                {
                  id: "admin-2-boundaries",
                  type: "line",
                  metadata: { "mapbox:group": "1444934295202.7542" },
                  source: "composite",
                  "source-layer": "admin",
                  minzoom: 1,
                  filter: [
                    "all",
                    ["<=", ["get", "admin_level"], 1],
                    ["==", ["get", "admin_level"], 0],
                    ["==", ["get", "disputed"], "false"],
                    ["==", ["get", "maritime"], "false"],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: { "line-join": "round", "line-cap": "round" },
                  paint: {
                    "line-color": "hsl(230, 8%, 51%)",
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      3,
                      0.5,
                      10,
                      2,
                    ],
                  },
                },
                {
                  id: "admin-2-boundaries-dispute",
                  type: "line",
                  metadata: { "mapbox:group": "1444934295202.7542" },
                  source: "composite",
                  "source-layer": "admin",
                  minzoom: 1,
                  filter: [
                    "all",
                    ["<=", ["get", "admin_level"], 1],
                    ["==", ["get", "admin_level"], 0],
                    ["==", ["get", "disputed"], "true"],
                    ["==", ["get", "maritime"], "false"],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: { "line-join": "round" },
                  paint: {
                    "line-dasharray": [1.5, 1.5],
                    "line-color": "hsl(230, 8%, 51%)",
                    "line-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      3,
                      0.5,
                      10,
                      2,
                    ],
                  },
                },
                {
                  id: "housenum-label",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "housenum_label",
                  minzoom: 17,
                  layout: {
                    "text-field": ["to-string", ["get", "house_num"]],
                    "text-font": [
                      "DIN Offc Pro Italic",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 4,
                    "text-max-width": 7,
                    "text-size": 9.5,
                  },
                  paint: {
                    "text-color": "hsl(35, 2%, 69%)",
                    "text-halo-color": "hsl(35, 8%, 85%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0,
                  },
                },
                {
                  id: "contour-label",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "contour",
                  minzoom: 11,
                  filter: ["match", ["get", "index"], [10, 5], !0, !1],
                  layout: {
                    "text-field": ["concat", ["get", "ele"], " m"],
                    "symbol-placement": "line",
                    "text-max-angle": 25,
                    "text-padding": 5,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      9.5,
                      20,
                      12,
                    ],
                  },
                  paint: {
                    "text-color": "hsl(100, 60%, 28%)",
                    "text-halo-width": 1,
                    "text-halo-blur": 0,
                    "text-halo-color": "hsla(0, 0%, 100%, 0.5)",
                  },
                },
                {
                  id: "waterway-label",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "natural_label",
                  minzoom: 12,
                  filter: [
                    "all",
                    [
                      "match",
                      ["get", "class"],
                      ["canal", "river", "stream"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "class"], ["canal", "river"], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-font": [
                      "DIN Offc Pro Italic",
                      "Arial Unicode MS Regular",
                    ],
                    "symbol-placement": "line",
                    "text-max-angle": 30,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      12,
                      18,
                      16,
                    ],
                  },
                  paint: {
                    "text-halo-width": 0.5,
                    "text-halo-color": "hsl(196, 80%, 70%)",
                    "text-color": "hsl(230, 48%, 44%)",
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "poi-relevant-scalerank4-l15",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933456003.5437" },
                  source: "composite",
                  "source-layer": "poi_label",
                  minzoom: 17,
                  filter: [
                    "all",
                    ["==", ["get", "filterrank"], 4],
                    [">=", ["get", "sizerank"], 1],
                    [
                      "match",
                      ["get", "maki"],
                      [
                        "amusement-park",
                        "aquarium",
                        "attraction",
                        "bakery",
                        "bank",
                        "bar",
                        "beer",
                        "bus",
                        "cafe",
                        "castle",
                        "college",
                        "doctor",
                        "fast-food",
                        "ferry",
                        "fire-station",
                        "fuel",
                        "grocery",
                        "harbor",
                        "hospital",
                        "ice-cream",
                        "lodging",
                        "marker",
                        "monument",
                        "museum",
                        "pharmacy",
                        "police",
                        "post",
                        "restaurant",
                        "rocket",
                        "stadium",
                        "swimming",
                      ],
                      !0,
                      !1,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      11,
                      20,
                      13,
                    ],
                    "icon-image": [
                      "concat",
                      [
                        "match",
                        ["get", "maki"],
                        [
                          "american-football",
                          "basketball",
                          "beach",
                          "bowling-alley",
                          "bridge",
                          "car-rental",
                          "car-repair",
                          "casino",
                          "charging-station",
                          "communications-tower",
                          "confectionery",
                          "convenience",
                          "farm",
                          "fitness-centre",
                          "furniture",
                          "globe",
                          "hardware",
                          "horse-riding",
                          "jewelry-store",
                          "mobile-phone",
                          "optician",
                          "parking",
                          "parking-garage",
                          "pitch",
                          "ranger-station",
                          "religious-buddhist",
                          "restaurant-noodle",
                          "restaurant-pizza",
                          "restaurant-seafood",
                          "shoe",
                          "skateboard",
                          "slipway",
                          "stadium",
                          "suitcase",
                          "table-tennis",
                          "tennis",
                          "viewpoint",
                          "volleyball",
                          "watch",
                          "watermill",
                          "windmill",
                        ],
                        "marker",
                        ["get", "maki"],
                      ],
                      "-11",
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 1,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(25, 25%, 32%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "poi-relevant-scalerank4-l1",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933456003.5437" },
                  source: "composite",
                  "source-layer": "poi_label",
                  minzoom: 15,
                  filter: [
                    "all",
                    ["<=", ["get", "sizerank"], 12],
                    ["==", ["get", "filterrank"], 4],
                    [
                      "match",
                      ["get", "maki"],
                      [
                        "amusement-park",
                        "aquarium",
                        "attraction",
                        "bakery",
                        "bank",
                        "bar",
                        "beer",
                        "bus",
                        "cafe",
                        "castle",
                        "college",
                        "doctor",
                        "fast-food",
                        "ferry",
                        "fire-station",
                        "fuel",
                        "grocery",
                        "harbor",
                        "hospital",
                        "ice-cream",
                        "lodging",
                        "marker",
                        "monument",
                        "museum",
                        "pharmacy",
                        "police",
                        "post",
                        "restaurant",
                        "rocket",
                        "stadium",
                        "swimming",
                      ],
                      !0,
                      !1,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      11,
                      20,
                      13,
                    ],
                    "icon-image": [
                      "concat",
                      [
                        "match",
                        ["get", "maki"],
                        [
                          "american-football",
                          "basketball",
                          "beach",
                          "bowling-alley",
                          "bridge",
                          "car-rental",
                          "car-repair",
                          "casino",
                          "charging-station",
                          "communications-tower",
                          "confectionery",
                          "convenience",
                          "farm",
                          "fitness-centre",
                          "furniture",
                          "globe",
                          "hardware",
                          "horse-riding",
                          "jewelry-store",
                          "mobile-phone",
                          "optician",
                          "parking",
                          "parking-garage",
                          "pitch",
                          "ranger-station",
                          "religious-buddhist",
                          "restaurant-noodle",
                          "restaurant-pizza",
                          "restaurant-seafood",
                          "shoe",
                          "skateboard",
                          "slipway",
                          "stadium",
                          "suitcase",
                          "table-tennis",
                          "tennis",
                          "viewpoint",
                          "volleyball",
                          "watch",
                          "watermill",
                          "windmill",
                        ],
                        "marker",
                        ["get", "maki"],
                      ],
                      "-11",
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 1,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(25, 25%, 32%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "poi-parks_scalerank4",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933456003.5437" },
                  source: "composite",
                  "source-layer": "poi_label",
                  minzoom: 15,
                  filter: [
                    "all",
                    ["==", ["get", "filterrank"], 4],
                    [
                      "match",
                      ["get", "maki"],
                      [
                        "campsite",
                        "cemetery",
                        "dog-park",
                        "garden",
                        "golf",
                        "park",
                        "picnic-site",
                        "playground",
                        "zoo",
                      ],
                      !0,
                      !1,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      11,
                      20,
                      13,
                    ],
                    "icon-image": [
                      "concat",
                      [
                        "match",
                        ["get", "maki"],
                        [
                          "american-football",
                          "basketball",
                          "beach",
                          "bowling-alley",
                          "bridge",
                          "car-rental",
                          "car-repair",
                          "casino",
                          "charging-station",
                          "communications-tower",
                          "confectionery",
                          "convenience",
                          "farm",
                          "fitness-centre",
                          "furniture",
                          "globe",
                          "hardware",
                          "horse-riding",
                          "jewelry-store",
                          "mobile-phone",
                          "optician",
                          "parking",
                          "parking-garage",
                          "pitch",
                          "ranger-station",
                          "religious-buddhist",
                          "restaurant-noodle",
                          "restaurant-pizza",
                          "restaurant-seafood",
                          "shoe",
                          "skateboard",
                          "slipway",
                          "stadium",
                          "suitcase",
                          "table-tennis",
                          "tennis",
                          "viewpoint",
                          "volleyball",
                          "watch",
                          "watermill",
                          "windmill",
                        ],
                        "marker",
                        ["get", "maki"],
                      ],
                      "-11",
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 1,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(100, 100%, 20%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "poi-scalerank3",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933372896.5967" },
                  source: "composite",
                  "source-layer": "poi_label",
                  filter: [
                    "all",
                    ["match", ["get", "filterrank"], [2, 3], !0, !1],
                    [
                      "match",
                      ["get", "maki"],
                      [
                        "campsite",
                        "cemetery",
                        "dog-park",
                        "garden",
                        "golf",
                        "park",
                        "picnic-site",
                        "playground",
                        "zoo",
                      ],
                      !1,
                      !0,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      11,
                      20,
                      13,
                    ],
                    "icon-image": [
                      "concat",
                      [
                        "match",
                        ["get", "maki"],
                        [
                          "american-football",
                          "basketball",
                          "beach",
                          "bowling-alley",
                          "bridge",
                          "car-rental",
                          "car-repair",
                          "casino",
                          "charging-station",
                          "communications-tower",
                          "confectionery",
                          "convenience",
                          "farm",
                          "fitness-centre",
                          "furniture",
                          "globe",
                          "hardware",
                          "horse-riding",
                          "jewelry-store",
                          "mobile-phone",
                          "optician",
                          "parking",
                          "parking-garage",
                          "pitch",
                          "ranger-station",
                          "religious-buddhist",
                          "restaurant-noodle",
                          "restaurant-pizza",
                          "restaurant-seafood",
                          "shoe",
                          "skateboard",
                          "slipway",
                          "stadium",
                          "suitcase",
                          "table-tennis",
                          "tennis",
                          "viewpoint",
                          "volleyball",
                          "watch",
                          "watermill",
                          "windmill",
                        ],
                        "marker",
                        ["get", "maki"],
                      ],
                      "-11",
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 1,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(25, 25%, 32%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "poi-parks-scalerank3",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933372896.5967" },
                  source: "composite",
                  "source-layer": "poi_label",
                  filter: [
                    "all",
                    ["match", ["get", "filterrank"], [2, 3], !0, !1],
                    [
                      "match",
                      ["get", "maki"],
                      [
                        "campsite",
                        "cemetery",
                        "dog-park",
                        "garden",
                        "golf",
                        "park",
                        "picnic-site",
                        "playground",
                        "zoo",
                      ],
                      !0,
                      !1,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      11,
                      20,
                      13,
                    ],
                    "icon-image": [
                      "concat",
                      [
                        "match",
                        ["get", "maki"],
                        [
                          "american-football",
                          "basketball",
                          "beach",
                          "bowling-alley",
                          "bridge",
                          "car-rental",
                          "car-repair",
                          "casino",
                          "charging-station",
                          "communications-tower",
                          "confectionery",
                          "convenience",
                          "farm",
                          "fitness-centre",
                          "furniture",
                          "globe",
                          "hardware",
                          "horse-riding",
                          "jewelry-store",
                          "mobile-phone",
                          "optician",
                          "parking",
                          "parking-garage",
                          "pitch",
                          "ranger-station",
                          "religious-buddhist",
                          "restaurant-noodle",
                          "restaurant-pizza",
                          "restaurant-seafood",
                          "shoe",
                          "skateboard",
                          "slipway",
                          "stadium",
                          "suitcase",
                          "table-tennis",
                          "tennis",
                          "viewpoint",
                          "volleyball",
                          "watch",
                          "watermill",
                          "windmill",
                        ],
                        "marker",
                        ["get", "maki"],
                      ],
                      "-11",
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(100, 100%, 20%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "road-label-small",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933721429.3076" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 15,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "match",
                      ["get", "class"],
                      [
                        "aerialway",
                        "trunk_link",
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "motorway",
                        "path",
                        "pedestrian",
                        "primary",
                        "secondary",
                        "street",
                        "street_limited",
                        "tertiary",
                        "trunk",
                      ],
                      !1,
                      !0,
                    ],
                    [
                      "step",
                      ["zoom"],
                      ["==", ["geometry-type"], "Point"],
                      11,
                      [">", ["get", "len"], 5e3],
                      12,
                      [">", ["get", "len"], 2500],
                      13,
                      !0,
                    ],
                  ],
                  layout: {
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      15,
                      10,
                      20,
                      13,
                    ],
                    "text-max-angle": 30,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "symbol-placement": "line",
                    "text-padding": 1,
                    "text-rotation-alignment": "map",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1.25,
                    "text-halo-blur": 1,
                  },
                },
                {
                  id: "road-label-medium",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933721429.3076" },
                  source: "composite",
                  "source-layer": "road",
                  minzoom: 11,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [
                      "match",
                      ["get", "class"],
                      [
                        "aerialway",
                        "trunk_link",
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "path",
                        "pedestrian",
                        "street",
                        "street_limited",
                      ],
                      !0,
                      !1,
                    ],
                    [
                      "step",
                      ["zoom"],
                      ["==", ["geometry-type"], "Point"],
                      11,
                      [">", ["get", "len"], 5e3],
                      12,
                      [">", ["get", "len"], 2500],
                      13,
                      !0,
                    ],
                  ],
                  layout: {
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      10,
                      20,
                      14,
                    ],
                    "text-max-angle": 30,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "symbol-placement": "line",
                    "text-padding": 1,
                    "text-rotation-alignment": "map",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                  },
                },
                {
                  id: "road-label-large",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933721429.3076" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    [
                      "match",
                      ["get", "class"],
                      ["motorway", "primary", "secondary", "tertiary", "trunk"],
                      !0,
                      !1,
                    ],
                    [
                      "step",
                      ["zoom"],
                      ["==", ["geometry-type"], "Point"],
                      11,
                      [">", ["get", "len"], 5e3],
                      12,
                      [">", ["get", "len"], 2500],
                      13,
                      !0,
                    ],
                  ],
                  layout: {
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      9,
                      10,
                      20,
                      16,
                    ],
                    "text-max-angle": 30,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "symbol-placement": "line",
                    "text-padding": 1,
                    "text-rotation-alignment": "map",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": "rgba(255,255,255, 0.75)",
                    "text-halo-width": 1,
                    "text-halo-blur": 1,
                  },
                },
                {
                  id: "road-shields-black",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933575858.6992" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["<=", ["get", "reflen"], 6],
                    [
                      "match",
                      ["get", "shield"],
                      [
                        "at-expressway",
                        "at-motorway",
                        "at-state-b",
                        "bg-motorway",
                        "bg-national",
                        "ch-main",
                        "ch-motorway",
                        "cz-motorway",
                        "cz-road",
                        "de-motorway",
                        "e-road",
                        "fi-main",
                        "gr-motorway",
                        "gr-national",
                        "hr-motorway",
                        "hr-state",
                        "hu-main",
                        "hu-motorway",
                        "nz-state",
                        "pl-expressway",
                        "pl-motorway",
                        "pl-national",
                        "ro-county",
                        "ro-motorway",
                        "ro-national",
                        "rs-motorway",
                        "rs-state-1b",
                        "se-main",
                        "si-expressway",
                        "si-motorway",
                        "sk-highway",
                        "sk-road",
                        "us-interstate",
                        "us-interstate-business",
                        "us-interstate-duplex",
                        "us-interstate-truck",
                        "za-metropolitan",
                        "za-national",
                        "za-provincial",
                        "za-regional",
                      ],
                      !1,
                      !0,
                    ],
                    [
                      "step",
                      ["zoom"],
                      ["==", ["geometry-type"], "Point"],
                      11,
                      [">", ["get", "len"], 5e3],
                      12,
                      [">", ["get", "len"], 2500],
                      13,
                      !0,
                    ],
                  ],
                  layout: {
                    "text-size": 9,
                    "icon-image": [
                      "concat",
                      [
                        "match",
                        ["get", "shield"],
                        [
                          "ae-national",
                          "ae-d-route",
                          "ae-f-route",
                          "ae-s-route",
                          "au-alphanumeric",
                          "au-national-highway",
                          "au-national-route",
                          "au-state",
                          "au-tourist",
                          "cn-nths-expy",
                          "cn-natl-hwy",
                          "cn-provincial-expy",
                          "cn-provincial-road",
                          "cn-county-road",
                          "hk-strategic-route",
                          "jo-highway",
                          "kr-natl-expy",
                          "kr-natl-hwy",
                          "kr-metro-expy",
                          "kr-metropolitan",
                          "kr-local",
                          "tw-national",
                          "tw-provincial-expy",
                          "tw-provincial",
                          "tw-county-township",
                          "us-bia",
                          "circle-white",
                          "rectangle-blue",
                          "rectangle-green",
                          "rectangle-orange",
                          "rectangle-red",
                          "rectangle-white",
                          "rectangle-yellow",
                        ],
                        "default",
                        ["get", "shield"],
                      ],
                      "-",
                      ["get", "reflen"],
                    ],
                    "icon-rotation-alignment": "viewport",
                    "text-max-angle": 38,
                    "symbol-spacing": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      150,
                      14,
                      200,
                    ],
                    "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                    "symbol-placement": ["step", ["zoom"], "point", 11, "line"],
                    "text-padding": 2,
                    "text-rotation-alignment": "viewport",
                    "text-field": ["to-string", ["get", "ref"]],
                    "text-letter-spacing": 0.05,
                    "icon-padding": 2,
                  },
                  paint: {
                    "text-color": "hsl(230, 21%, 37%)",
                    "icon-halo-color": "rgba(0, 0, 0, 1)",
                    "icon-halo-width": 1,
                    "text-opacity": 1,
                    "icon-color": "white",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0,
                  },
                },
                {
                  id: "road-shields-white",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933575858.6992" },
                  source: "composite",
                  "source-layer": "road",
                  filter: [
                    "all",
                    ["<=", ["get", "reflen"], 6],
                    [
                      "match",
                      ["get", "shield"],
                      [
                        "at-expressway",
                        "at-motorway",
                        "at-state-b",
                        "bg-motorway",
                        "bg-national",
                        "ch-main",
                        "ch-motorway",
                        "cz-motorway",
                        "cz-road",
                        "de-motorway",
                        "e-road",
                        "fi-main",
                        "gr-motorway",
                        "gr-national",
                        "hr-motorway",
                        "hr-state",
                        "hu-main",
                        "hu-motorway",
                        "nz-state",
                        "pl-expressway",
                        "pl-motorway",
                        "pl-national",
                        "ro-county",
                        "ro-motorway",
                        "ro-national",
                        "rs-motorway",
                        "rs-state-1b",
                        "se-main",
                        "si-expressway",
                        "si-motorway",
                        "sk-highway",
                        "sk-road",
                        "us-interstate",
                        "us-interstate-business",
                        "us-interstate-duplex",
                        "us-interstate-truck",
                        "za-metropolitan",
                        "za-national",
                        "za-provincial",
                        "za-regional",
                      ],
                      !0,
                      !1,
                    ],
                    [
                      "step",
                      ["zoom"],
                      ["==", ["geometry-type"], "Point"],
                      11,
                      [">", ["get", "len"], 5e3],
                      12,
                      [">", ["get", "len"], 2500],
                      13,
                      !0,
                    ],
                  ],
                  layout: {
                    "text-size": 9,
                    "icon-image": [
                      "concat",
                      [
                        "match",
                        ["get", "shield"],
                        [
                          "ae-national",
                          "ae-d-route",
                          "ae-f-route",
                          "ae-s-route",
                          "au-alphanumeric",
                          "au-national-highway",
                          "au-national-route",
                          "au-state",
                          "au-tourist",
                          "cn-nths-expy",
                          "cn-natl-hwy",
                          "cn-provincial-expy",
                          "cn-provincial-road",
                          "cn-county-road",
                          "hk-strategic-route",
                          "jo-highway",
                          "kr-natl-expy",
                          "kr-natl-hwy",
                          "kr-metro-expy",
                          "kr-metropolitan",
                          "kr-local",
                          "tw-national",
                          "tw-provincial-expy",
                          "tw-provincial",
                          "tw-county-township",
                          "us-bia",
                          "circle-white",
                          "rectangle-blue",
                          "rectangle-green",
                          "rectangle-orange",
                          "rectangle-red",
                          "rectangle-white",
                          "rectangle-yellow",
                        ],
                        "default",
                        ["get", "shield"],
                      ],
                      "-",
                      ["get", "reflen"],
                    ],
                    "icon-rotation-alignment": "viewport",
                    "text-max-angle": 38,
                    "symbol-spacing": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      150,
                      14,
                      200,
                    ],
                    "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                    "symbol-placement": ["step", ["zoom"], "point", 11, "line"],
                    "text-padding": 2,
                    "text-rotation-alignment": "viewport",
                    "text-field": ["to-string", ["get", "ref"]],
                    "text-letter-spacing": 0.05,
                    "icon-padding": 2,
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 100%)",
                    "icon-halo-color": "rgba(0, 0, 0, 1)",
                    "icon-halo-width": 1,
                    "text-opacity": 1,
                    "icon-color": "white",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0,
                  },
                },
                {
                  id: "motorway-junction",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933575858.6992" },
                  source: "composite",
                  "source-layer": "motorway_junction",
                  minzoom: 14,
                  filter: [">", ["get", "reflen"], 0],
                  layout: {
                    "text-field": ["to-string", ["get", "ref"]],
                    "text-size": 9,
                    "icon-image": [
                      "concat",
                      "motorway-exit-",
                      ["get", "reflen"],
                    ],
                    "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 100%)",
                    "text-translate": [0, 0],
                  },
                },
                {
                  id: "poi-outdoor-features",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "transit_stop_label",
                  filter: [
                    "all",
                    [
                      "match",
                      ["get", "maki"],
                      [
                        "bicycle",
                        "bicycle-share",
                        "drinking-water",
                        "information",
                        "picnic-site",
                        "toilet",
                      ],
                      !0,
                      !1,
                    ],
                    [
                      "match",
                      ["get", "maki"],
                      ["bus", "ferry", "bicycle-share"],
                      !0,
                      !1,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      11,
                      20,
                      13,
                    ],
                    "icon-image": [
                      "concat",
                      [
                        "match",
                        ["get", "maki"],
                        [
                          "american-football",
                          "basketball",
                          "beach",
                          "bowling-alley",
                          "bridge",
                          "car-rental",
                          "car-repair",
                          "casino",
                          "charging-station",
                          "communications-tower",
                          "confectionery",
                          "convenience",
                          "farm",
                          "fitness-centre",
                          "furniture",
                          "globe",
                          "hardware",
                          "horse-riding",
                          "jewelry-store",
                          "mobile-phone",
                          "optician",
                          "parking",
                          "parking-garage",
                          "pitch",
                          "ranger-station",
                          "religious-buddhist",
                          "restaurant-noodle",
                          "restaurant-pizza",
                          "restaurant-seafood",
                          "shoe",
                          "skateboard",
                          "slipway",
                          "stadium",
                          "suitcase",
                          "table-tennis",
                          "tennis",
                          "viewpoint",
                          "volleyball",
                          "watch",
                          "watermill",
                          "windmill",
                        ],
                        "marker",
                        ["get", "maki"],
                      ],
                      "-11",
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(25, 25%, 32%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "poi-outdoor-features-2",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "poi_label",
                  filter: [
                    "match",
                    ["get", "maki"],
                    [
                      "bicycle",
                      "bicycle-share",
                      "drinking-water",
                      "information",
                      "picnic-site",
                      "toilet",
                    ],
                    !0,
                    !1,
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      11,
                      20,
                      13,
                    ],
                    "icon-image": [
                      "concat",
                      [
                        "match",
                        ["get", "maki"],
                        [
                          "american-football",
                          "basketball",
                          "beach",
                          "bowling-alley",
                          "bridge",
                          "car-rental",
                          "car-repair",
                          "casino",
                          "charging-station",
                          "communications-tower",
                          "confectionery",
                          "convenience",
                          "farm",
                          "fitness-centre",
                          "furniture",
                          "globe",
                          "hardware",
                          "horse-riding",
                          "jewelry-store",
                          "mobile-phone",
                          "optician",
                          "parking",
                          "parking-garage",
                          "pitch",
                          "ranger-station",
                          "religious-buddhist",
                          "restaurant-noodle",
                          "restaurant-pizza",
                          "restaurant-seafood",
                          "shoe",
                          "skateboard",
                          "slipway",
                          "stadium",
                          "suitcase",
                          "table-tennis",
                          "tennis",
                          "viewpoint",
                          "volleyball",
                          "watch",
                          "watermill",
                          "windmill",
                        ],
                        "marker",
                        ["get", "maki"],
                      ],
                      "-11",
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(25, 25%, 32%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "mountain-peak-label",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "natural_label",
                  filter: [
                    "all",
                    ["==", ["get", "class"], "landform"],
                    ["match", ["get", "maki"], ["mountain", "volcano"], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      11,
                      18,
                      14,
                    ],
                    "icon-image": ["concat", ["get", "maki"], "-15"],
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-offset": [0, 0.65],
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(100, 100%, 20%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "mountain-peak-label-with-elevation",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "natural_label",
                  filter: [
                    "all",
                    ["==", ["get", "class"], "landform"],
                    [">", ["get", "elevation_m"], 0],
                    ["match", ["get", "maki"], ["mountain", "volcano"], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      11,
                      18,
                      14,
                    ],
                    "icon-image": ["concat", ["get", "maki"], "-15"],
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-offset": [0, 0.65],
                    "text-anchor": "top",
                    "text-field": [
                      "concat",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                      ", ",
                      ["get", "elevation_m"],
                      "m",
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(100, 100%, 20%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "poi-scalerank2",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933358918.2366" },
                  source: "composite",
                  "source-layer": "poi_label",
                  filter: [
                    "all",
                    ["==", ["get", "filterrank"], 2],
                    [
                      "match",
                      ["get", "maki"],
                      [
                        "campsite",
                        "cemetery",
                        "dog-park",
                        "garden",
                        "golf",
                        "park",
                        "picnic-site",
                        "playground",
                        "zoo",
                      ],
                      !1,
                      !0,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      14,
                      11,
                      20,
                      14,
                    ],
                    "icon-image": [
                      "step",
                      ["zoom"],
                      [
                        "concat",
                        [
                          "match",
                          ["get", "maki"],
                          [
                            "american-football",
                            "basketball",
                            "beach",
                            "bowling-alley",
                            "bridge",
                            "car-rental",
                            "car-repair",
                            "casino",
                            "charging-station",
                            "communications-tower",
                            "confectionery",
                            "convenience",
                            "farm",
                            "fitness-centre",
                            "furniture",
                            "globe",
                            "hardware",
                            "horse-riding",
                            "jewelry-store",
                            "mobile-phone",
                            "optician",
                            "parking",
                            "parking-garage",
                            "pitch",
                            "ranger-station",
                            "religious-buddhist",
                            "restaurant-noodle",
                            "restaurant-pizza",
                            "restaurant-seafood",
                            "shoe",
                            "skateboard",
                            "slipway",
                            "stadium",
                            "suitcase",
                            "table-tennis",
                            "tennis",
                            "viewpoint",
                            "volleyball",
                            "watch",
                            "watermill",
                            "windmill",
                          ],
                          "marker",
                          ["get", "maki"],
                        ],
                        "-11",
                      ],
                      15,
                      [
                        "concat",
                        [
                          "match",
                          ["get", "maki"],
                          [
                            "american-football",
                            "basketball",
                            "beach",
                            "bowling-alley",
                            "bridge",
                            "car-rental",
                            "car-repair",
                            "casino",
                            "charging-station",
                            "communications-tower",
                            "confectionery",
                            "convenience",
                            "farm",
                            "fitness-centre",
                            "furniture",
                            "globe",
                            "hardware",
                            "horse-riding",
                            "jewelry-store",
                            "mobile-phone",
                            "optician",
                            "parking",
                            "parking-garage",
                            "pitch",
                            "ranger-station",
                            "religious-buddhist",
                            "restaurant-noodle",
                            "restaurant-pizza",
                            "restaurant-seafood",
                            "shoe",
                            "skateboard",
                            "slipway",
                            "stadium",
                            "suitcase",
                            "table-tennis",
                            "tennis",
                            "viewpoint",
                            "volleyball",
                            "watch",
                            "watermill",
                            "windmill",
                          ],
                          "marker",
                          ["get", "maki"],
                        ],
                        "-15",
                      ],
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(25, 25%, 32%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "poi-parks-scalerank2",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933358918.2366" },
                  source: "composite",
                  "source-layer": "poi_label",
                  filter: [
                    "all",
                    ["==", ["get", "filterrank"], 2],
                    [
                      "match",
                      ["get", "maki"],
                      [
                        "campsite",
                        "cemetery",
                        "dog-park",
                        "garden",
                        "golf",
                        "park",
                        "picnic-site",
                        "playground",
                        "zoo",
                      ],
                      !0,
                      !1,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      14,
                      11,
                      20,
                      14,
                    ],
                    "icon-image": [
                      "step",
                      ["zoom"],
                      [
                        "concat",
                        [
                          "match",
                          ["get", "maki"],
                          [
                            "american-football",
                            "basketball",
                            "beach",
                            "bowling-alley",
                            "bridge",
                            "car-rental",
                            "car-repair",
                            "casino",
                            "charging-station",
                            "communications-tower",
                            "confectionery",
                            "convenience",
                            "farm",
                            "fitness-centre",
                            "furniture",
                            "globe",
                            "hardware",
                            "horse-riding",
                            "jewelry-store",
                            "mobile-phone",
                            "optician",
                            "parking",
                            "parking-garage",
                            "pitch",
                            "ranger-station",
                            "religious-buddhist",
                            "restaurant-noodle",
                            "restaurant-pizza",
                            "restaurant-seafood",
                            "shoe",
                            "skateboard",
                            "slipway",
                            "stadium",
                            "suitcase",
                            "table-tennis",
                            "tennis",
                            "viewpoint",
                            "volleyball",
                            "watch",
                            "watermill",
                            "windmill",
                          ],
                          "marker",
                          ["get", "maki"],
                        ],
                        "-11",
                      ],
                      15,
                      [
                        "concat",
                        [
                          "match",
                          ["get", "maki"],
                          [
                            "american-football",
                            "basketball",
                            "beach",
                            "bowling-alley",
                            "bridge",
                            "car-rental",
                            "car-repair",
                            "casino",
                            "charging-station",
                            "communications-tower",
                            "confectionery",
                            "convenience",
                            "farm",
                            "fitness-centre",
                            "furniture",
                            "globe",
                            "hardware",
                            "horse-riding",
                            "jewelry-store",
                            "mobile-phone",
                            "optician",
                            "parking",
                            "parking-garage",
                            "pitch",
                            "ranger-station",
                            "religious-buddhist",
                            "restaurant-noodle",
                            "restaurant-pizza",
                            "restaurant-seafood",
                            "shoe",
                            "skateboard",
                            "slipway",
                            "stadium",
                            "suitcase",
                            "table-tennis",
                            "tennis",
                            "viewpoint",
                            "volleyball",
                            "watch",
                            "watermill",
                            "windmill",
                          ],
                          "marker",
                          ["get", "maki"],
                        ],
                        "-15",
                      ],
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(100, 100%, 20%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "rail-label",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "transit_stop_label",
                  minzoom: 12,
                  filter: [
                    "all",
                    ["!=", ["get", "maki"], "entrance"],
                    [
                      "match",
                      ["get", "maki"],
                      ["bus", "ferry", "bicycle-share"],
                      !1,
                      !0,
                    ],
                    [
                      "step",
                      ["zoom"],
                      ["!=", ["get", "stop_type"], "entrance"],
                      17,
                      ["!=", ["get", "stop_type"], "entrance"],
                      19,
                      !0,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      11,
                      20,
                      13,
                    ],
                    "icon-image": ["to-string", ["get", "network"]],
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-offset": [0, 0.85],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "step",
                      ["zoom"],
                      "",
                      13,
                      [
                        "to-string",
                        ["coalesce", ["get", "name_en"], ["get", "name"]],
                      ],
                    ],
                    "text-letter-spacing": 0.01,
                    "icon-padding": 0,
                    "text-max-width": 7,
                  },
                  paint: {
                    "text-color": "hsl(230, 48%, 44%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "icon-halo-width": 4,
                    "icon-halo-color": "#fff",
                    "text-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13.99,
                      0,
                      14,
                      1,
                    ],
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "water-label-sm",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933808272.805" },
                  source: "composite",
                  "source-layer": "natural_label",
                  minzoom: 15,
                  filter: [
                    "all",
                    [">=", ["get", "sizerank"], 13],
                    ["match", ["get", "class"], ["reservoir", "water"], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-font": [
                      "DIN Offc Pro Italic",
                      "Arial Unicode MS Regular",
                    ],
                    "text-max-width": 7,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      16,
                      13,
                      20,
                      16,
                    ],
                  },
                  paint: { "text-color": "hsl(230, 48%, 44%)" },
                },
                {
                  id: "water-label",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933808272.805" },
                  source: "composite",
                  "source-layer": "natural_label",
                  minzoom: 5,
                  filter: [
                    "all",
                    ["<", ["get", "sizerank"], 13],
                    ["match", ["get", "class"], ["reservoir", "water"], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-font": [
                      "DIN Offc Pro Italic",
                      "Arial Unicode MS Regular",
                    ],
                    "text-max-width": 7,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      13,
                      13,
                      18,
                      18,
                    ],
                  },
                  paint: { "text-color": "hsl(230, 48%, 44%)" },
                },
                {
                  id: "poi-parks-scalerank1",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933322393.2852" },
                  source: "composite",
                  "source-layer": "poi_label",
                  filter: [
                    "all",
                    ["<=", ["get", "filterrank"], 1],
                    [
                      "match",
                      ["get", "maki"],
                      [
                        "campsite",
                        "cemetery",
                        "dog-park",
                        "garden",
                        "golf",
                        "park",
                        "picnic-site",
                        "playground",
                        "zoo",
                      ],
                      !0,
                      !1,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      11,
                      18,
                      14,
                    ],
                    "icon-image": [
                      "step",
                      ["zoom"],
                      [
                        "concat",
                        [
                          "match",
                          ["get", "maki"],
                          [
                            "american-football",
                            "basketball",
                            "beach",
                            "bowling-alley",
                            "bridge",
                            "car-rental",
                            "car-repair",
                            "casino",
                            "charging-station",
                            "communications-tower",
                            "confectionery",
                            "convenience",
                            "farm",
                            "fitness-centre",
                            "furniture",
                            "globe",
                            "hardware",
                            "horse-riding",
                            "jewelry-store",
                            "mobile-phone",
                            "optician",
                            "parking",
                            "parking-garage",
                            "pitch",
                            "ranger-station",
                            "religious-buddhist",
                            "restaurant-noodle",
                            "restaurant-pizza",
                            "restaurant-seafood",
                            "shoe",
                            "skateboard",
                            "slipway",
                            "stadium",
                            "suitcase",
                            "table-tennis",
                            "tennis",
                            "viewpoint",
                            "volleyball",
                            "watch",
                            "watermill",
                            "windmill",
                          ],
                          "marker",
                          ["get", "maki"],
                        ],
                        "-11",
                      ],
                      14,
                      [
                        "concat",
                        [
                          "match",
                          ["get", "maki"],
                          [
                            "american-football",
                            "basketball",
                            "beach",
                            "bowling-alley",
                            "bridge",
                            "car-rental",
                            "car-repair",
                            "casino",
                            "charging-station",
                            "communications-tower",
                            "confectionery",
                            "convenience",
                            "farm",
                            "fitness-centre",
                            "furniture",
                            "globe",
                            "hardware",
                            "horse-riding",
                            "jewelry-store",
                            "mobile-phone",
                            "optician",
                            "parking",
                            "parking-garage",
                            "pitch",
                            "ranger-station",
                            "religious-buddhist",
                            "restaurant-noodle",
                            "restaurant-pizza",
                            "restaurant-seafood",
                            "shoe",
                            "skateboard",
                            "slipway",
                            "stadium",
                            "suitcase",
                            "table-tennis",
                            "tennis",
                            "viewpoint",
                            "volleyball",
                            "watch",
                            "watermill",
                            "windmill",
                          ],
                          "marker",
                          ["get", "maki"],
                        ],
                        "-15",
                      ],
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(100, 100%, 20%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "poi-scalerank1",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444933322393.2852" },
                  source: "composite",
                  "source-layer": "poi_label",
                  filter: [
                    "all",
                    ["<=", ["get", "filterrank"], 1],
                    [
                      "match",
                      ["get", "maki"],
                      [
                        "campsite",
                        "cemetery",
                        "dog-park",
                        "garden",
                        "golf",
                        "park",
                        "picnic-site",
                        "playground",
                        "zoo",
                      ],
                      !1,
                      !0,
                    ],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      11,
                      18,
                      14,
                    ],
                    "icon-image": [
                      "step",
                      ["zoom"],
                      [
                        "concat",
                        [
                          "match",
                          ["get", "maki"],
                          [
                            "american-football",
                            "basketball",
                            "beach",
                            "bowling-alley",
                            "bridge",
                            "car-rental",
                            "car-repair",
                            "casino",
                            "charging-station",
                            "communications-tower",
                            "confectionery",
                            "convenience",
                            "farm",
                            "fitness-centre",
                            "furniture",
                            "globe",
                            "hardware",
                            "horse-riding",
                            "jewelry-store",
                            "mobile-phone",
                            "optician",
                            "parking",
                            "parking-garage",
                            "pitch",
                            "ranger-station",
                            "religious-buddhist",
                            "restaurant-noodle",
                            "restaurant-pizza",
                            "restaurant-seafood",
                            "shoe",
                            "skateboard",
                            "slipway",
                            "stadium",
                            "suitcase",
                            "table-tennis",
                            "tennis",
                            "viewpoint",
                            "volleyball",
                            "watch",
                            "watermill",
                            "windmill",
                          ],
                          "marker",
                          ["get", "maki"],
                        ],
                        "-11",
                      ],
                      14,
                      [
                        "concat",
                        [
                          "match",
                          ["get", "maki"],
                          [
                            "american-football",
                            "basketball",
                            "beach",
                            "bowling-alley",
                            "bridge",
                            "car-rental",
                            "car-repair",
                            "casino",
                            "charging-station",
                            "communications-tower",
                            "confectionery",
                            "convenience",
                            "farm",
                            "fitness-centre",
                            "furniture",
                            "globe",
                            "hardware",
                            "horse-riding",
                            "jewelry-store",
                            "mobile-phone",
                            "optician",
                            "parking",
                            "parking-garage",
                            "pitch",
                            "ranger-station",
                            "religious-buddhist",
                            "restaurant-noodle",
                            "restaurant-pizza",
                            "restaurant-seafood",
                            "shoe",
                            "skateboard",
                            "slipway",
                            "stadium",
                            "suitcase",
                            "table-tennis",
                            "tennis",
                            "viewpoint",
                            "volleyball",
                            "watch",
                            "watermill",
                            "windmill",
                          ],
                          "marker",
                          ["get", "maki"],
                        ],
                        "-15",
                      ],
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0.65],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(25, 25%, 32%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "airport-label",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "airport_label",
                  minzoom: 9,
                  filter: [
                    "all",
                    ["<=", ["get", "sizerank"], 14],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      12,
                      18,
                      18,
                    ],
                    "icon-image": [
                      "step",
                      ["zoom"],
                      ["concat", ["get", "maki"], "-11"],
                      13,
                      ["concat", ["get", "maki"], "-15"],
                    ],
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0.75],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                      "step",
                      ["zoom"],
                      ["to-string", ["get", "ref"]],
                      12,
                      [
                        "to-string",
                        ["coalesce", ["get", "name_en"], ["get", "name"]],
                      ],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 9,
                  },
                  paint: {
                    "text-color": "hsl(230, 48%, 44%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "place-islet-archipelago-aboriginal",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "natural_label",
                  maxzoom: 16,
                  filter: [
                    "all",
                    ["==", ["get", "maki"], "marker"],
                    [
                      "match",
                      ["get", "class"],
                      ["aboriginal_lands", "landform"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-line-height": 1.2,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      11,
                      18,
                      16,
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0],
                    "text-rotation-alignment": "viewport",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(230, 29%, 35%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                  },
                },
                {
                  id: "place-islet-archipelago-aboriginal-2",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "place_label",
                  maxzoom: 16,
                  filter: [
                    "all",
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    [
                      "match",
                      ["get", "type"],
                      ["aboriginal_lands", "archipelago", "islet"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-line-height": 1.2,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      11,
                      18,
                      16,
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0],
                    "text-rotation-alignment": "viewport",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 8,
                  },
                  paint: {
                    "text-color": "hsl(230, 29%, 35%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                  },
                },
                {
                  id: "place-neighbourhood",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 10,
                  maxzoom: 16,
                  filter: [
                    "all",
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    [
                      "match",
                      ["get", "type"],
                      ["neighbourhood", "quarter"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-transform": "uppercase",
                    "text-letter-spacing": 0.1,
                    "text-max-width": 7,
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 3,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      12,
                      11,
                      16,
                      16,
                    ],
                  },
                  paint: {
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                    "text-color": "hsl(230, 29%, 35%)",
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "place-suburb",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 10,
                  maxzoom: 16,
                  filter: [
                    "all",
                    ["==", ["get", "type"], "suburb"],
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-transform": "uppercase",
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "text-letter-spacing": 0.15,
                    "text-max-width": 7,
                    "text-padding": 3,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      11,
                      11,
                      15,
                      18,
                    ],
                  },
                  paint: {
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                    "text-color": "hsl(230, 29%, 35%)",
                    "text-halo-blur": 0.5,
                  },
                },
                {
                  id: "place-hamlet",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 10,
                  maxzoom: 16,
                  filter: [
                    "all",
                    ["==", ["get", "type"], "hamlet"],
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      12,
                      11.5,
                      15,
                      16,
                    ],
                  },
                  paint: {
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1.25,
                    "text-color": "hsl(0, 0%, 0%)",
                  },
                },
                {
                  id: "place-village",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 8,
                  maxzoom: 15,
                  filter: [
                    "all",
                    ["==", ["get", "type"], "village"],
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "text-max-width": 7,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      11.5,
                      16,
                      18,
                    ],
                  },
                  paint: {
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1.25,
                    "text-color": "hsl(0, 0%, 0%)",
                  },
                },
                {
                  id: "place-town",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 6,
                  maxzoom: 15,
                  filter: [
                    "all",
                    ["==", ["get", "type"], "town"],
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "icon-image": "dot-9",
                    "text-font": [
                      "step",
                      ["zoom"],
                      [
                        "literal",
                        ["DIN Offc Pro Regular", "Arial Unicode MS Regular"],
                      ],
                      12,
                      [
                        "literal",
                        ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
                      ],
                    ],
                    "text-offset": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7,
                      ["literal", [0, -0.15]],
                      8,
                      ["literal", [0, 0]],
                    ],
                    "text-anchor": ["step", ["zoom"], "bottom", 8, "center"],
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-max-width": 7,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7,
                      11.5,
                      15,
                      20,
                    ],
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1.25,
                    "icon-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      1,
                      8,
                      0,
                    ],
                  },
                },
                {
                  id: "place-island",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "natural_label",
                  maxzoom: 16,
                  filter: [
                    "all",
                    ["==", ["get", "class"], "landform"],
                    ["==", ["get", "maki"], "marker"],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-line-height": 1.2,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      11,
                      18,
                      16,
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0],
                    "text-rotation-alignment": "viewport",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 7,
                  },
                  paint: {
                    "text-color": "hsl(230, 29%, 35%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                  },
                },
                {
                  id: "place-island-2",
                  type: "symbol",
                  source: "composite",
                  "source-layer": "place_label",
                  maxzoom: 16,
                  filter: [
                    "all",
                    ["==", ["get", "type"], "island"],
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-line-height": 1.2,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      10,
                      11,
                      18,
                      16,
                    ],
                    "text-max-angle": 38,
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Regular",
                      "Arial Unicode MS Regular",
                    ],
                    "text-padding": 2,
                    "text-offset": [0, 0],
                    "text-rotation-alignment": "viewport",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 7,
                  },
                  paint: {
                    "text-color": "hsl(230, 29%, 35%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                  },
                },
                {
                  id: "place-city-sm",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444862510685.128" },
                  source: "composite",
                  "source-layer": "place_label",
                  maxzoom: 14,
                  filter: [
                    "all",
                    ["==", ["get", "type"], "city"],
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    [
                      "match",
                      ["get", "symbolrank"],
                      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                      !1,
                      !0,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      6,
                      12,
                      14,
                      22,
                    ],
                    "icon-image": "dot-9",
                    "text-font": [
                      "step",
                      ["zoom"],
                      [
                        "literal",
                        ["DIN Offc Pro Regular", "Arial Unicode MS Regular"],
                      ],
                      8,
                      [
                        "literal",
                        ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
                      ],
                    ],
                    "text-offset": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      ["literal", [0, -0.2]],
                      8,
                      ["literal", [0, 0]],
                    ],
                    "text-anchor": ["step", ["zoom"], "bottom", 8, "center"],
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-max-width": 7,
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1.25,
                    "icon-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      1,
                      8,
                      0,
                    ],
                  },
                },
                {
                  id: "place-city-md-s",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444862510685.128" },
                  source: "composite",
                  "source-layer": "place_label",
                  maxzoom: 14,
                  filter: [
                    "all",
                    ["==", ["get", "type"], "city"],
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "symbolrank"], [9, 10, 11], !0, !1],
                    [
                      "match",
                      ["get", "text_anchor"],
                      ["right", "top", "top-right", "top-left"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "icon-image": "dot-10",
                    "text-anchor": ["step", ["zoom"], "top", 8, "center"],
                    "text-offset": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      ["literal", [0, 0.1]],
                      8,
                      ["literal", [0, 0]],
                    ],
                    "text-font": [
                      "step",
                      ["zoom"],
                      [
                        "literal",
                        ["DIN Offc Pro Regular", "Arial Unicode MS Regular"],
                      ],
                      8,
                      [
                        "literal",
                        ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
                      ],
                    ],
                    "text-size": [
                      "interpolate",
                      ["exponential", 0.9],
                      ["zoom"],
                      5,
                      12,
                      12,
                      22,
                    ],
                  },
                  paint: {
                    "text-halo-width": 1,
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-blur": 1,
                    "icon-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      1,
                      8,
                      0,
                    ],
                  },
                },
                {
                  id: "place-city-md-n",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444862510685.128" },
                  source: "composite",
                  "source-layer": "place_label",
                  maxzoom: 14,
                  filter: [
                    "all",
                    ["==", ["get", "type"], "city"],
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "symbolrank"], [9, 10, 11], !0, !1],
                    [
                      "match",
                      ["get", "text_anchor"],
                      ["bottom", "bottom-right", "bottom-left", "left"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "icon-image": "dot-10",
                    "text-font": [
                      "step",
                      ["zoom"],
                      [
                        "literal",
                        ["DIN Offc Pro Regular", "Arial Unicode MS Regular"],
                      ],
                      8,
                      [
                        "literal",
                        ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
                      ],
                    ],
                    "text-offset": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      ["literal", [0, -0.25]],
                      8,
                      ["literal", [0, 0]],
                    ],
                    "text-anchor": ["step", ["zoom"], "bottom", 8, "center"],
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-max-width": 7,
                    "text-size": [
                      "interpolate",
                      ["exponential", 0.9],
                      ["zoom"],
                      5,
                      12,
                      12,
                      22,
                    ],
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                    "icon-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      1,
                      8,
                      0,
                    ],
                    "text-halo-blur": 1,
                  },
                },
                {
                  id: "place-city-lg-s",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444862510685.128" },
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 1,
                  maxzoom: 14,
                  filter: [
                    "all",
                    ["<=", ["get", "symbolrank"], 8],
                    ["==", ["get", "type"], "city"],
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    [
                      "match",
                      ["get", "text_anchor"],
                      ["right", "top", "top-right", "top-left"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "icon-image": "dot-11",
                    "text-font": [
                      "step",
                      ["zoom"],
                      [
                        "literal",
                        ["DIN Offc Pro Regular", "Arial Unicode MS Regular"],
                      ],
                      8,
                      [
                        "literal",
                        ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
                      ],
                    ],
                    "text-offset": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      ["literal", [0, 0.15]],
                      8,
                      ["literal", [0, 0]],
                    ],
                    "text-anchor": ["step", ["zoom"], "top", 8, "center"],
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-max-width": 7,
                    "text-size": [
                      "interpolate",
                      ["exponential", 0.9],
                      ["zoom"],
                      4,
                      12,
                      10,
                      22,
                    ],
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                    "icon-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      1,
                      8,
                      0,
                    ],
                    "text-halo-blur": 1,
                  },
                },
                {
                  id: "place-city-lg-n",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444862510685.128" },
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 1,
                  maxzoom: 14,
                  filter: [
                    "all",
                    ["<=", ["get", "symbolrank"], 8],
                    ["==", ["get", "type"], "city"],
                    [
                      "match",
                      ["get", "class"],
                      ["settlement", "settlement_subdivision"],
                      !0,
                      !1,
                    ],
                    [
                      "match",
                      ["get", "text_anchor"],
                      ["bottom", "bottom-right", "bottom-left", "left"],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "icon-image": "dot-11",
                    "text-font": [
                      "step",
                      ["zoom"],
                      [
                        "literal",
                        ["DIN Offc Pro Regular", "Arial Unicode MS Regular"],
                      ],
                      8,
                      [
                        "literal",
                        ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
                      ],
                    ],
                    "text-offset": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      ["literal", [0, -0.25]],
                      8,
                      ["literal", [0, 0]],
                    ],
                    "text-anchor": ["step", ["zoom"], "bottom", 8, "center"],
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-max-width": 7,
                    "text-size": [
                      "interpolate",
                      ["exponential", 0.9],
                      ["zoom"],
                      4,
                      12,
                      10,
                      22,
                    ],
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-opacity": 1,
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                    "icon-opacity": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      7.99,
                      1,
                      8,
                      0,
                    ],
                    "text-halo-blur": 1,
                  },
                },
                {
                  id: "marine-label-sm-ln",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856087950.3635" },
                  source: "composite",
                  "source-layer": "natural_label",
                  minzoom: 3,
                  maxzoom: 10,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    [">=", ["get", "sizerank"], 7],
                    ["match", ["get", "class"], ["ocean", "sea"], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      3,
                      12,
                      6,
                      16,
                    ],
                    "symbol-spacing": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      4,
                      100,
                      6,
                      400,
                    ],
                    "text-font": [
                      "DIN Offc Pro Italic",
                      "Arial Unicode MS Regular",
                    ],
                    "symbol-placement": "line",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.1,
                    "text-max-width": 5,
                  },
                  paint: { "text-color": "hsl(205, 83%, 88%)" },
                },
                {
                  id: "marine-label-sm-pt",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856087950.3635" },
                  source: "composite",
                  "source-layer": "natural_label",
                  minzoom: 3,
                  maxzoom: 10,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "Point"],
                    [">=", ["get", "sizerank"], 7],
                    ["match", ["get", "class"], ["ocean", "sea"], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-max-width": 5,
                    "text-letter-spacing": 0.1,
                    "text-line-height": 1.5,
                    "text-font": [
                      "DIN Offc Pro Italic",
                      "Arial Unicode MS Regular",
                    ],
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      3,
                      12,
                      6,
                      16,
                    ],
                  },
                  paint: { "text-color": "hsl(205, 83%, 88%)" },
                },
                {
                  id: "marine-label-md-ln",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856087950.3635" },
                  source: "composite",
                  "source-layer": "natural_label",
                  minzoom: 2,
                  maxzoom: 8,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    ["match", ["get", "class"], ["ocean", "sea"], !0, !1],
                    ["match", ["get", "sizerank"], [3, 4, 5, 6], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-line-height": 1.1,
                    "text-size": [
                      "interpolate",
                      ["exponential", 1.1],
                      ["zoom"],
                      2,
                      12,
                      5,
                      20,
                    ],
                    "symbol-spacing": 250,
                    "text-font": [
                      "DIN Offc Pro Italic",
                      "Arial Unicode MS Regular",
                    ],
                    "symbol-placement": "line",
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-letter-spacing": 0.15,
                    "text-max-width": 5,
                  },
                  paint: { "text-color": "hsl(205, 83%, 88%)" },
                },
                {
                  id: "marine-label-md-pt",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856087950.3635" },
                  source: "composite",
                  "source-layer": "natural_label",
                  minzoom: 2,
                  maxzoom: 8,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "Point"],
                    ["match", ["get", "class"], ["ocean", "sea"], !0, !1],
                    ["match", ["get", "sizerank"], [3, 4, 5, 6], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-max-width": 5,
                    "text-letter-spacing": 0.15,
                    "text-line-height": 1.5,
                    "text-font": [
                      "DIN Offc Pro Italic",
                      "Arial Unicode MS Regular",
                    ],
                    "text-size": [
                      "interpolate",
                      ["exponential", 1.1],
                      ["zoom"],
                      2,
                      14,
                      5,
                      20,
                    ],
                  },
                  paint: { "text-color": "hsl(205, 83%, 88%)" },
                },
                {
                  id: "marine-label-lg-ln",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856087950.3635" },
                  source: "composite",
                  "source-layer": "natural_label",
                  minzoom: 1,
                  maxzoom: 4,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    ["match", ["get", "class"], ["ocean", "sea"], !0, !1],
                    ["match", ["get", "sizerank"], [1, 2], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-max-width": 4,
                    "text-letter-spacing": 0.25,
                    "text-line-height": 1.1,
                    "symbol-placement": "line",
                    "text-font": [
                      "DIN Offc Pro Italic",
                      "Arial Unicode MS Regular",
                    ],
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      1,
                      14,
                      4,
                      30,
                    ],
                  },
                  paint: { "text-color": "hsl(205, 83%, 88%)" },
                },
                {
                  id: "marine-label-lg-pt",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856087950.3635" },
                  source: "composite",
                  "source-layer": "natural_label",
                  minzoom: 1,
                  maxzoom: 4,
                  filter: [
                    "all",
                    ["==", ["geometry-type"], "Point"],
                    ["match", ["get", "class"], ["ocean", "sea"], !0, !1],
                    ["match", ["get", "sizerank"], [1, 2], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "to-string",
                      ["coalesce", ["get", "name_en"], ["get", "name"]],
                    ],
                    "text-max-width": 4,
                    "text-letter-spacing": 0.25,
                    "text-line-height": 1.5,
                    "text-font": [
                      "DIN Offc Pro Italic",
                      "Arial Unicode MS Regular",
                    ],
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      1,
                      14,
                      4,
                      30,
                    ],
                  },
                  paint: { "text-color": "hsl(205, 83%, 88%)" },
                },
                {
                  id: "state-label-sm",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856151690.9143" },
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 3,
                  maxzoom: 9,
                  filter: [
                    "all",
                    ["==", ["get", "class"], "state"],
                    [">", ["get", "symbolrank"], 6],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      6,
                      10,
                      9,
                      14,
                    ],
                    "text-transform": "uppercase",
                    "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                    "text-field": [
                      "step",
                      ["zoom"],
                      ["to-string", ["get", "abbr"]],
                      6,
                      [
                        "to-string",
                        ["coalesce", ["get", "name_en"], ["get", "name"]],
                      ],
                    ],
                    "text-letter-spacing": 0.15,
                    "text-max-width": 5,
                  },
                  paint: {
                    "text-opacity": 1,
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                  },
                },
                {
                  id: "state-label-md",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856151690.9143" },
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 3,
                  maxzoom: 8,
                  filter: [
                    "all",
                    ["<=", ["get", "symbolrank"], 6],
                    ["==", ["get", "class"], "state"],
                    [">", ["get", "symbolrank"], 5],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      5,
                      10,
                      8,
                      16,
                    ],
                    "text-transform": "uppercase",
                    "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                    "text-field": [
                      "step",
                      ["zoom"],
                      ["to-string", ["get", "abbr"]],
                      5,
                      [
                        "to-string",
                        ["coalesce", ["get", "name_en"], ["get", "name"]],
                      ],
                    ],
                    "text-letter-spacing": 0.15,
                    "text-max-width": 6,
                  },
                  paint: {
                    "text-opacity": 1,
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                  },
                },
                {
                  id: "state-label-lg",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856151690.9143" },
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 3,
                  maxzoom: 7,
                  filter: [
                    "all",
                    ["<=", ["get", "symbolrank"], 5],
                    ["==", ["get", "class"], "state"],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      4,
                      10,
                      7,
                      18,
                    ],
                    "text-transform": "uppercase",
                    "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                    "text-padding": 1,
                    "text-field": [
                      "step",
                      ["zoom"],
                      ["to-string", ["get", "abbr"]],
                      4,
                      [
                        "to-string",
                        ["coalesce", ["get", "name_en"], ["get", "name"]],
                      ],
                    ],
                    "text-letter-spacing": 0.15,
                    "text-max-width": 6,
                  },
                  paint: {
                    "text-opacity": 1,
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": "hsl(0, 0%, 100%)",
                    "text-halo-width": 1,
                  },
                },
                {
                  id: "country-label-sm",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856144497.7825" },
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 1,
                  maxzoom: 10,
                  filter: [
                    "all",
                    ["==", ["get", "class"], "country"],
                    [">=", ["get", "symbolrank"], 13],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": ["to-string", ["get", "name_en"]],
                    "text-max-width": 6,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-size": [
                      "interpolate",
                      ["exponential", 0.9],
                      ["zoom"],
                      5,
                      14,
                      9,
                      22,
                    ],
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      2,
                      "rgba(255,255,255,0.75)",
                      3,
                      "hsl(0, 0%, 100%)",
                    ],
                    "text-halo-width": 1.25,
                  },
                },
                {
                  id: "country-label-md",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856144497.7825" },
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 1,
                  maxzoom: 8,
                  filter: [
                    "all",
                    ["==", ["get", "class"], "country"],
                    [
                      "match",
                      ["get", "symbolrank"],
                      [4, 5, 6, 7, 8, 9, 10, 11, 12],
                      !0,
                      !1,
                    ],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": [
                      "step",
                      ["zoom"],
                      ["to-string", ["get", "iso_3166_1"]],
                      2,
                      ["to-string", ["get", "name_en"]],
                    ],
                    "text-max-width": 6,
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      3,
                      10,
                      8,
                      24,
                    ],
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      2,
                      "rgba(255,255,255,0.75)",
                      3,
                      "hsl(0, 0%, 100%)",
                    ],
                    "text-halo-width": 1.25,
                  },
                },
                {
                  id: "country-label-lg",
                  type: "symbol",
                  metadata: { "mapbox:group": "1444856144497.7825" },
                  source: "composite",
                  "source-layer": "place_label",
                  minzoom: 1,
                  maxzoom: 7,
                  filter: [
                    "all",
                    ["==", ["get", "class"], "country"],
                    ["match", ["get", "symbolrank"], [1, 2, 3], !0, !1],
                    ["match", ["get", "worldview"], ["all", "US"], !0, !1],
                  ],
                  layout: {
                    "text-field": ["to-string", ["get", "name_en"]],
                    "text-max-width": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      0,
                      5,
                      3,
                      6,
                    ],
                    "text-font": [
                      "DIN Offc Pro Medium",
                      "Arial Unicode MS Regular",
                    ],
                    "text-size": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      1,
                      10,
                      6,
                      24,
                    ],
                  },
                  paint: {
                    "text-color": "hsl(0, 0%, 0%)",
                    "text-halo-color": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      2,
                      "rgba(255,255,255,0.75)",
                      3,
                      "hsl(0, 0%, 100%)",
                    ],
                    "text-halo-width": 1.25,
                  },
                },
              ],
              created: "2023-07-13T09:18:29.339Z",
              modified: "2023-07-13T09:19:12.603Z",
              id: "clk0xtryz00au01qy6lxsdk9s",
              owner: "sam-savill",
              visibility: "public",
              protected: !1,
              draft: !1,
            },
          ]);
        }
      }
      i(40), i(356), i(9);
      (window.bannerScrollingContent = () => ({
        visible: !1,
        slider: null,
        sliderContainer: null,
        slides: [],
        translate: 0,
        progressContainer: 0,
        progressBar: null,
        progress: 0,
        sliderFullWidth: 0,
        slideChange: !1,
        init() {
          (this.sliderContainer = this.$refs.bannerScroller),
            (this.slider =
              this.sliderContainer.querySelector(".banner-slider")),
            (this.slides = this.slider.querySelectorAll(".slide")),
            this.slides.forEach((e) => {
              e.classList.contains("active") ||
                (window.outerWidth > 768 && this.minimizeSlide(e));
            }),
            no.onResizeFinished(() => {
              window.outerWidth < 768
                ? this.initFlickity()
                : (this.getTranslate(),
                  this.slides.forEach((e) => {
                    e.classList.contains("active") ||
                      (window.outerWidth > 768 && this.minimizeSlide(e));
                  }));
            }, !0);
        },
        initFlickity() {
          (this.sliderContainer = this.$el.querySelector(
            ".banner-slider-mobile"
          )),
            (this.progressContainer = this.$el.querySelector(
              ".Post__Grid__Slider-nav .bg-bar"
            )),
            (this.progressBar = this.$el.querySelector(
              ".Post__Grid__Slider-nav .progress-bar"
            ));
          const e = this;
          let t = {
              cellAlign: "right",
              contain: !0,
              draggable: !0,
              pageDots: !1,
              prevNextButtons: !1,
              imageLoaded: !0,
              wrapAround: !1,
              adaptiveHeight: !1,
              freeScroll: !0,
              on: {
                ready: function () {
                  setTimeout(() => {
                    e.sliderResize();
                  }, 300);
                },
                scroll: function (t, i) {
                  (e.progress = (Math.abs(this.x) / e.sliderFullWidth) * 100),
                    (e.progressBar.style.width =
                      e.progressContainer.offsetWidth * (e.progress / 100) +
                      "px");
                },
              },
            },
            i = {};
          (i = no.extend(t, i)),
            (this.slider = new (ao())(this.sliderContainer, i));
        },
        sliderResize(e) {
          const t = document.querySelectorAll(
            ".banner-slider-mobile .flickity-slider"
          );
          (this.sliderFullWidth = 0),
            t.forEach((e) => {
              const t = e.querySelectorAll(".slide");
              let i = 0;
              t.forEach((e) => {
                (e.style.height = ""),
                  (this.sliderFullWidth += e.offsetWidth),
                  e.offsetHeight > i && (i = e.offsetHeight);
              }),
                t.forEach((e) => {
                  e.style.height = i + "px";
                }),
                (e.style.height = ""),
                (e.style.height = i + "px");
            });
        },
        nextSlide() {
          if (this.slideChange) return;
          this.slideChange = !0;
          const e = this.slider.querySelector(".slide.active"),
            t = e.nextElementSibling,
            i = this.slider.querySelector(".slide:first-child");
          this.slides.forEach((e) => {
            e.classList.contains("active") && e.classList.remove("active");
          }),
            this.slider.classList.add("slideable");
          const o = this.translate - this.getSlideHeight(i);
          this.minimizeSlide(e),
            this.activateSlide(t),
            (this.slider.style.transform = "translateY(" + o + "px)"),
            setTimeout(() => {
              this.cloneSlide(i, "end"),
                i.remove(),
                this.slider.classList.remove("slideable"),
                (this.slider.style.transform =
                  "translateY(" + this.translate + "px)"),
                (this.currentSlide = 0),
                (this.slideChange = !1);
            }, 300);
        },
        prevSlide() {
          if (this.slideChange) return;
          this.slideChange = !0;
          const e = this.slider.querySelector(".slide.active"),
            t = e.previousElementSibling,
            i = this.slider.querySelector(".slide:last-child");
          this.slides.forEach((e) => {
            e.classList.contains("active") && e.classList.remove("active");
          }),
            this.minimizeSlide(e),
            this.activateSlide(t);
          const o = this.translate + this.getSlideHeight(i);
          this.slider.classList.add("slideable"),
            (this.slider.style.transform = "translateY(" + o + "px)"),
            setTimeout(() => {
              this.cloneSlide(i, "beginning"),
                i.remove(),
                this.slider.classList.remove("slideable"),
                (this.slider.style.transform =
                  "translateY(" + this.translate + "px)"),
                (this.slideChange = !1);
            }, 300);
        },
        cloneSlide(e, t = "beginning") {
          if (e.classList.contains("active")) return;
          const i = e.cloneNode(!0),
            o = e.querySelector("[data-pegasus-modal-id]");
          i.querySelector("[data-pegasus-modal-id]").replaceWith(o),
            i.classList.add("opacity-0"),
            "beginning" === t
              ? this.slider.prepend(i)
              : this.slider.appendChild(i),
            setTimeout(() => {
              i.classList.remove("opacity-0");
            }, 10),
            (this.slides = this.slider.querySelectorAll(".slide"));
        },
        minimizeSlide(e) {
          e.classList.add("minimized");
          e.querySelector(".slide-content").style.maxHeight = "0px";
        },
        activateSlide(e) {
          e.classList.remove("minimized"), e.classList.add("active");
          const t = e.querySelector(".slide-content"),
            i = t.querySelector(".slide-content__inner");
          t.style.maxHeight = i.offsetHeight + "px";
        },
        getSlideHeight(e, t = !0) {
          let i = window.getComputedStyle(e),
            o = parseFloat(i.marginTop) + parseFloat(i.marginBottom);
          return Math.ceil(e.offsetHeight + o);
        },
        getTranslate() {
          if (window.outerWidth < 768)
            return (
              (this.translate = 0),
              void (this.slider.style.transform =
                "translateY(" + this.translate + "px)")
            );
          const e = this.sliderContainer.offsetHeight,
            t = this.slider.offsetHeight;
          let i = document.querySelectorAll(
            ".Banner-Scrolling-Content__right-item"
          )[0].offsetHeight;
          (this.translate = t > e ? -Math.abs(t - e - i) / 2 : (e - t - i) / 2),
            (this.slider.style.transform =
              "translateY(" + this.translate + "px)");
        },
      })),
        (window.bannerTeamSlider = (e) => ({
          sliderContainer: null,
          slider: null,
          currentSlide: 0,
          sliderEnd: !1,
          sliderFullWidth: 0,
          isSelected: null,
          tags: [],
          currentFilter: null,
          visible: !1,
          isPaused: !1,
          tickerSpeed: 1,
          init() {
            this.initSlider(), this.eventListeners();
          },
          initSlider() {
            (this.sliderContainer = this.$refs.bannerTeamSlider),
              (this.tickerSpeed = 0.3);
            const t = this;
            let i = {
                groupCells: !0,
                cellAlign: "left",
                contain: !0,
                draggable: !0,
                pageDots: !1,
                prevNextButtons: !1,
                imageLoaded: !0,
                wrapAround: !0,
                adaptiveHeight: !1,
                freeScroll: !0,
                on: {
                  ready: function () {
                    window.dispatchEvent(new Event("resize")),
                      t.sliderResize(this);
                  },
                },
              },
              o = {};
            void 0 !== e && 0 !== e && (o.autoPlay = 1e3 * e),
              (o = no.extend(i, o)),
              (this.slider = new (ao())(this.sliderContainer, o)),
              no.onResizeFinished(() => {
                this.sliderResize();
              }, !1);
            const n = () => {
                this.isPaused ||
                  (this.slider.slides &&
                    ((this.slider.x =
                      (this.slider.x - this.tickerSpeed) %
                      this.slider.slideableWidth),
                    (this.slider.selectedIndex =
                      this.slider.dragEndRestingSelect()),
                    this.slider.updateSelectedSlide(),
                    this.slider.settle(this.slider.x)),
                  window.requestAnimationFrame(n));
              },
              r = () => {
                this.isPaused = !0;
              },
              l = () => {
                this.isPaused &&
                  ((this.isPaused = !1), window.requestAnimationFrame(n));
              };
            (this.slider = new (ao())(this.sliderContainer, o)),
              (this.slider.x = 0),
              this.sliderContainer.addEventListener("mouseenter", r, !1),
              this.sliderContainer.addEventListener("focusin", r, !1),
              this.sliderContainer.addEventListener("mouseleave", l, !1),
              this.sliderContainer.addEventListener("focusout", l, !1),
              n();
          },
          buildUrl() {
            let e =
                window.location.protocol +
                "//" +
                window.location.hostname +
                window.location.pathname +
                "?",
              t = 1;
            for (const [i, o] of Object.entries(this.currentFilters))
              (e += `${i}=${o}`),
                t < Object.keys(this.currentFilters).length && (e += "&"),
                t++;
            return e;
          },
          sliderResize(e) {
            const t = document.querySelectorAll(
              ".Banner-Scrolling-Content__left-team .flickity-slider"
            );
            (this.sliderFullWidth = 0),
              t.forEach((e) => {
                const t = e.querySelectorAll(".Team-Slider__slide");
                let i = 0;
                t.forEach((e) => {
                  (e.style.height = ""),
                    (this.sliderFullWidth += e.offsetWidth),
                    e.offsetHeight > i && (i = e.offsetHeight);
                }),
                  t.forEach((e) => {
                    e.style.height = i + "px";
                  }),
                  (e.style.height = ""),
                  (e.style.height = i + "px");
              });
          },
          eventListeners() {
            this.slider.on("change", (e) => {
              this.currentSlide = e;
            }),
              this.slider.on("scroll", (e) => {
                this.sliderEnd = e.toFixed(2) >= 1;
              });
          },
        }));
      i(984), i(598), i(226), i(464);
      function co(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function uo(e = {}, t = {}) {
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : co(t[i]) &&
              co(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              uo(e[i], t[i]);
        });
      }
      (window.contactForm = () => ({
        contactForm: null,
        contactFormScrollTo: null,
        init() {
          (this.contactForm = document.querySelector(".wpcf7")),
            (this.contactFormScrollTo = document.querySelector(
              ".Contact-Form__scroll-to"
            )),
            this.handleRadioButtonClick(),
            this.handlePhoneInput(),
            this.handleInputFocus(),
            this.handleNextStepButtonClick(),
            this.handleBackButtonClick(),
            this.handleSubmitButtonClick(),
            this.handleScrollButtonClick();
        },
        handleRadioButtonClick() {
          let e = document.querySelectorAll(".gfield_radio .gform-field-label");
          e.forEach((t) => {
            t.addEventListener("click", function () {
              e.forEach((e) => e.classList.remove("radio--active")),
                this.classList.add("radio--active");
            });
          });
        },
        handlePhoneInput() {
          document
            .querySelector('input[type="tel"]')
            .addEventListener("input", function () {
              !(function (e) {
                let t = e.value.replace(/\D/g, "");
                t.length > 3 && (t = t.substring(0, 3) + "-" + t.substring(3));
                t.length > 7 && (t = t.substring(0, 7) + "-" + t.substring(7));
                t.length > 12 && (t = t.substring(0, 12));
                e.value = t;
              })(this);
            });
        },
        handleInputFocus() {
          const e = document.querySelectorAll(
            'input[type="text"], input[type="email"], input[type="tel"], textarea'
          );
          e.forEach((t) => {
            t.addEventListener("focus", () => {
              e.forEach((e) => {
                "" === e.value &&
                  e
                    .closest(".field-container")
                    .classList.remove("field-container--focused");
              }),
                t
                  .closest(".field-container")
                  .classList.add("field-container--focused");
            });
          }),
            e.forEach((e) => {
              e.addEventListener("blur", () => {
                "" === e.value &&
                  e
                    .closest(".field-container")
                    .classList.remove("field-container--focused");
              });
            });
        },
        handleNextStep() {
          const e = document.querySelector(".Contact-Form__step--active");
          e.nextElementSibling.classList.add("Contact-Form__step--active"),
            e.classList.remove("Contact-Form__step--active");
        },
        handleNextStepButtonClick() {
          document
            .querySelector(".button-next")
            .addEventListener("click", () => {
              this.handleNextStep();
              document
                .querySelector(".Contact-Form__step--active")
                .querySelector(
                  'input[type="text"], input[type="email"], input[type="tel"], textarea'
                )
                .focus();
            });
        },
        handleBackButtonClick() {
          document
            .querySelector(".button-back")
            .addEventListener("click", () => {
              const e = document.querySelector(".Contact-Form__step--active");
              e.previousElementSibling.classList.add(
                "Contact-Form__step--active"
              ),
                e.classList.remove("Contact-Form__step--active");
            });
        },
        handleSubmitButtonClick() {
          const e = document.querySelector(".wpcf7-submit"),
            t = document.querySelector(".Contact-Form__spinner-wrap");
          e.addEventListener("click", () => {
            t.classList.add("Contact-Form__spinner-wrap--active"),
              this.contactForm.addEventListener(
                "wpcf7invalid",
                () => {
                  t.classList.remove("Contact-Form__spinner-wrap--active");
                },
                !1
              ),
              this.contactForm.addEventListener(
                "wpcf7mailsent",
                () => {
                  t.classList.remove("Contact-Form__spinner-wrap--active"),
                    this.handleNextStep(),
                    setTimeout(() => {
                      this.handleDisplayFirstStep();
                    }, 5e3);
                },
                !1
              );
          });
        },
        handleScrollButtonClick() {
          this.contactFormScrollTo &&
            this.contactFormScrollTo.addEventListener("click", (e) => {
              e.preventDefault();
              const t = document.getElementById(
                e.currentTarget.getAttribute("href").replace("#", "")
              );
              no.scroll(t);
            });
        },
      })),
        (window.jobApplicationForm = () => ({
          fileUploadField: null,
          init() {
            (this.fileUploadField =
              this.$el.querySelector('input[type="file"]')),
              this.createUploadLabel(),
              this.fileUploadField.addEventListener("change", (e) => {
                this.updateUploadLabel(e);
              });
          },
          createUploadLabel() {
            const e = document.createElement("label"),
              t = this.fileUploadField.getAttribute("id"),
              i = this.$root.querySelector(".ginput_container_fileupload");
            e.setAttribute("for", t),
              (e.textContent = "Choose a file"),
              i.appendChild(e);
          },
          updateUploadLabel(e) {
            const t = this.$root.querySelectorAll(
              'label[for="' + this.fileUploadField.getAttribute("id") + '"]'
            )[1];
            e.target.files.length > 0
              ? (t.innerHTML = e.target.files[0].name)
              : (t.innerHTML = "Choose a file");
          },
        }));
      const po = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function ho() {
        const e = "undefined" != typeof document ? document : {};
        return uo(e, po), e;
      }
      const mo = {
        document: po,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function go() {
        const e = "undefined" != typeof window ? window : {};
        return uo(e, mo), e;
      }
      function fo(e, t = 0) {
        return setTimeout(e, t);
      }
      function yo() {
        return Date.now();
      }
      function vo(e, t = "x") {
        const i = go();
        let o, n, r;
        const l = (function (e) {
          const t = go();
          let i;
          return (
            t.getComputedStyle && (i = t.getComputedStyle(e, null)),
            !i && e.currentStyle && (i = e.currentStyle),
            i || (i = e.style),
            i
          );
        })(e);
        return (
          i.WebKitCSSMatrix
            ? ((n = l.transform || l.webkitTransform),
              n.split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((r =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (o = r.toString().split(","))),
          "x" === t &&
            (n = i.WebKitCSSMatrix
              ? r.m41
              : 16 === o.length
              ? parseFloat(o[12])
              : parseFloat(o[4])),
          "y" === t &&
            (n = i.WebKitCSSMatrix
              ? r.m42
              : 16 === o.length
              ? parseFloat(o[13])
              : parseFloat(o[5])),
          n || 0
        );
      }
      function xo(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function bo(...e) {
        const t = Object(e[0]),
          i = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < e.length; n += 1) {
          const r = e[n];
          if (
            null != r &&
            ((o = r),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? o instanceof HTMLElement
              : o && (1 === o.nodeType || 11 === o.nodeType)))
          ) {
            const e = Object.keys(Object(r)).filter((e) => i.indexOf(e) < 0);
            for (let i = 0, o = e.length; i < o; i += 1) {
              const o = e[i],
                n = Object.getOwnPropertyDescriptor(r, o);
              void 0 !== n &&
                n.enumerable &&
                (xo(t[o]) && xo(r[o])
                  ? r[o].__swiper__
                    ? (t[o] = r[o])
                    : bo(t[o], r[o])
                  : !xo(t[o]) && xo(r[o])
                  ? ((t[o] = {}),
                    r[o].__swiper__ ? (t[o] = r[o]) : bo(t[o], r[o]))
                  : (t[o] = r[o]));
            }
          }
        }
        var o;
        return t;
      }
      function wo(e, t, i) {
        e.style.setProperty(t, i);
      }
      function _o({ swiper: e, targetPosition: t, side: i }) {
        const o = go(),
          n = -e.translate;
        let r,
          l = null;
        const a = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = "none"),
          o.cancelAnimationFrame(e.cssModeFrameID);
        const s = t > n ? "next" : "prev",
          c = (e, t) => ("next" === s && e >= t) || ("prev" === s && e <= t),
          d = () => {
            (r = new Date().getTime()), null === l && (l = r);
            const s = Math.max(Math.min((r - l) / a, 1), 0),
              u = 0.5 - Math.cos(s * Math.PI) / 2;
            let p = n + u * (t - n);
            if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [i]: p }), c(p, t)))
              return (
                (e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ""),
                    e.wrapperEl.scrollTo({ [i]: p });
                }),
                void o.cancelAnimationFrame(e.cssModeFrameID)
              );
            e.cssModeFrameID = o.requestAnimationFrame(d);
          };
        d();
      }
      function So(e, t = "") {
        return [...e.children].filter((e) => e.matches(t));
      }
      function zo(e, t) {
        return go().getComputedStyle(e, null).getPropertyValue(t);
      }
      function ko(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function Eo(e, t, i) {
        const o = go();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                o
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                o
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      let Co, Lo, To;
      function Mo() {
        return (
          Co ||
            (Co = (function () {
              const e = go(),
                t = ho();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          Co
        );
      }
      function Ao(e = {}) {
        return (
          Lo ||
            (Lo = (function ({ userAgent: e } = {}) {
              const t = Mo(),
                i = go(),
                o = i.navigator.platform,
                n = e || i.navigator.userAgent,
                r = { ios: !1, android: !1 },
                l = i.screen.width,
                a = i.screen.height,
                s = n.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = n.match(/(iPad).*OS\s([\d_]+)/);
              const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === o;
              let h = "MacIntel" === o;
              return (
                !c &&
                  h &&
                  t.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${l}x${a}`) >= 0 &&
                  ((c = n.match(/(Version)\/([\d.]+)/)),
                  c || (c = [0, 1, "13_0_0"]),
                  (h = !1)),
                s && !p && ((r.os = "android"), (r.android = !0)),
                (c || u || d) && ((r.os = "ios"), (r.ios = !0)),
                r
              );
            })(e)),
          Lo
        );
      }
      function Po() {
        return (
          To ||
            (To = (function () {
              const e = go();
              let t = !1;
              function i() {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              }
              if (i()) {
                const i = String(e.navigator.userAgent);
                if (i.includes("Version/")) {
                  const [e, o] = i
                    .split("Version/")[1]
                    .split(" ")[0]
                    .split(".")
                    .map((e) => Number(e));
                  t = e < 16 || (16 === e && o < 2);
                }
              }
              return {
                isSafari: t || i(),
                needPerspectiveFix: t,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          To
        );
      }
      const Io = {
        on(e, t, i) {
          const o = this;
          if (!o.eventsListeners || o.destroyed) return o;
          if ("function" != typeof t) return o;
          const n = i ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              o.eventsListeners[e] || (o.eventsListeners[e] = []),
                o.eventsListeners[e][n](t);
            }),
            o
          );
        },
        once(e, t, i) {
          const o = this;
          if (!o.eventsListeners || o.destroyed) return o;
          if ("function" != typeof t) return o;
          function n(...i) {
            o.off(e, n),
              n.__emitterProxy && delete n.__emitterProxy,
              t.apply(o, i);
          }
          return (n.__emitterProxy = t), o.on(e, n, i);
        },
        onAny(e, t) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof e) return i;
          const o = t ? "unshift" : "push";
          return (
            i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[o](e), i
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const i = t.eventsAnyListeners.indexOf(e);
          return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
        },
        off(e, t) {
          const i = this;
          return !i.eventsListeners || i.destroyed
            ? i
            : i.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach((o, n) => {
                      (o === t ||
                        (o.__emitterProxy && o.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(n, 1);
                    });
              }),
              i)
            : i;
        },
        emit(...e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsListeners) return t;
          let i, o, n;
          "string" == typeof e[0] || Array.isArray(e[0])
            ? ((i = e[0]), (o = e.slice(1, e.length)), (n = t))
            : ((i = e[0].events), (o = e[0].data), (n = e[0].context || t)),
            o.unshift(n);
          return (
            (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(n, [e, ...o]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(n, o);
                  });
            }),
            t
          );
        },
      };
      const Oo = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const i = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (i) {
            const t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            t && t.remove();
          }
        },
        Do = (e, t) => {
          if (!e.slides[t]) return;
          const i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading");
        },
        jo = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          const o =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            n = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const i = n,
              r = [i - t];
            return (
              r.push(...Array.from({ length: t }).map((e, t) => i + o + t)),
              void e.slides.forEach((t, i) => {
                r.includes(t.column) && Do(e, i);
              })
            );
          }
          const r = n + o - 1;
          if (e.params.rewind || e.params.loop)
            for (let o = n - t; o <= r + t; o += 1) {
              const t = ((o % i) + i) % i;
              (t < n || t > r) && Do(e, t);
            }
          else
            for (
              let o = Math.max(n - t, 0);
              o <= Math.min(r + t, i - 1);
              o += 1
            )
              o !== n && (o > r || o < n) && Do(e, o);
        };
      const Fo = {
        updateSize: function () {
          const e = this;
          let t, i;
          const o = e.el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : o.clientWidth),
            (i =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : o.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === i && e.isVertical()) ||
              ((t =
                t -
                parseInt(zo(o, "padding-left") || 0, 10) -
                parseInt(zo(o, "padding-right") || 0, 10)),
              (i =
                i -
                parseInt(zo(o, "padding-top") || 0, 10) -
                parseInt(zo(o, "padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(i) && (i = 0),
              Object.assign(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function i(e, i) {
            return parseFloat(e.getPropertyValue(t(i)) || 0);
          }
          const o = e.params,
            {
              wrapperEl: n,
              slidesEl: r,
              size: l,
              rtlTranslate: a,
              wrongRTL: s,
            } = e,
            c = e.virtual && o.virtual.enabled,
            d = c ? e.virtual.slides.length : e.slides.length,
            u = So(r, `.${e.params.slideClass}, swiper-slide`),
            p = c ? e.virtual.slides.length : u.length;
          let h = [];
          const m = [],
            g = [];
          let f = o.slidesOffsetBefore;
          "function" == typeof f && (f = o.slidesOffsetBefore.call(e));
          let y = o.slidesOffsetAfter;
          "function" == typeof y && (y = o.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            x = e.slidesGrid.length;
          let b = o.spaceBetween,
            w = -f,
            _ = 0,
            S = 0;
          if (void 0 === l) return;
          "string" == typeof b && b.indexOf("%") >= 0
            ? (b = (parseFloat(b.replace("%", "")) / 100) * l)
            : "string" == typeof b && (b = parseFloat(b)),
            (e.virtualSize = -b),
            u.forEach((e) => {
              a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                (e.style.marginBottom = ""),
                (e.style.marginTop = "");
            }),
            o.centeredSlides &&
              o.cssMode &&
              (wo(n, "--swiper-centered-offset-before", ""),
              wo(n, "--swiper-centered-offset-after", ""));
          const z = o.grid && o.grid.rows > 1 && e.grid;
          let k;
          z && e.grid.initSlides(p);
          const E =
            "auto" === o.slidesPerView &&
            o.breakpoints &&
            Object.keys(o.breakpoints).filter(
              (e) => void 0 !== o.breakpoints[e].slidesPerView
            ).length > 0;
          for (let n = 0; n < p; n += 1) {
            let r;
            if (
              ((k = 0),
              u[n] && (r = u[n]),
              z && e.grid.updateSlide(n, r, p, t),
              !u[n] || "none" !== zo(r, "display"))
            ) {
              if ("auto" === o.slidesPerView) {
                E && (u[n].style[t("width")] = "");
                const l = getComputedStyle(r),
                  a = r.style.transform,
                  s = r.style.webkitTransform;
                if (
                  (a && (r.style.transform = "none"),
                  s && (r.style.webkitTransform = "none"),
                  o.roundLengths)
                )
                  k = e.isHorizontal()
                    ? Eo(r, "width", !0)
                    : Eo(r, "height", !0);
                else {
                  const e = i(l, "width"),
                    t = i(l, "padding-left"),
                    o = i(l, "padding-right"),
                    n = i(l, "margin-left"),
                    a = i(l, "margin-right"),
                    s = l.getPropertyValue("box-sizing");
                  if (s && "border-box" === s) k = e + n + a;
                  else {
                    const { clientWidth: i, offsetWidth: l } = r;
                    k = e + t + o + n + a + (l - i);
                  }
                }
                a && (r.style.transform = a),
                  s && (r.style.webkitTransform = s),
                  o.roundLengths && (k = Math.floor(k));
              } else
                (k = (l - (o.slidesPerView - 1) * b) / o.slidesPerView),
                  o.roundLengths && (k = Math.floor(k)),
                  u[n] && (u[n].style[t("width")] = `${k}px`);
              u[n] && (u[n].swiperSlideSize = k),
                g.push(k),
                o.centeredSlides
                  ? ((w = w + k / 2 + _ / 2 + b),
                    0 === _ && 0 !== n && (w = w - l / 2 - b),
                    0 === n && (w = w - l / 2 - b),
                    Math.abs(w) < 0.001 && (w = 0),
                    o.roundLengths && (w = Math.floor(w)),
                    S % o.slidesPerGroup == 0 && h.push(w),
                    m.push(w))
                  : (o.roundLengths && (w = Math.floor(w)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ==
                      0 && h.push(w),
                    m.push(w),
                    (w = w + k + b)),
                (e.virtualSize += k + b),
                (_ = k),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, l) + y),
            a &&
              s &&
              ("slide" === o.effect || "coverflow" === o.effect) &&
              (n.style.width = `${e.virtualSize + b}px`),
            o.setWrapperSize &&
              (n.style[t("width")] = `${e.virtualSize + b}px`),
            z && e.grid.updateWrapperSize(k, h, t),
            !o.centeredSlides)
          ) {
            const t = [];
            for (let i = 0; i < h.length; i += 1) {
              let n = h[i];
              o.roundLengths && (n = Math.floor(n)),
                h[i] <= e.virtualSize - l && t.push(n);
            }
            (h = t),
              Math.floor(e.virtualSize - l) - Math.floor(h[h.length - 1]) > 1 &&
                h.push(e.virtualSize - l);
          }
          if (c && o.loop) {
            const t = g[0] + b;
            if (o.slidesPerGroup > 1) {
              const i = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                    o.slidesPerGroup
                ),
                n = t * o.slidesPerGroup;
              for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + n);
            }
            for (
              let i = 0;
              i < e.virtual.slidesBefore + e.virtual.slidesAfter;
              i += 1
            )
              1 === o.slidesPerGroup && h.push(h[h.length - 1] + t),
                m.push(m[m.length - 1] + t),
                (e.virtualSize += t);
          }
          if ((0 === h.length && (h = [0]), 0 !== b)) {
            const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
            u.filter(
              (e, t) => !(o.cssMode && !o.loop) || t !== u.length - 1
            ).forEach((e) => {
              e.style[i] = `${b}px`;
            });
          }
          if (o.centeredSlides && o.centeredSlidesBounds) {
            let e = 0;
            g.forEach((t) => {
              e += t + (b || 0);
            }),
              (e -= b);
            const t = e - l;
            h = h.map((e) => (e <= 0 ? -f : e > t ? t + y : e));
          }
          if (o.centerInsufficientSlides) {
            let e = 0;
            if (
              (g.forEach((t) => {
                e += t + (b || 0);
              }),
              (e -= b),
              e < l)
            ) {
              const t = (l - e) / 2;
              h.forEach((e, i) => {
                h[i] = e - t;
              }),
                m.forEach((e, i) => {
                  m[i] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: u,
              snapGrid: h,
              slidesGrid: m,
              slidesSizesGrid: g,
            }),
            o.centeredSlides && o.cssMode && !o.centeredSlidesBounds)
          ) {
            wo(n, "--swiper-centered-offset-before", -h[0] + "px"),
              wo(
                n,
                "--swiper-centered-offset-after",
                e.size / 2 - g[g.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              i = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + i));
          }
          if (
            (p !== d && e.emit("slidesLengthChange"),
            h.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            m.length !== x && e.emit("slidesGridLengthChange"),
            o.watchSlidesProgress && e.updateSlidesOffset(),
            !(c || o.cssMode || ("slide" !== o.effect && "fade" !== o.effect)))
          ) {
            const t = `${o.containerModifierClass}backface-hidden`,
              i = e.el.classList.contains(t);
            p <= o.maxBackfaceHiddenSlides
              ? i || e.el.classList.add(t)
              : i && e.el.classList.remove(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            i = [],
            o = t.virtual && t.params.virtual.enabled;
          let n,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const l = (e) =>
            o ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach((e) => {
                i.push(e);
              });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !o) break;
                i.push(l(e));
              }
          else i.push(l(t.activeIndex));
          for (n = 0; n < i.length; n += 1)
            if (void 0 !== i[n]) {
              const e = i[n].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            i = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0;
          for (let o = 0; o < t.length; o += 1)
            t[o].swiperSlideOffset =
              (e.isHorizontal() ? t[o].offsetLeft : t[o].offsetTop) -
              i -
              e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            i = t.params,
            { slides: o, rtlTranslate: n, snapGrid: r } = t;
          if (0 === o.length) return;
          void 0 === o[0].swiperSlideOffset && t.updateSlidesOffset();
          let l = -e;
          n && (l = e),
            o.forEach((e) => {
              e.classList.remove(i.slideVisibleClass);
            }),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          let a = i.spaceBetween;
          "string" == typeof a && a.indexOf("%") >= 0
            ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
            : "string" == typeof a && (a = parseFloat(a));
          for (let e = 0; e < o.length; e += 1) {
            const s = o[e];
            let c = s.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (c -= o[0].swiperSlideOffset);
            const d =
                (l + (i.centeredSlides ? t.minTranslate() : 0) - c) /
                (s.swiperSlideSize + a),
              u =
                (l - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) /
                (s.swiperSlideSize + a),
              p = -(l - c),
              h = p + t.slidesSizesGrid[e];
            ((p >= 0 && p < t.size - 1) ||
              (h > 1 && h <= t.size) ||
              (p <= 0 && h >= t.size)) &&
              (t.visibleSlides.push(s),
              t.visibleSlidesIndexes.push(e),
              o[e].classList.add(i.slideVisibleClass)),
              (s.progress = n ? -d : d),
              (s.originalProgress = n ? -u : u);
          }
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const i = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * i) || 0;
          }
          const i = t.params,
            o = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: r, isEnd: l, progressLoop: a } = t;
          const s = r,
            c = l;
          if (0 === o) (n = 0), (r = !0), (l = !0);
          else {
            n = (e - t.minTranslate()) / o;
            const i = Math.abs(e - t.minTranslate()) < 1,
              a = Math.abs(e - t.maxTranslate()) < 1;
            (r = i || n <= 0), (l = a || n >= 1), i && (n = 0), a && (n = 1);
          }
          if (i.loop) {
            const i = t.getSlideIndexByData(0),
              o = t.getSlideIndexByData(t.slides.length - 1),
              n = t.slidesGrid[i],
              r = t.slidesGrid[o],
              l = t.slidesGrid[t.slidesGrid.length - 1],
              s = Math.abs(e);
            (a = s >= n ? (s - n) / l : (s + l - r) / l), a > 1 && (a -= 1);
          }
          Object.assign(t, {
            progress: n,
            progressLoop: a,
            isBeginning: r,
            isEnd: l,
          }),
            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !s && t.emit("reachBeginning toEdge"),
            l && !c && t.emit("reachEnd toEdge"),
            ((s && !r) || (c && !l)) && t.emit("fromEdge"),
            t.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: i, slidesEl: o, activeIndex: n } = e,
            r = e.virtual && i.virtual.enabled,
            l = (e) => So(o, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
          let a;
          if (
            (t.forEach((e) => {
              e.classList.remove(
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              );
            }),
            r)
          )
            if (i.loop) {
              let t = n - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (a = l(`[data-swiper-slide-index="${t}"]`));
            } else a = l(`[data-swiper-slide-index="${n}"]`);
          else a = t[n];
          if (a) {
            a.classList.add(i.slideActiveClass);
            let e = (function (e, t) {
              const i = [];
              for (; e.nextElementSibling; ) {
                const o = e.nextElementSibling;
                t ? o.matches(t) && i.push(o) : i.push(o), (e = o);
              }
              return i;
            })(a, `.${i.slideClass}, swiper-slide`)[0];
            i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
            let o = (function (e, t) {
              const i = [];
              for (; e.previousElementSibling; ) {
                const o = e.previousElementSibling;
                t ? o.matches(t) && i.push(o) : i.push(o), (e = o);
              }
              return i;
            })(a, `.${i.slideClass}, swiper-slide`)[0];
            i.loop && 0 === !o && (o = t[t.length - 1]),
              o && o.classList.add(i.slidePrevClass);
          }
          e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            i = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: o,
              params: n,
              activeIndex: r,
              realIndex: l,
              snapIndex: a,
            } = t;
          let s,
            c = e;
          const d = (e) => {
            let i = e - t.virtual.slidesBefore;
            return (
              i < 0 && (i = t.virtual.slides.length + i),
              i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
              i
            );
          };
          if (
            (void 0 === c &&
              (c = (function (e) {
                const { slidesGrid: t, params: i } = e,
                  o = e.rtlTranslate ? e.translate : -e.translate;
                let n;
                for (let e = 0; e < t.length; e += 1)
                  void 0 !== t[e + 1]
                    ? o >= t[e] && o < t[e + 1] - (t[e + 1] - t[e]) / 2
                      ? (n = e)
                      : o >= t[e] && o < t[e + 1] && (n = e + 1)
                    : o >= t[e] && (n = e);
                return (
                  i.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
                );
              })(t)),
            o.indexOf(i) >= 0)
          )
            s = o.indexOf(i);
          else {
            const e = Math.min(n.slidesPerGroupSkip, c);
            s = e + Math.floor((c - e) / n.slidesPerGroup);
          }
          if ((s >= o.length && (s = o.length - 1), c === r))
            return (
              s !== a && ((t.snapIndex = s), t.emit("snapIndexChange")),
              void (
                t.params.loop &&
                t.virtual &&
                t.params.virtual.enabled &&
                (t.realIndex = d(c))
              )
            );
          let u;
          (u =
            t.virtual && n.virtual.enabled && n.loop
              ? d(c)
              : t.slides[c]
              ? parseInt(
                  t.slides[c].getAttribute("data-swiper-slide-index") || c,
                  10
                )
              : c),
            Object.assign(t, {
              previousSnapIndex: a,
              snapIndex: s,
              previousRealIndex: l,
              realIndex: u,
              previousIndex: r,
              activeIndex: c,
            }),
            t.initialized && jo(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            l !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            i = t.params,
            o = e.closest(`.${i.slideClass}, swiper-slide`);
          let n,
            r = !1;
          if (o)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === o) {
                (r = !0), (n = e);
                break;
              }
          if (!o || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = o),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  o.getAttribute("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = n),
            i.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const No = {
        getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
          const {
            params: t,
            rtlTranslate: i,
            translate: o,
            wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return i ? -o : o;
          if (t.cssMode) return o;
          let r = vo(n, e);
          return (r += this.cssOverflowAdjustment()), i && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          const i = this,
            { rtlTranslate: o, params: n, wrapperEl: r, progress: l } = i;
          let a,
            s = 0,
            c = 0;
          i.isHorizontal() ? (s = o ? -e : e) : (c = e),
            n.roundLengths && ((s = Math.floor(s)), (c = Math.floor(c))),
            (i.previousTranslate = i.translate),
            (i.translate = i.isHorizontal() ? s : c),
            n.cssMode
              ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  i.isHorizontal() ? -s : -c)
              : n.virtualTranslate ||
                (i.isHorizontal()
                  ? (s -= i.cssOverflowAdjustment())
                  : (c -= i.cssOverflowAdjustment()),
                (r.style.transform = `translate3d(${s}px, ${c}px, 0px)`));
          const d = i.maxTranslate() - i.minTranslate();
          (a = 0 === d ? 0 : (e - i.minTranslate()) / d),
            a !== l && i.updateProgress(e),
            i.emit("setTranslate", i.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (
          e = 0,
          t = this.params.speed,
          i = !0,
          o = !0,
          n
        ) {
          const r = this,
            { params: l, wrapperEl: a } = r;
          if (r.animating && l.preventInteractionOnTransition) return !1;
          const s = r.minTranslate(),
            c = r.maxTranslate();
          let d;
          if (
            ((d = o && e > s ? s : o && e < c ? c : e),
            r.updateProgress(d),
            l.cssMode)
          ) {
            const e = r.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!r.support.smoothScroll)
                return (
                  _o({
                    swiper: r,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(d),
                i &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(d),
                i &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.wrapperEl.removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        i && r.emit("transitionEnd"));
                    }),
                  r.wrapperEl.addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Ro({ swiper: e, runCallbacks: t, direction: i, step: o }) {
        const { activeIndex: n, previousIndex: r } = e;
        let l = i;
        if (
          (l || (l = n > r ? "next" : n < r ? "prev" : "reset"),
          e.emit(`transition${o}`),
          t && n !== r)
        ) {
          if ("reset" === l) return void e.emit(`slideResetTransition${o}`);
          e.emit(`slideChangeTransition${o}`),
            "next" === l
              ? e.emit(`slideNextTransition${o}`)
              : e.emit(`slidePrevTransition${o}`);
        }
      }
      const Bo = {
        slideTo: function (e = 0, t = this.params.speed, i = !0, o, n) {
          "string" == typeof e && (e = parseInt(e, 10));
          const r = this;
          let l = e;
          l < 0 && (l = 0);
          const {
            params: a,
            snapGrid: s,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: m,
          } = r;
          if (
            (r.animating && a.preventInteractionOnTransition) ||
            (!m && !o && !n)
          )
            return !1;
          const g = Math.min(r.params.slidesPerGroupSkip, l);
          let f = g + Math.floor((l - g) / r.params.slidesPerGroup);
          f >= s.length && (f = s.length - 1);
          const y = -s[f];
          if (a.normalizeSlideIndex)
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * y),
                i = Math.floor(100 * c[e]),
                o = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= i && t < o - (o - i) / 2
                  ? (l = e)
                  : t >= i && t < o && (l = e + 1)
                : t >= i && (l = e);
            }
          if (r.initialized && l !== u) {
            if (
              !r.allowSlideNext &&
              (p
                ? y > r.translate && y > r.minTranslate()
                : y < r.translate && y < r.minTranslate())
            )
              return !1;
            if (
              !r.allowSlidePrev &&
              y > r.translate &&
              y > r.maxTranslate() &&
              (u || 0) !== l
            )
              return !1;
          }
          let v;
          if (
            (l !== (d || 0) && i && r.emit("beforeSlideChangeStart"),
            r.updateProgress(y),
            (v = l > u ? "next" : l < u ? "prev" : "reset"),
            (p && -y === r.translate) || (!p && y === r.translate))
          )
            return (
              r.updateActiveIndex(l),
              a.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== a.effect && r.setTranslate(y),
              "reset" !== v && (r.transitionStart(i, v), r.transitionEnd(i, v)),
              !1
            );
          if (a.cssMode) {
            const e = r.isHorizontal(),
              i = p ? y : -y;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                  ? ((r._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      h[e ? "scrollLeft" : "scrollTop"] = i;
                    }))
                  : (h[e ? "scrollLeft" : "scrollTop"] = i),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._immediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  _o({
                    swiper: r,
                    targetPosition: i,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(y),
            r.updateActiveIndex(l),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, o),
            r.transitionStart(i, v),
            0 === t
              ? r.transitionEnd(i, v)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(i, v));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, i = !0, o) {
          if ("string" == typeof e) {
            e = parseInt(e, 10);
          }
          const n = this;
          let r = e;
          return (
            n.params.loop &&
              (n.virtual && n.params.virtual.enabled
                ? (r += n.virtual.slidesBefore)
                : (r = n.getSlideIndexByData(r))),
            n.slideTo(r, t, i, o)
          );
        },
        slideNext: function (e = this.params.speed, t = !0, i) {
          const o = this,
            { enabled: n, params: r, animating: l } = o;
          if (!n) return o;
          let a = r.slidesPerGroup;
          "auto" === r.slidesPerView &&
            1 === r.slidesPerGroup &&
            r.slidesPerGroupAuto &&
            (a = Math.max(o.slidesPerViewDynamic("current", !0), 1));
          const s = o.activeIndex < r.slidesPerGroupSkip ? 1 : a,
            c = o.virtual && r.virtual.enabled;
          if (r.loop) {
            if (l && !c && r.loopPreventsSliding) return !1;
            o.loopFix({ direction: "next" }),
              (o._clientLeft = o.wrapperEl.clientLeft);
          }
          return r.rewind && o.isEnd
            ? o.slideTo(0, e, t, i)
            : o.slideTo(o.activeIndex + s, e, t, i);
        },
        slidePrev: function (e = this.params.speed, t = !0, i) {
          const o = this,
            {
              params: n,
              snapGrid: r,
              slidesGrid: l,
              rtlTranslate: a,
              enabled: s,
              animating: c,
            } = o;
          if (!s) return o;
          const d = o.virtual && n.virtual.enabled;
          if (n.loop) {
            if (c && !d && n.loopPreventsSliding) return !1;
            o.loopFix({ direction: "prev" }),
              (o._clientLeft = o.wrapperEl.clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const p = u(a ? o.translate : -o.translate),
            h = r.map((e) => u(e));
          let m = r[h.indexOf(p) - 1];
          if (void 0 === m && n.cssMode) {
            let e;
            r.forEach((t, i) => {
              p >= t && (e = i);
            }),
              void 0 !== e && (m = r[e > 0 ? e - 1 : e]);
          }
          let g = 0;
          if (
            (void 0 !== m &&
              ((g = l.indexOf(m)),
              g < 0 && (g = o.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((g = g - o.slidesPerViewDynamic("previous", !0) + 1),
                (g = Math.max(g, 0)))),
            n.rewind && o.isBeginning)
          ) {
            const n =
              o.params.virtual && o.params.virtual.enabled && o.virtual
                ? o.virtual.slides.length - 1
                : o.slides.length - 1;
            return o.slideTo(n, e, t, i);
          }
          return o.slideTo(g, e, t, i);
        },
        slideReset: function (e = this.params.speed, t = !0, i) {
          return this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function (e = this.params.speed, t = !0, i, o = 0.5) {
          const n = this;
          let r = n.activeIndex;
          const l = Math.min(n.params.slidesPerGroupSkip, r),
            a = l + Math.floor((r - l) / n.params.slidesPerGroup),
            s = n.rtlTranslate ? n.translate : -n.translate;
          if (s >= n.snapGrid[a]) {
            const e = n.snapGrid[a];
            s - e > (n.snapGrid[a + 1] - e) * o &&
              (r += n.params.slidesPerGroup);
          } else {
            const e = n.snapGrid[a - 1];
            s - e <= (n.snapGrid[a] - e) * o && (r -= n.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, n.slidesGrid.length - 1)),
            n.slideTo(r, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, slidesEl: i } = e,
            o =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            r = e.clickedIndex;
          const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              e.clickedSlide.getAttribute("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - o / 2 ||
                  r > e.slides.length - e.loopedSlides + o / 2
                  ? (e.loopFix(),
                    (r = e.getSlideIndex(
                      So(i, `${l}[data-swiper-slide-index="${n}"]`)[0]
                    )),
                    fo(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - o
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    So(i, `${l}[data-swiper-slide-index="${n}"]`)[0]
                  )),
                  fo(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      };
      const $o = {
        loopCreate: function (e) {
          const t = this,
            { params: i, slidesEl: o } = t;
          if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
          So(o, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
            e.setAttribute("data-swiper-slide-index", t);
          }),
            t.loopFix({
              slideRealIndex: e,
              direction: i.centeredSlides ? void 0 : "next",
            });
        },
        loopFix: function ({
          slideRealIndex: e,
          slideTo: t = !0,
          direction: i,
          setTranslate: o,
          activeSlideIndex: n,
          byController: r,
          byMousewheel: l,
        } = {}) {
          const a = this;
          if (!a.params.loop) return;
          a.emit("beforeLoopFix");
          const {
            slides: s,
            allowSlidePrev: c,
            allowSlideNext: d,
            slidesEl: u,
            params: p,
          } = a;
          if (
            ((a.allowSlidePrev = !0),
            (a.allowSlideNext = !0),
            a.virtual && p.virtual.enabled)
          )
            return (
              t &&
                (p.centeredSlides || 0 !== a.snapIndex
                  ? p.centeredSlides && a.snapIndex < p.slidesPerView
                    ? a.slideTo(
                        a.virtual.slides.length + a.snapIndex,
                        0,
                        !1,
                        !0
                      )
                    : a.snapIndex === a.snapGrid.length - 1 &&
                      a.slideTo(a.virtual.slidesBefore, 0, !1, !0)
                  : a.slideTo(a.virtual.slides.length, 0, !1, !0)),
              (a.allowSlidePrev = c),
              (a.allowSlideNext = d),
              void a.emit("loopFix")
            );
          const h =
            "auto" === p.slidesPerView
              ? a.slidesPerViewDynamic()
              : Math.ceil(parseFloat(p.slidesPerView, 10));
          let m = p.loopedSlides || h;
          m % p.slidesPerGroup != 0 &&
            (m += p.slidesPerGroup - (m % p.slidesPerGroup)),
            (a.loopedSlides = m);
          const g = [],
            f = [];
          let y = a.activeIndex;
          void 0 === n
            ? (n = a.getSlideIndex(
                a.slides.filter((e) =>
                  e.classList.contains(p.slideActiveClass)
                )[0]
              ))
            : (y = n);
          const v = "next" === i || !i,
            x = "prev" === i || !i;
          let b = 0,
            w = 0;
          if (n < m) {
            b = Math.max(m - n, p.slidesPerGroup);
            for (let e = 0; e < m - n; e += 1) {
              const t = e - Math.floor(e / s.length) * s.length;
              g.push(s.length - t - 1);
            }
          } else if (n > a.slides.length - 2 * m) {
            w = Math.max(n - (a.slides.length - 2 * m), p.slidesPerGroup);
            for (let e = 0; e < w; e += 1) {
              const t = e - Math.floor(e / s.length) * s.length;
              f.push(t);
            }
          }
          if (
            (x &&
              g.forEach((e) => {
                (a.slides[e].swiperLoopMoveDOM = !0),
                  u.prepend(a.slides[e]),
                  (a.slides[e].swiperLoopMoveDOM = !1);
              }),
            v &&
              f.forEach((e) => {
                (a.slides[e].swiperLoopMoveDOM = !0),
                  u.append(a.slides[e]),
                  (a.slides[e].swiperLoopMoveDOM = !1);
              }),
            a.recalcSlides(),
            "auto" === p.slidesPerView && a.updateSlides(),
            p.watchSlidesProgress && a.updateSlidesOffset(),
            t)
          )
            if (g.length > 0 && x)
              if (void 0 === e) {
                const e = a.slidesGrid[y],
                  t = a.slidesGrid[y + b] - e;
                l
                  ? a.setTranslate(a.translate - t)
                  : (a.slideTo(y + b, 0, !1, !0),
                    o &&
                      (a.touches[a.isHorizontal() ? "startX" : "startY"] += t));
              } else o && a.slideToLoop(e, 0, !1, !0);
            else if (f.length > 0 && v)
              if (void 0 === e) {
                const e = a.slidesGrid[y],
                  t = a.slidesGrid[y - w] - e;
                l
                  ? a.setTranslate(a.translate - t)
                  : (a.slideTo(y - w, 0, !1, !0),
                    o &&
                      (a.touches[a.isHorizontal() ? "startX" : "startY"] += t));
              } else a.slideToLoop(e, 0, !1, !0);
          if (
            ((a.allowSlidePrev = c),
            (a.allowSlideNext = d),
            a.controller && a.controller.control && !r)
          ) {
            const t = {
              slideRealIndex: e,
              slideTo: !1,
              direction: i,
              setTranslate: o,
              activeSlideIndex: n,
              byController: !0,
            };
            Array.isArray(a.controller.control)
              ? a.controller.control.forEach((e) => {
                  !e.destroyed && e.params.loop && e.loopFix(t);
                })
              : a.controller.control instanceof a.constructor &&
                a.controller.control.params.loop &&
                a.controller.control.loopFix(t);
          }
          a.emit("loopFix");
        },
        loopDestroy: function () {
          const e = this,
            { params: t, slidesEl: i } = e;
          if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
          e.recalcSlides();
          const o = [];
          e.slides.forEach((e) => {
            const t =
              void 0 === e.swiperSlideIndex
                ? 1 * e.getAttribute("data-swiper-slide-index")
                : e.swiperSlideIndex;
            o[t] = e;
          }),
            e.slides.forEach((e) => {
              e.removeAttribute("data-swiper-slide-index");
            }),
            o.forEach((e) => {
              i.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
        },
      };
      function qo(e) {
        const t = this,
          i = ho(),
          o = go(),
          n = t.touchEventsData;
        n.evCache.push(e);
        const { params: r, touches: l, enabled: a } = t;
        if (!a) return;
        if (!r.simulateTouch && "mouse" === e.pointerType) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let s = e;
        s.originalEvent && (s = s.originalEvent);
        let c = s.target;
        if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(c))
          return;
        if ("which" in s && 3 === s.which) return;
        if ("button" in s && s.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const d = !!r.noSwipingClass && "" !== r.noSwipingClass,
          u = e.composedPath ? e.composedPath() : e.path;
        d && s.target && s.target.shadowRoot && u && (c = u[0]);
        const p = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          h = !(!s.target || !s.target.shadowRoot);
        if (
          r.noSwiping &&
          (h
            ? (function (e, t = this) {
                return (function t(i) {
                  if (!i || i === ho() || i === go()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const o = i.closest(e);
                  return o || i.getRootNode
                    ? o || t(i.getRootNode().host)
                    : null;
                })(t);
              })(p, c)
            : c.closest(p))
        )
          return void (t.allowClick = !0);
        if (r.swipeHandler && !c.closest(r.swipeHandler)) return;
        (l.currentX = s.pageX), (l.currentY = s.pageY);
        const m = l.currentX,
          g = l.currentY,
          f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (f && (m <= y || m >= o.innerWidth - y)) {
          if ("prevent" !== f) return;
          e.preventDefault();
        }
        Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (l.startX = m),
          (l.startY = g),
          (n.touchStartTime = yo()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (n.allowThresholdMove = !1);
        let v = !0;
        c.matches(n.focusableElements) &&
          ((v = !1), "SELECT" === c.nodeName && (n.isTouched = !1)),
          i.activeElement &&
            i.activeElement.matches(n.focusableElements) &&
            i.activeElement !== c &&
            i.activeElement.blur();
        const x = v && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !x) ||
          c.isContentEditable ||
          s.preventDefault(),
          r.freeMode &&
            r.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !r.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit("touchStart", s);
      }
      function Uo(e) {
        const t = ho(),
          i = this,
          o = i.touchEventsData,
          { params: n, touches: r, rtlTranslate: l, enabled: a } = i;
        if (!a) return;
        if (!n.simulateTouch && "mouse" === e.pointerType) return;
        let s = e;
        if ((s.originalEvent && (s = s.originalEvent), !o.isTouched))
          return void (
            o.startMoving &&
            o.isScrolling &&
            i.emit("touchMoveOpposite", s)
          );
        const c = o.evCache.findIndex((e) => e.pointerId === s.pointerId);
        c >= 0 && (o.evCache[c] = s);
        const d = o.evCache.length > 1 ? o.evCache[0] : s,
          u = d.pageX,
          p = d.pageY;
        if (s.preventedByNestedSwiper)
          return (r.startX = u), void (r.startY = p);
        if (!i.allowTouchMove)
          return (
            s.target.matches(o.focusableElements) || (i.allowClick = !1),
            void (
              o.isTouched &&
              (Object.assign(r, {
                startX: u,
                startY: p,
                prevX: i.touches.currentX,
                prevY: i.touches.currentY,
                currentX: u,
                currentY: p,
              }),
              (o.touchStartTime = yo()))
            )
          );
        if (n.touchReleaseOnEdges && !n.loop)
          if (i.isVertical()) {
            if (
              (p < r.startY && i.translate <= i.maxTranslate()) ||
              (p > r.startY && i.translate >= i.minTranslate())
            )
              return (o.isTouched = !1), void (o.isMoved = !1);
          } else if (
            (u < r.startX && i.translate <= i.maxTranslate()) ||
            (u > r.startX && i.translate >= i.minTranslate())
          )
            return;
        if (
          t.activeElement &&
          s.target === t.activeElement &&
          s.target.matches(o.focusableElements)
        )
          return (o.isMoved = !0), void (i.allowClick = !1);
        if (
          (o.allowTouchCallbacks && i.emit("touchMove", s),
          s.targetTouches && s.targetTouches.length > 1)
        )
          return;
        (r.currentX = u), (r.currentY = p);
        const h = r.currentX - r.startX,
          m = r.currentY - r.startY;
        if (
          i.params.threshold &&
          Math.sqrt(h ** 2 + m ** 2) < i.params.threshold
        )
          return;
        if (void 0 === o.isScrolling) {
          let e;
          (i.isHorizontal() && r.currentY === r.startY) ||
          (i.isVertical() && r.currentX === r.startX)
            ? (o.isScrolling = !1)
            : h * h + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
              (o.isScrolling = i.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (o.isScrolling && i.emit("touchMoveOpposite", s),
          void 0 === o.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (o.startMoving = !0)),
          o.isScrolling ||
            (i.zoom &&
              i.params.zoom &&
              i.params.zoom.enabled &&
              o.evCache.length > 1))
        )
          return void (o.isTouched = !1);
        if (!o.startMoving) return;
        (i.allowClick = !1),
          !n.cssMode && s.cancelable && s.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && s.stopPropagation();
        let g = i.isHorizontal() ? h : m,
          f = i.isHorizontal()
            ? r.currentX - r.previousX
            : r.currentY - r.previousY;
        n.oneWayMovement &&
          ((g = Math.abs(g) * (l ? 1 : -1)), (f = Math.abs(f) * (l ? 1 : -1))),
          (r.diff = g),
          (g *= n.touchRatio),
          l && ((g = -g), (f = -f));
        const y = i.touchesDirection;
        (i.swipeDirection = g > 0 ? "prev" : "next"),
          (i.touchesDirection = f > 0 ? "prev" : "next");
        const v = i.params.loop && !n.cssMode;
        if (!o.isMoved) {
          if (
            (v && i.loopFix({ direction: i.swipeDirection }),
            (o.startTranslate = i.getTranslate()),
            i.setTransition(0),
            i.animating)
          ) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            i.wrapperEl.dispatchEvent(e);
          }
          (o.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
              i.setGrabCursor(!0),
            i.emit("sliderFirstMove", s);
        }
        let x;
        o.isMoved &&
          y !== i.touchesDirection &&
          v &&
          Math.abs(g) >= 1 &&
          (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }),
          (x = !0)),
          i.emit("sliderMove", s),
          (o.isMoved = !0),
          (o.currentTranslate = g + o.startTranslate);
        let b = !0,
          w = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (w = 0),
          g > 0
            ? (v &&
                !x &&
                o.currentTranslate >
                  (n.centeredSlides
                    ? i.minTranslate() - i.size / 2
                    : i.minTranslate()) &&
                i.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              o.currentTranslate > i.minTranslate() &&
                ((b = !1),
                n.resistance &&
                  (o.currentTranslate =
                    i.minTranslate() -
                    1 +
                    (-i.minTranslate() + o.startTranslate + g) ** w)))
            : g < 0 &&
              (v &&
                !x &&
                o.currentTranslate <
                  (n.centeredSlides
                    ? i.maxTranslate() + i.size / 2
                    : i.maxTranslate()) &&
                i.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    i.slides.length -
                    ("auto" === n.slidesPerView
                      ? i.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(n.slidesPerView, 10))),
                }),
              o.currentTranslate < i.maxTranslate() &&
                ((b = !1),
                n.resistance &&
                  (o.currentTranslate =
                    i.maxTranslate() +
                    1 -
                    (i.maxTranslate() - o.startTranslate - g) ** w))),
          b && (s.preventedByNestedSwiper = !0),
          !i.allowSlideNext &&
            "next" === i.swipeDirection &&
            o.currentTranslate < o.startTranslate &&
            (o.currentTranslate = o.startTranslate),
          !i.allowSlidePrev &&
            "prev" === i.swipeDirection &&
            o.currentTranslate > o.startTranslate &&
            (o.currentTranslate = o.startTranslate),
          i.allowSlidePrev ||
            i.allowSlideNext ||
            (o.currentTranslate = o.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(g) > n.threshold || o.allowThresholdMove))
            return void (o.currentTranslate = o.startTranslate);
          if (!o.allowThresholdMove)
            return (
              (o.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (o.currentTranslate = o.startTranslate),
              void (r.diff = i.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
            n.watchSlidesProgress) &&
            (i.updateActiveIndex(), i.updateSlidesClasses()),
          n.freeMode &&
            n.freeMode.enabled &&
            i.freeMode &&
            i.freeMode.onTouchMove(),
          i.updateProgress(o.currentTranslate),
          i.setTranslate(o.currentTranslate));
      }
      function Wo(e) {
        const t = this,
          i = t.touchEventsData,
          o = i.evCache.findIndex((t) => t.pointerId === e.pointerId);
        if (
          (o >= 0 && i.evCache.splice(o, 1),
          ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
        ) {
          if (
            !(
              "pointercancel" === e.type &&
              (t.browser.isSafari || t.browser.isWebView)
            )
          )
            return;
        }
        const {
          params: n,
          touches: r,
          rtlTranslate: l,
          slidesGrid: a,
          enabled: s,
        } = t;
        if (!s) return;
        if (!n.simulateTouch && "mouse" === e.pointerType) return;
        let c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          i.allowTouchCallbacks && t.emit("touchEnd", c),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && n.grabCursor && t.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        n.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const d = yo(),
          u = d - i.touchStartTime;
        if (t.allowClick) {
          const e = c.path || (c.composedPath && c.composedPath());
          t.updateClickedSlide((e && e[0]) || c.target),
            t.emit("tap click", c),
            u < 300 &&
              d - i.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", c);
        }
        if (
          ((i.lastClickTime = yo()),
          fo(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !t.swipeDirection ||
            0 === r.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (
            (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
          );
        let p;
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (p = n.followFinger
            ? l
              ? t.translate
              : -t.translate
            : -i.currentTranslate),
          n.cssMode)
        )
          return;
        if (n.freeMode && n.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: p });
        let h = 0,
          m = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < a.length;
          e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
        ) {
          const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
          void 0 !== a[e + t]
            ? p >= a[e] && p < a[e + t] && ((h = e), (m = a[e + t] - a[e]))
            : p >= a[e] && ((h = e), (m = a[a.length - 1] - a[a.length - 2]));
        }
        let g = null,
          f = null;
        n.rewind &&
          (t.isBeginning
            ? (f =
                n.virtual && n.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (g = 0));
        const y = (p - a[h]) / m,
          v = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (u > n.longSwipesMs) {
          if (!n.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (y >= n.longSwipesRatio
              ? t.slideTo(n.rewind && t.isEnd ? g : h + v)
              : t.slideTo(h)),
            "prev" === t.swipeDirection &&
              (y > 1 - n.longSwipesRatio
                ? t.slideTo(h + v)
                : null !== f && y < 0 && Math.abs(y) > n.longSwipesRatio
                ? t.slideTo(f)
                : t.slideTo(h));
        } else {
          if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
            ? c.target === t.navigation.nextEl
              ? t.slideTo(h + v)
              : t.slideTo(h)
            : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + v),
              "prev" === t.swipeDirection && t.slideTo(null !== f ? f : h));
        }
      }
      function Ho() {
        const e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: o, allowSlidePrev: n, snapGrid: r } = e,
          l = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const a = l && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        a
          ? e.params.loop && !l
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = o),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function Go(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function Vo() {
        const e = this,
          { wrapperEl: t, rtlTranslate: i, enabled: o } = e;
        if (!o) return;
        let n;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      function Yo(e) {
        const t = this;
        Oo(t, e.target),
          t.params.cssMode ||
            ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
            t.update();
      }
      let Xo = !1;
      function Ko() {}
      const Jo = (e, t) => {
        const i = ho(),
          { params: o, el: n, wrapperEl: r, device: l } = e,
          a = !!o.nested,
          s = "on" === t ? "addEventListener" : "removeEventListener",
          c = t;
        n[s]("pointerdown", e.onTouchStart, { passive: !1 }),
          i[s]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
          i[s]("pointerup", e.onTouchEnd, { passive: !0 }),
          i[s]("pointercancel", e.onTouchEnd, { passive: !0 }),
          i[s]("pointerout", e.onTouchEnd, { passive: !0 }),
          i[s]("pointerleave", e.onTouchEnd, { passive: !0 }),
          (o.preventClicks || o.preventClicksPropagation) &&
            n[s]("click", e.onClick, !0),
          o.cssMode && r[s]("scroll", e.onScroll),
          o.updateOnWindowResize
            ? e[c](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                Ho,
                !0
              )
            : e[c]("observerUpdate", Ho, !0),
          n[s]("load", e.onLoad, { capture: !0 });
      };
      const Qo = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const Zo = {
        addClasses: function () {
          const e = this,
            { classNames: t, params: i, rtl: o, el: n, device: r } = e,
            l = (function (e, t) {
              const i = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((o) => {
                        e[o] && i.push(t + o);
                      })
                    : "string" == typeof e && i.push(t + e);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "free-mode": e.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: o },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
                { "watch-progress": i.watchSlidesProgress },
              ],
              i.containerModifierClass
            );
          t.push(...l), n.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      };
      const en = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function tn(e, t) {
        return function (i = {}) {
          const o = Object.keys(i)[0],
            n = i[o];
          "object" == typeof n && null !== n
            ? (["navigation", "pagination", "scrollbar"].indexOf(o) >= 0 &&
                !0 === e[o] &&
                (e[o] = { auto: !0 }),
              o in e && "enabled" in n
                ? (!0 === e[o] && (e[o] = { enabled: !0 }),
                  "object" != typeof e[o] ||
                    "enabled" in e[o] ||
                    (e[o].enabled = !0),
                  e[o] || (e[o] = { enabled: !1 }),
                  bo(t, i))
                : bo(t, i))
            : bo(t, i);
        };
      }
      const on = {
          eventsEmitter: Io,
          update: Fo,
          translate: No,
          transition: {
            setTransition: function (e, t) {
              const i = this;
              i.params.cssMode ||
                (i.wrapperEl.style.transitionDuration = `${e}ms`),
                i.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              const i = this,
                { params: o } = i;
              o.cssMode ||
                (o.autoHeight && i.updateAutoHeight(),
                Ro({
                  swiper: i,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e = !0, t) {
              const i = this,
                { params: o } = i;
              (i.animating = !1),
                o.cssMode ||
                  (i.setTransition(0),
                  Ro({
                    swiper: i,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: Bo,
          loop: $o,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              const e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              const e = this,
                t = ho(),
                { params: i } = e;
              (e.onTouchStart = qo.bind(e)),
                (e.onTouchMove = Uo.bind(e)),
                (e.onTouchEnd = Wo.bind(e)),
                i.cssMode && (e.onScroll = Vo.bind(e)),
                (e.onClick = Go.bind(e)),
                (e.onLoad = Yo.bind(e)),
                Xo || (t.addEventListener("touchstart", Ko), (Xo = !0)),
                Jo(e, "on");
            },
            detachEvents: function () {
              Jo(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                { realIndex: t, initialized: i, params: o, el: n } = e,
                r = o.breakpoints;
              if (!r || (r && 0 === Object.keys(r).length)) return;
              const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
              if (!l || e.currentBreakpoint === l) return;
              const a = (l in r ? r[l] : void 0) || e.originalParams,
                s = Qo(e, o),
                c = Qo(e, a),
                d = o.enabled;
              s && !c
                ? (n.classList.remove(
                    `${o.containerModifierClass}grid`,
                    `${o.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !s &&
                  c &&
                  (n.classList.add(`${o.containerModifierClass}grid`),
                  ((a.grid.fill && "column" === a.grid.fill) ||
                    (!a.grid.fill && "column" === o.grid.fill)) &&
                    n.classList.add(`${o.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === a[t]) return;
                  const i = o[t] && o[t].enabled,
                    n = a[t] && a[t].enabled;
                  i && !n && e[t].disable(), !i && n && e[t].enable();
                });
              const u = a.direction && a.direction !== o.direction,
                p = o.loop && (a.slidesPerView !== o.slidesPerView || u);
              u && i && e.changeDirection(), bo(e.params, a);
              const h = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                d && !h ? e.disable() : !d && h && e.enable(),
                (e.currentBreakpoint = l),
                e.emit("_beforeBreakpoint", a),
                p && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
                e.emit("breakpoint", a);
            },
            getBreakpoint: function (e, t = "window", i) {
              if (!e || ("container" === t && !i)) return;
              let o = !1;
              const n = go(),
                r = "window" === t ? n.innerHeight : i.clientHeight,
                l = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return { value: r * t, point: e };
                  }
                  return { value: e, point: e };
                });
              l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < l.length; e += 1) {
                const { point: r, value: a } = l[e];
                "window" === t
                  ? n.matchMedia(`(min-width: ${a}px)`).matches && (o = r)
                  : a <= i.clientWidth && (o = r);
              }
              return o || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: i } = e,
                { slidesOffsetBefore: o } = i;
              if (o) {
                const t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * o;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: Zo,
        },
        nn = {};
      class rn {
        constructor(...e) {
          let t, i;
          1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (i = e[0])
            : ([t, i] = e),
            i || (i = {}),
            (i = bo({}, i)),
            t && !i.el && (i.el = t);
          const o = ho();
          if (
            i.el &&
            "string" == typeof i.el &&
            o.querySelectorAll(i.el).length > 1
          ) {
            const e = [];
            return (
              o.querySelectorAll(i.el).forEach((t) => {
                const o = bo({}, i, { el: t });
                e.push(new rn(o));
              }),
              e
            );
          }
          const n = this;
          (n.__swiper__ = !0),
            (n.support = Mo()),
            (n.device = Ao({ userAgent: i.userAgent })),
            (n.browser = Po()),
            (n.eventsListeners = {}),
            (n.eventsAnyListeners = []),
            (n.modules = [...n.__modules__]),
            i.modules &&
              Array.isArray(i.modules) &&
              n.modules.push(...i.modules);
          const r = {};
          n.modules.forEach((e) => {
            e({
              params: i,
              swiper: n,
              extendParams: tn(i, r),
              on: n.on.bind(n),
              once: n.once.bind(n),
              off: n.off.bind(n),
              emit: n.emit.bind(n),
            });
          });
          const l = bo({}, en, r);
          return (
            (n.params = bo({}, l, nn, i)),
            (n.originalParams = bo({}, n.params)),
            (n.passedParams = bo({}, i)),
            n.params &&
              n.params.on &&
              Object.keys(n.params.on).forEach((e) => {
                n.on(e, n.params.on[e]);
              }),
            n.params && n.params.onAny && n.onAny(n.params.onAny),
            Object.assign(n, {
              enabled: n.params.enabled,
              el: t,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === n.params.direction,
              isVertical: () => "vertical" === n.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                evCache: [],
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.emit("_swiper"),
            n.params.init && n.init(),
            n
          );
        }
        getSlideIndex(e) {
          const { slidesEl: t, params: i } = this,
            o = ko(So(t, `.${i.slideClass}, swiper-slide`)[0]);
          return ko(e) - o;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = So(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const i = this;
          e = Math.min(Math.max(e, 0), 1);
          const o = i.minTranslate(),
            n = (i.maxTranslate() - o) * e + o;
          i.translateTo(n, void 0 === t ? 0 : t),
            i.updateActiveIndex(),
            i.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((i) => {
            const o = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: o }), e.emit("_slideClass", i, o);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e = "current", t = !1) {
          const {
            params: i,
            slides: o,
            slidesGrid: n,
            slidesSizesGrid: r,
            size: l,
            activeIndex: a,
          } = this;
          let s = 1;
          if (i.centeredSlides) {
            let e,
              t = o[a] ? o[a].swiperSlideSize : 0;
            for (let i = a + 1; i < o.length; i += 1)
              o[i] &&
                !e &&
                ((t += o[i].swiperSlideSize), (s += 1), t > l && (e = !0));
            for (let i = a - 1; i >= 0; i -= 1)
              o[i] &&
                !e &&
                ((t += o[i].swiperSlideSize), (s += 1), t > l && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < o.length; e += 1) {
              (t ? n[e] + r[e] - n[a] < l : n[e] - n[a] < l) && (s += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              n[a] - n[e] < l && (s += 1);
            }
          return s;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: i } = e;
          function o() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let n;
          if (
            (i.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && Oo(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            i.freeMode && i.freeMode.enabled && !i.cssMode)
          )
            o(), i.autoHeight && e.updateAutoHeight();
          else {
            if (
              ("auto" === i.slidesPerView || i.slidesPerView > 1) &&
              e.isEnd &&
              !i.centeredSlides
            ) {
              const t =
                e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
              n = e.slideTo(t.length - 1, 0, !1, !0);
            } else n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || o();
          }
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          const i = this,
            o = i.params.direction;
          return (
            e || (e = "horizontal" === o ? "vertical" : "horizontal"),
            e === o ||
              ("horizontal" !== e && "vertical" !== e) ||
              (i.el.classList.remove(`${i.params.containerModifierClass}${o}`),
              i.el.classList.add(`${i.params.containerModifierClass}${e}`),
              i.emitContainerClasses(),
              (i.params.direction = e),
              i.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              i.emit("changeDirection"),
              t && i.update()),
            i
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (("string" == typeof i && (i = document.querySelector(i)), !i))
            return !1;
          (i.swiper = t), i.shadowEl && (t.isElement = !0);
          const o = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n = (() => {
            if (i && i.shadowRoot && i.shadowRoot.querySelector) {
              return i.shadowRoot.querySelector(o());
            }
            return So(i, o())[0];
          })();
          return (
            !n &&
              t.params.createElements &&
              ((n = (function (e, t = []) {
                const i = document.createElement(e);
                return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
              })("div", t.params.wrapperClass)),
              i.append(n),
              So(i, `.${t.params.slideClass}`).forEach((e) => {
                n.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: n,
              slidesEl: t.isElement ? i : n,
              mounted: !0,
              rtl:
                "rtl" === i.dir.toLowerCase() || "rtl" === zo(i, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === i.dir.toLowerCase() || "rtl" === zo(i, "direction")),
              wrongRTL: "-webkit-box" === zo(n, "display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.loop && t.virtual && t.params.virtual.enabled
                ? t.slideTo(
                    t.params.initialSlide + t.virtual.slidesBefore,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.params.loop && t.loopCreate(),
              t.attachEvents(),
              [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
                e.complete
                  ? Oo(t, e)
                  : e.addEventListener("load", (e) => {
                      Oo(t, e.target);
                    });
              }),
              jo(t),
              (t.initialized = !0),
              jo(t),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e = !0, t = !0) {
          const i = this,
            { params: o, el: n, wrapperEl: r, slides: l } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              o.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                n.removeAttribute("style"),
                r.removeAttribute("style"),
                l &&
                  l.length &&
                  l.forEach((e) => {
                    e.classList.remove(
                      o.slideVisibleClass,
                      o.slideActiveClass,
                      o.slideNextClass,
                      o.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                ((i.el.swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          bo(nn, e);
        }
        static get extendedDefaults() {
          return nn;
        }
        static get defaults() {
          return en;
        }
        static installModule(e) {
          rn.prototype.__modules__ || (rn.prototype.__modules__ = []);
          const t = rn.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => rn.installModule(e)), rn)
            : (rn.installModule(e), rn);
        }
      }
      Object.keys(on).forEach((e) => {
        Object.keys(on[e]).forEach((t) => {
          rn.prototype[t] = on[e][t];
        });
      }),
        rn.use([
          function ({ swiper: e, on: t, emit: i }) {
            const o = go();
            let n = null,
              r = null;
            const l = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              a = () => {
                e && !e.destroyed && e.initialized && i("orientationchange");
              };
            t("init", () => {
              e.params.resizeObserver && void 0 !== o.ResizeObserver
                ? e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((n = new ResizeObserver((t) => {
                    r = o.requestAnimationFrame(() => {
                      const { width: i, height: o } = e;
                      let n = i,
                        r = o;
                      t.forEach(
                        ({ contentBoxSize: t, contentRect: i, target: o }) => {
                          (o && o !== e.el) ||
                            ((n = i ? i.width : (t[0] || t).inlineSize),
                            (r = i ? i.height : (t[0] || t).blockSize));
                        }
                      ),
                        (n === i && r === o) || l();
                    });
                  })),
                  n.observe(e.el))
                : (o.addEventListener("resize", l),
                  o.addEventListener("orientationchange", a));
            }),
              t("destroy", () => {
                r && o.cancelAnimationFrame(r),
                  n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                  o.removeEventListener("resize", l),
                  o.removeEventListener("orientationchange", a);
              });
          },
          function ({ swiper: e, extendParams: t, on: i, emit: o }) {
            const n = [],
              r = go(),
              l = (t, i = {}) => {
                const l = new (r.MutationObserver || r.WebkitMutationObserver)(
                  (t) => {
                    if (e.__preventObserver__) return;
                    if (1 === t.length) return void o("observerUpdate", t[0]);
                    const i = function () {
                      o("observerUpdate", t[0]);
                    };
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(i)
                      : r.setTimeout(i, 0);
                  }
                );
                l.observe(t, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList: void 0 === i.childList || i.childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  n.push(l);
              };
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    const t = (function (e, t) {
                      const i = [];
                      let o = e.parentElement;
                      for (; o; )
                        t ? o.matches(t) && i.push(o) : i.push(o),
                          (o = o.parentElement);
                      return i;
                    })(e.el);
                    for (let e = 0; e < t.length; e += 1) l(t[e]);
                  }
                  l(e.el, { childList: e.params.observeSlideChildren }),
                    l(e.wrapperEl, { attributes: !1 });
                }
              }),
              i("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      (window.contentCardsLinks = () => ({
        visible: !1,
        activeCard: "2",
        slider: null,
        sliderContainer: null,
        sliderNavContainer: null,
        sliderOptions: {},
        currentSlide: 0,
        sliderEnd: !1,
        sliderNav: null,
        draggable: !0,
        init() {
          no.onResizeFinished(() => {
            window.innerWidth < 992 && this.initSlider();
          }, !0);
        },
        initSlider() {
          (this.sliderContainer = this.$refs.contentCardsMobile),
            (this.sliderNavContainer = this.$refs.contentCardsLinksMobile);
          const e = this;
          let t = {
            cellAlign: "left",
            contain: !0,
            pageDots: !1,
            prevNextButtons: !1,
            freeScroll: !1,
            draggable: !0,
            on: {
              ready: function () {
                window.dispatchEvent(new Event("resize")), e.sliderResize(this);
              },
            },
          };
          (this.sliderOptions = no.extend(t, {})),
            (this.slider = new (ao())(
              this.sliderContainer,
              this.sliderOptions
            )),
            (this.sliderNav = new (ao())(
              this.sliderNavContainer,
              this.sliderOptions
            )),
            this.slider.on("change", function (t) {
              e.sliderNav.select(t);
            }),
            no.onResizeFinished(() => {
              this.sliderResize();
            }, !1);
        },
        sliderResize() {
          const e = document.querySelectorAll(
            ".Content__Cards__Links-cards .flickity-slider"
          );
          (this.sliderFullWidth = 0),
            e.forEach((e) => {
              const t = e.querySelectorAll(".Content__Cards__Links-item");
              let i = 0;
              t.forEach((e) => {
                (e.style.height = ""),
                  (this.sliderFullWidth += e.offsetWidth),
                  e.offsetHeight > i && (i = e.offsetHeight);
              }),
                t.forEach((e) => {
                  e.style.height = i + "px";
                }),
                (e.style.height = ""),
                (e.style.height = i + "px");
            });
        },
        goToSlide(e) {
          this.slider.select(e), this.sliderNav.select(e);
        },
        setupLinkSlider() {
          const e = this.$refs.contentLinks,
            t = e.querySelectorAll(".Content__Cards__Links-link-container");
          let i = 0;
          t.forEach((e) => {
            const t = e.offsetHeight;
            i += t;
          }),
            (e.style.height = i + "px");
        },
      })),
        (window.videoPlayer = () => ({
          paused: !0,
          videoPlayer: null,
          isEmbed: !1,
          init() {
            (this.videoPlayer = this.$el.querySelector("video")),
              null !== this.videoPlayer &&
                void 0 !== this.videoPlayer &&
                (this.videoPlayer.addEventListener("play", () => {
                  this.paused = !1;
                }),
                this.videoPlayer.addEventListener("pause", () => {
                  this.paused = !0;
                }),
                this.videoPlayer.addEventListener("ended", () => {
                  this.paused = !0;
                })),
              void 0 !== this.$el.querySelectorAll(".video-embed") &&
                null !== this.$el.querySelectorAll(".video-embed") &&
                this.$el.querySelectorAll(".video-embed").length &&
                (this.isEmbed = !0);
          },
          playVideo() {
            if (((this.paused = !1), this.isEmbed)) {
              const e = this.$root.querySelector(".video-embed iframe"),
                t = e.src + "&autoplay=1";
              e.src = t;
            } else {
              this.$root.querySelectorAll("video")[0].play();
            }
          },
        }));
      i(934), i(87);
      (window.sliderContentCards = () => ({
        slider: null,
        sliderContainer: null,
        sliderOptions: {},
        visible: !1,
        currentSlide: 0,
        sliderEnd: !1,
        initSlider(e, t = !1) {
          this.sliderContainer = e;
          const i = this;
          let o = {
            cellAlign: "left",
            contain: !0,
            pageDots: !1,
            prevNextButtons: !1,
            freeScroll: !0,
            on: {
              ready: function () {
                setTimeout(() => {
                  window.dispatchEvent(new Event("resize")), i.sliderResize();
                }, 300);
              },
            },
          };
          (this.sliderOptions = no.extend(o, {})),
            window.outerWidth < 768 && t
              ? null !== this.slider &&
                (this.slider.destroy(), (this.slider = null))
              : ((this.slider = new (ao())(
                  this.sliderContainer,
                  this.sliderOptions
                )),
                this.eventListeners(t)),
            no.onResizeFinished(() => {
              this.slider.resize(),
                this.slider.reposition(),
                this.sliderResize();
            });
        },
        eventListeners(e) {
          this.slider.on("change", (e) => {
            this.currentSlide = e;
          }),
            this.slider.on("scroll", (e) => {
              this.sliderEnd = e.toFixed(2) >= 1;
            }),
            no.onResizeFinished(() => {
              this.resizeSlider(e);
            });
        },
        goToSlide(e) {
          this.slider.select(e);
        },
        resizeSlider(e = !1) {
          window.outerWidth < 768 && e
            ? null !== this.slider &&
              (this.slider.destroy(), (this.slider = null))
            : null === this.slider
            ? (this.slider = new (ao())(
                this.sliderContainer,
                this.sliderOptions
              ))
            : setTimeout(() => {
                this.slider.resize(), this.slider.reposition();
              }, 500);
        },
        sliderResize() {
          const e = document.querySelectorAll(
            ".Slider__Content__Cards-slider .flickity-slider"
          );
          (this.sliderFullWidth = 0),
            e.forEach((e) => {
              const t = e.querySelectorAll(
                ".Slider__Content__Cards-slider .Card"
              );
              let i = 0;
              t.forEach((e) => {
                (e.style.height = ""),
                  (this.sliderFullWidth += e.offsetWidth),
                  e.offsetHeight > i && (i = e.offsetHeight);
              }),
                t.forEach((e) => {
                  e.style.height = i + "px";
                }),
                (e.style.height = ""),
                (e.style.height = i + "px");
            });
        },
      })),
        (window.counters = () => ({
          visible: !1,
          startTime: null,
          startCount() {
            Date.now();
            const e = (t) => {
              this.startTime || (this.startTime = t);
              const i = Math.min((t - this.startTime) / 1500, 1);
              let o = this.$refs.number.dataset.counterNumber;
              if (o % 1 != 0) {
                let e = this.countDecimals(o);
                this.$refs.number.innerHTML = no.numberWithCommas(
                  this.round(i * o, e)
                );
              } else
                this.$refs.number.innerHTML = no.numberWithCommas(
                  Math.floor(i * parseInt(o))
                );
              i < 1
                ? window.requestAnimationFrame(e)
                : window.cancelAnimationFrame(window.requestAnimationFrame(e));
            };
            window.requestAnimationFrame(e);
          },
          countDecimals: (e) =>
            Math.floor(e) === e ? 0 : e.toString().split(".")[1].length || 0,
          round(e, t) {
            const i = Math.pow(10, t);
            return Math.round(e * i) / i;
          },
        })),
        (window.footerAwardSlider = (e) => ({
          sliderContainer: null,
          slider: null,
          currentSlide: 0,
          sliderEnd: !1,
          sliderFullWidth: 0,
          isSelected: null,
          tags: [],
          currentFilter: null,
          visible: !1,
          isPaused: !1,
          tickerSpeed: 1,
          init() {
            this.initSlider(), this.eventListeners();
            const e = document.querySelector("#languages");
            null != e &&
              e.addEventListener("change", (e) => {
                window.location.href = e.target.value;
              });
          },
          initSlider() {
            (this.sliderContainer = this.$refs.footerAwardSlider),
              (this.tickerSpeed = 1.2);
            const t = this;
            let i = {
                groupCells: !0,
                cellAlign: "left",
                contain: !0,
                draggable: !0,
                pageDots: !1,
                prevNextButtons: !1,
                imageLoaded: !0,
                wrapAround: !0,
                adaptiveHeight: !1,
                freeScroll: !0,
                on: {
                  ready: function () {
                    window.dispatchEvent(new Event("resize")),
                      t.sliderResize(this);
                  },
                },
              },
              o = {};
            void 0 !== e && 0 !== e && (o.autoPlay = 1e3 * e),
              (o = no.extend(i, o)),
              (this.slider = new (ao())(this.sliderContainer, o)),
              no.onResizeFinished(() => {
                this.sliderResize();
              }, !1);
            const n = () => {
              this.isPaused ||
                (this.slider.slides &&
                  ((this.slider.x =
                    (this.slider.x - this.tickerSpeed) %
                    this.slider.slideableWidth),
                  (this.slider.selectedIndex =
                    this.slider.dragEndRestingSelect()),
                  this.slider.updateSelectedSlide(),
                  this.slider.settle(this.slider.x)),
                window.requestAnimationFrame(n));
            };
            this.slider.on("pointerDown", () => {
              this.isPaused = !0;
            }),
              this.slider.on("pointerUp", () => {
                this.isPaused &&
                  ((this.isPaused = !1), window.requestAnimationFrame(n));
              }),
              (this.slider = new (ao())(this.sliderContainer, o)),
              (this.slider.x = 0),
              n();
          },
          buildUrl() {
            let e =
                window.location.protocol +
                "//" +
                window.location.hostname +
                window.location.pathname +
                "?",
              t = 1;
            for (const [i, o] of Object.entries(this.currentFilters))
              (e += `${i}=${o}`),
                t < Object.keys(this.currentFilters).length && (e += "&"),
                t++;
            return e;
          },
          sliderResize(e) {
            const t = document.querySelectorAll(
              ".Footer__Bottom-awards-slider .flickity-slider"
            );
            (this.sliderFullWidth = 0),
              t.forEach((e) => {
                const t = e.querySelectorAll(".Footer__Bottom-award");
                let i = 0;
                t.forEach((e) => {
                  (e.style.height = ""),
                    (this.sliderFullWidth += e.offsetWidth),
                    e.offsetHeight > i && (i = e.offsetHeight);
                }),
                  t.forEach((e) => {
                    e.style.height = i + "px";
                  }),
                  (e.style.height = ""),
                  (e.style.height = i + "px");
              });
          },
          eventListeners() {
            this.slider.on("change", (e) => {
              this.currentSlide = e;
            }),
              this.slider.on("scroll", (e) => {
                this.sliderEnd = e.toFixed(2) >= 1;
              });
          },
        })),
        (window.GoogleMap = (e = !1, t) => ({
          map: null,
          activeMarker: null,
          scrollContainer: null,
          scrollBottom: !1,
          init() {
            (this.map = new so(this.$refs.map, {
              center: this.getSearchCenter(),
              zoom: 6,
            })),
              this.map.setMarkers(e.addresses, !0),
              (this.scrollContainer = this.$refs.scrollContainer),
              document.addEventListener("markerClick", (e) => {
                this.activeMarker = e.detail.markerID;
              }),
              this.handleAddressClick(t),
              this.detectScrollBottom();
          },
          handleAddressClick(e) {
            const t = this.map.mapMarkers.find((t) => t.id == e);
            this.map.mapMarkers
              .filter((t) => t.id != e)
              .forEach((e) => {
                e.setOpacity(0.4);
              }),
              t.setOpacity(1);
          },
          getSearchCenter: () => ({
            lat: parseFloat(e.mapCenterLat),
            lng: parseFloat(e.mapCenterLng),
          }),
          detectScrollBottom() {
            this.scrollContainer.addEventListener("scroll", () => {
              this.scrollBottom =
                this.scrollContainer.scrollTop +
                  this.scrollContainer.clientHeight >=
                this.scrollContainer.scrollHeight - 1;
            });
          },
        }));
      i(817);
      (window.allModals = () => ({
        init() {
          const e = this,
            t = no.stringToHTML(
              document.getElementById("Modal__Skeleton").innerHTML
            ),
            i = e.createModalLinks(
              document.querySelectorAll("[data-pegasus-modal]")
            );
          i.forEach((o, n) => {
            const r = t.cloneNode(!0);
            let l,
              a = "Modal";
            o.dataset.pegasusModal.length &&
              ((a += " " + o.dataset.pegasusModal),
              o.dataset.pegasusModal.includes("Modal--with-nav") &&
                ((l = e.buildModalNav(n, i)),
                l && r.querySelector(".Modal__navigation").append(l))),
              (r.className = a),
              (r.id = o.dataset.pegasusModalId),
              document.getElementById(o.dataset.pegasusModalId) ||
                document.body.append(r),
              i.length <= 4 &&
                setTimeout(function () {
                  e.loadModalContent(o.href, o.dataset.pegasusModalId);
                }, 1e3);
          });
        },
        doesLinkAlreadyExist: (e, t) => t.find((t) => t.href === e.href),
        createModalLinks(e) {
          const t = this,
            i = [];
          return (
            e.length &&
              e.forEach((o, n) => {
                if (void 0 === o.href || null === o.href || "" === o.href)
                  return;
                const r = new URL(o.href);
                (r.search = "?modal=yes"), (o.href = r);
                const l = t.doesLinkAlreadyExist(o, i);
                l
                  ? o.setAttribute(
                      "data-pegasus-modal-id",
                      l.dataset.pegasusModalId
                    )
                  : void 0 !== o.dataset.contactButton &&
                    "true" == o.dataset.contactButton
                  ? o.setAttribute("data-pegasus-modal-id", "contact-modal")
                  : o.setAttribute("data-pegasus-modal-id", `modal-${n}`),
                  e.length > 4 &&
                    o.addEventListener("click", (e) => {
                      e.preventDefault(),
                        t.loadModalContent(o.href, o.dataset.pegasusModalId);
                    }),
                  o.addEventListener("click", t.emitModalOpen),
                  l || i.push(o);
              }),
            i
          );
        },
        emitModalOpen(e) {
          e.preventDefault();
          const t = e.currentTarget.dataset.pegasusModalId,
            i = new CustomEvent("modalopen", { detail: { modalID: t } });
          window.dispatchEvent(i);
        },
        buildModalNav(e, t) {
          const i = this;
          let o,
            n,
            r = e > 0 ? t[e - 1] : "",
            l = e < t.length - 1 ? t[e + 1] : "";
          if (
            ("" !== r &&
              (r = r.dataset.pegasusModal.includes("Modal--with-nav") ? r : ""),
            "" !== l &&
              (l = l.dataset.pegasusModal.includes("Modal--with-nav") ? l : ""),
            "" !== r)
          ) {
            const e = r.dataset.pegasusModalId,
              t = new URL(r.href);
            (t.search = "?modal=yes"),
              (o = `<a href="${t}" class="prev-link arrow-btn" data-pegasus-modal-id="${e}"></a>`);
          } else o = '<span class="prev-link arrow-btn -disabled"></span>';
          if ("" !== l) {
            const e = l.dataset.pegasusModalId,
              t = new URL(l.href);
            (t.search = "?modal=yes"),
              (n = `<a href="${t}" class="next-link arrow-btn" data-pegasus-modal-id="${e}"></a>`);
          } else n = '<span class="next-link arrow-btn -disabled"></span>';
          const a = no.stringToHTML(`<div class="links">${o} ${n}</div>`);
          return (
            a.querySelectorAll("[data-pegasus-modal-id]").forEach((e) => {
              e.addEventListener("click", i.emitModalOpen),
                e.addEventListener("click", (t) => {
                  t.preventDefault(),
                    i.loadModalContent(e.href, e.dataset.pegasusModalId);
                });
            }),
            a
          );
        },
        loadModalContent(e, t) {
          no.fetchContent(e)
            .then((e) => {
              if (!e.ok) throw Error(e.statusText);
              return e.text();
            })
            .then((e) => {
              const i = e;
              document.querySelector(`#${t} .Modal__body`).innerHTML = i;
            })
            .then(() => {
              if ("undefined" != typeof wpcf7) {
                const e = document.querySelectorAll(`#${t} .wpcf7 > form`);
                e.length && e.forEach((e) => wpcf7.init(e));
              }
            })
            .catch((e) => {
              const i = document.querySelector(`#${t} .Modal__body`),
                o = i?.querySelector(".Modal__error");
              o?.classList.remove("hidden"), console.error(e);
            });
        },
      })),
        (window.singleModal = () => ({
          open: !1,
          handleModalOpen(e) {
            this.$el.classList.contains("ModalSkeleton") ||
              (document.body.classList.add("modal-open"),
              (this.open = this.$el.id === e.detail.modalID),
              setTimeout(() => {
                this.$el.querySelector(
                  ".Modal__dialog-wrapper"
                ).style.minHeight =
                  this.$el.querySelector(".Modal__body").offsetHeight + "px";
                const e = this.$el.querySelectorAll("a");
                null != e &&
                  e.forEach((e) => {
                    const t = e.getAttribute("href");
                    new URL(t).pathname === window.location.pathname &&
                      e.addEventListener("click", (e) => {
                        this.handleModalClose();
                      });
                  });
              }, 1e3));
          },
          handleModalClose() {
            this.$dispatch("pause-all-videos"),
              document.body.classList.remove("modal-open"),
              (this.open = !1);
            const e = this.$root.querySelector("iframe");
            if (null == e) return;
            new Vimeo.Player(e).pause();
          },
        })),
        (window.pageModal = () => ({
          show: !1,
          init() {
            let e = document.querySelectorAll(".consultation-modal-button");
            if (e) {
              let t = () => {
                document.body.classList.add("modal-open"),
                  window.dispatchEvent(
                    new CustomEvent("openconsultationmodal")
                  );
              };
              Array.prototype.forEach.call(e, (e) => {
                e.addEventListener("click", t);
              });
              const i = document.querySelector(".consultation-modal").dataset
                .id;
              if (i) {
                document.getElementById("input_2_10").value = i;
              }
            }
            let t = document.querySelectorAll(".application-modal-button");
            if (t) {
              let e = () => {
                document.body.classList.add("modal-open"),
                  window.dispatchEvent(new CustomEvent("openapplicationmodal"));
              };
              Array.prototype.forEach.call(t, (t) => {
                t.addEventListener("click", e);
              });
              const i = document.querySelector(".application-modal").dataset.id;
              if (i) {
                document.getElementById("input_1_6").value = i;
              }
            }
            let i = document.querySelectorAll(
              ".gfield_radio .gform-field-label"
            );
            i.forEach((e) => {
              e.addEventListener("click", function () {
                i.forEach((e) => e.classList.remove("radio--active")),
                  this.classList.add("radio--active");
              });
            });
            const o = this.$el.querySelector(".gform_next_button");
            null != o &&
              o.addEventListener("click", () => {
                const e = this.$root.querySelector(".Modal__body");
                console.log(e),
                  null != e &&
                    setTimeout(() => {
                      e.scrollTo({ top: 0, behavior: "smooth" });
                    }, 500);
              });
          },
          closeModal() {
            document.body.classList.remove("modal-open");
          },
        })),
        (window.navigation = () => ({
          open: !1,
          scrolled: !1,
          currentLink: null,
          isFixed: !1,
          positionTop: 0,
          lastScrollTop: 0,
          menuOpen: !1,
          navMenu: null,
          title: null,
          button: null,
          vlinks: null,
          hlinks: null,
          breaks: [],
          fix() {
            this.isFixed
              ? window.scrollY <= this.positionTop.top && (this.isFixed = !1)
              : window.scrollY >= this.positionTop.top && (this.isFixed = !0),
              this.checkPosition();
          },
          menuScrolling() {
            document.getElementById("page-nav-container").offsetHeight;
            this.scrolled = window.scrollY > 0;
            document.getElementById("page-nav-container").offsetHeight;
            const e = window.scrollY;
            this.lastScrollTop = e;
          },
          scrollLock() {
            (document.getElementsByTagName("html")[0].style.overflow =
              "hidden"),
              (document.getElementsByTagName("body")[0].style.overflow =
                "hidden");
          },
          scrollUnlock() {
            (document.getElementsByTagName("html")[0].style.overflow = "auto"),
              (document.getElementsByTagName("body")[0].style.overflow =
                "auto");
          },
        }));
      i(500), i(276);
      window.postListGrid = (e) => ({
        visible: !1,
        isAjaxing: !1,
        postGrid: null,
        filterData: {},
        searchData: {},
        numOfItems: 0,
        filterId: e,
        currentFilters: {},
        searchValue: null,
        activeAccordion: "",
        isLoading: !1,
        init() {
          (this.postGrid = this.$el),
            this.$el.addEventListener("update-num-of-items", (e) => {
              this.numOfItems = e.detail.numOfItems;
            }),
            this.getCurrentFilters(),
            this.setActiveAccordion();
        },
        setActiveAccordion(e) {
          this.activeAccordion = this.activeAccordion == e ? "" : e;
        },
        filterPosts(e = "", t = "") {
          const i = "" !== e ? no.getURL() + `?filter-${t}=${e}` : no.getURL(),
            o = [
              'data-pegasus-filterable="' +
                this.postGrid.querySelector("[data-pegasus-filterable]").dataset
                  .pegasusFilterable +
                '"',
            ];
          "" !== e
            ? (this.currentFilters[`filter-${t}`] = e)
            : (this.currentFilters = {}),
            (this.isAjaxing = !0),
            no.ajaxContent(i, o, {}, () => {
              (this.isAjaxing = !1),
                history.pushState(
                  JSON.stringify(this.currentFilters),
                  "",
                  this.buildUrl()
                );
            });
        },
        getCurrentFilters() {
          const e = new URL(window.location.href),
            t = new URLSearchParams(e.search);
          for (const [e, i] of t.entries()) {
            if ("s" === e) return void (this.searchData.s = i);
            this.currentFilters[e] = i;
          }
        },
        getQueryString() {
          const e = {
            ...Object.entries({ ...this.searchData, ...this.filterData }),
          };
          return new URLSearchParams(Object.values(e)).toString();
        },
        paginate() {
          no.scroll(this.$refs.postListGrid);
          const e = this.$el.getAttribute("href"),
            t = ["data-pegasus-filterable"];
          this.isAjaxing ||
            ((this.isAjaxing = !0),
            no.ajaxContent(e, t, {}, () => {
              this.isAjaxing = !1;
            }));
        },
        buildUrl() {
          let e =
              window.location.protocol +
              "//" +
              window.location.hostname +
              window.location.pathname +
              "?",
            t = 1;
          for (const [i, o] of Object.entries(this.currentFilters))
            (e += `${i}=${o}`),
              t < Object.keys(this.currentFilters).length && (e += "&"),
              t++;
          return e;
        },
        loadMore() {
          const e = [
              'data-pegasus-filterable="' +
                this.$el.closest("[data-pegasus-filterable]").dataset
                  .pegasusFilterable +
                '"',
            ],
            t = this.$el.getAttribute("href"),
            i = [e],
            o = [
              "[data-pegasus-single-card]",
              ".Post__Grid-load-more-container",
            ];
          this.isLoading ||
            ((this.isLoading = !0),
            no.loadMoreContent(t, i, o, {}, () => {
              (this.isLoading = !1),
                history.pushState("", "", t),
                window.scrollTo({
                  top: document.querySelectorAll(
                    ".Post__Grid-load-more-container"
                  )[0].offsetTop,
                  behavior: "smooth",
                }),
                setTimeout(() => {
                  this.$el.closest(".Post__Grid-load-more-container").remove();
                }, 300);
            }));
        },
        buildUrl() {
          let e =
              window.location.protocol +
              "//" +
              window.location.hostname +
              window.location.pathname +
              "?",
            t = 1;
          for (const [i, o] of Object.entries(this.currentFilters))
            (e += `${i}=${o}`),
              t < Object.keys(this.currentFilters).length && (e += "&"),
              t++;
          return e;
        },
        fetchContent() {
          const e = [
            'data-pegasus-filterable="' +
              this.postGrid.querySelector("[data-pegasus-filterable]").dataset
                .pegasusFilterable +
              '"',
          ];
          Object.keys(this.currentFilters).length
            ? ((this.currentUrl = this.buildUrl()),
              (this.currentUrl = this.buildUrl()),
              (this.isLoading = !0),
              no.ajaxContent(this.buildUrl(), e, {}, () => {
                (this.isLoading = !1),
                  history.pushState(
                    JSON.stringify(this.currentFilters),
                    "",
                    this.currentUrl
                  );
              }))
            : (window.location.href =
                window.location.protocol +
                "//" +
                window.location.hostname +
                window.location.pathname);
        },
        performSearch() {
          this.$refs.searchField.value.length
            ? ((this.currentFilters[
                this.$refs.searchField.getAttribute("name")
              ] = this.$refs.searchField.value),
              (this.searchValue = this.$refs.searchField.value),
              this.fetchContent())
            : this.clearSearch();
        },
      });
      i(658);
      window.scrollingContent = () => ({
        visible: !1,
        slider: null,
        sliderContainer: null,
        slides: [],
        translate: 0,
        progressContainer: 0,
        progressBar: null,
        progress: 0,
        sliderFullWidth: 0,
        slideChange: !1,
        init() {
          (this.sliderContainer = this.$refs.contentScroller),
            (this.slider =
              this.sliderContainer.querySelector(".content-slider")),
            (this.slides = this.slider.querySelectorAll(".slide")),
            no.onResizeFinished(() => {
              window.outerWidth < 992
                ? this.initFlickity()
                : (this.getTranslate(),
                  this.slides.forEach((e) => {
                    e.classList.contains("active") ||
                      (window.outerWidth > 991 && this.minimizeSlide(e));
                  }));
            }, !0);
        },
        initFlickity() {
          (this.sliderContainer = this.$el.querySelector(".content-slider")),
            (this.progressContainer = this.$el.querySelector(
              ".Scrolling__Content-nav .bg-bar"
            )),
            (this.progressBar = this.$el.querySelector(
              ".Scrolling__Content-nav .progress-bar"
            ));
          const e = this;
          let t = {
              cellAlign: "center",
              contain: !0,
              draggable: !0,
              pageDots: !1,
              prevNextButtons: !0,
              arrowShape:
                "m2.08,52.85l45.07,45.07c1.57,1.57,4.12,1.57,5.69,0s1.57-4.12,0-5.69L14.64,54.03h80.43c2.22,0,4.02-1.8,4.02-4.02s-1.8-4.02-4.02-4.02H14.64L52.84,7.78c1.57-1.57,1.57-4.12,0-5.69-.79-.79-1.82-1.18-2.85-1.18s-2.06.39-2.85,1.18L2.08,47.16c-.76.76-1.18,1.78-1.18,2.85s.42,2.09,1.18,2.85Z",
              imageLoaded: !0,
              wrapAround: !1,
              adaptiveHeight: !1,
              percentPosition: !1,
              on: {
                ready: function () {
                  setTimeout(() => {
                    window.dispatchEvent(new Event("resize")), e.sliderResize();
                  }, 300);
                },
              },
            },
            i = {};
          (i = no.extend(t, i)),
            (this.slider = new (ao())(this.sliderContainer, i));
        },
        sliderResize(e) {
          const t = document.querySelectorAll(
            ".content-slider .flickity-slider"
          );
          (this.sliderFullWidth = 0),
            t.forEach((e) => {
              const t = e.querySelectorAll(".slide");
              let i = 0;
              t.forEach((e) => {
                (e.style.height = ""),
                  (this.sliderFullWidth += e.offsetWidth),
                  e.offsetHeight > i && (i = e.offsetHeight);
              }),
                t.forEach((e) => {
                  e.style.height = i + "px";
                }),
                (e.style.height = ""),
                (e.style.height = i + "px");
            });
        },
        nextSlide() {
          if (this.slideChange) return;
          this.slideChange = !0;
          const e = this.slider.querySelector(".slide.active"),
            t = e.nextElementSibling,
            i = this.slider.querySelector(".slide:first-child");
          this.slides.forEach((e) => {
            e.classList.contains("active") && e.classList.remove("active");
          }),
            this.slider.classList.add("slideable");
          const o = this.translate - this.getSlideHeight(i);
          this.minimizeSlide(e),
            this.activateSlide(t),
            (this.slider.style.transform = "translateY(" + o + "px)"),
            setTimeout(() => {
              this.cloneSlide(i, "end"),
                i.remove(),
                this.slider.classList.remove("slideable"),
                (this.slider.style.transform =
                  "translateY(" + this.translate + "px)"),
                (this.currentSlide = 0),
                (this.slideChange = !1);
            }, 350);
        },
        prevSlide() {
          if (this.slideChange) return;
          this.slideChange = !0;
          const e = this.slider.querySelector(".slide.active"),
            t = e.previousElementSibling,
            i = this.slider.querySelector(".slide:last-child");
          this.slides.forEach((e) => {
            e.classList.contains("active") && e.classList.remove("active");
          }),
            this.minimizeSlide(e),
            this.activateSlide(t);
          const o = this.translate + this.getSlideHeight(i);
          this.slider.classList.add("slideable"),
            (this.slider.style.transform = "translateY(" + o + "px)"),
            setTimeout(() => {
              this.cloneSlide(i, "beginning"),
                i.remove(),
                this.slider.classList.remove("slideable"),
                (this.slider.style.transform =
                  "translateY(" + this.translate + "px)"),
                (this.slideChange = !1);
            }, 350);
        },
        cloneSlide(e, t = "beginning") {
          if (e.classList.contains("active")) return;
          const i = e.cloneNode(!0),
            o = e.querySelector("[data-pegasus-modal-id]");
          i.querySelector("[data-pegasus-modal-id]").replaceWith(o),
            i.classList.add("opacity-0"),
            "beginning" === t
              ? this.slider.prepend(i)
              : this.slider.appendChild(i),
            setTimeout(() => {
              i.classList.remove("opacity-0");
            }, 10),
            (this.slides = this.slider.querySelectorAll(".slide"));
        },
        minimizeSlide(e) {
          e.classList.add("minimized");
          e.querySelector(".slide-content").style.maxHeight = "0px";
        },
        activateSlide(e) {
          e.classList.remove("minimized"), e.classList.add("active");
          const t = e.querySelector(".slide-content"),
            i = t.querySelector(".slide-content__inner");
          t.style.maxHeight = i.offsetHeight + "px";
        },
        getSlideHeight(e, t = !0) {
          let i = window.getComputedStyle(e),
            o = parseFloat(i.marginTop) + parseFloat(i.marginBottom);
          return Math.ceil(e.offsetHeight + o);
        },
        getTranslate() {
          if (window.outerWidth < 768)
            return (
              (this.translate = 0),
              void (this.slider.style.transform =
                "translateY(" + this.translate + "px)")
            );
          const e = this.sliderContainer.offsetHeight,
            t = this.slider.offsetHeight;
          (this.translate = t > e ? -Math.abs(t - e) / 2 : (e - t) / 2),
            (this.slider.style.transform =
              "translateY(" + this.translate + "px)");
        },
        resizeSlider(e = !1) {
          window.outerWidth < 768 && e
            ? null !== this.slider &&
              (this.slider.destroy(), (this.slider = null))
            : null === this.slider
            ? (this.slider = new (ao())(
                this.sliderContainer,
                this.sliderOptions
              ))
            : setTimeout(() => {
                this.slider.resize(), this.slider.reposition();
              }, 500);
        },
        sliderResize() {
          const e = document.querySelectorAll(
            ".Scrolling-Content__right .flickity-slider"
          );
          (this.sliderFullWidth = 0),
            e.forEach((e) => {
              const t = e.querySelectorAll(
                ".Scrolling-Content__right-item .slide"
              );
              let i = 0;
              t.forEach((e) => {
                (e.style.height = ""),
                  (this.sliderFullWidth += e.offsetWidth),
                  e.offsetHeight > i && (i = e.offsetHeight);
              }),
                t.forEach((e) => {
                  e.style.height = i + "px";
                }),
                (e.style.height = ""),
                (e.style.height = i + "px");
            });
        },
      });
      i(866), i(81), i(550), i(685);
      var ln = i(31),
        an = i.n(ln);
      (window.successSlider = () => ({
        slider: null,
        sliderNav: null,
        buttonNext: null,
        buttonPrev: null,
        paused: !0,
        videoPlayer: null,
        isEmbed: !1,
        init() {
          (this.slider = new (an())(".carousel-main", {
            initialIndex: ".is-initial-select",
            prevNextButtons: !1,
            wrapAround: !0,
            fade: !0,
            adaptiveHeight: !0,
            on: {
              ready: function () {
                window.dispatchEvent(new Event("resize"));
                const e = new URLSearchParams(window.location.search).get(
                    "team"
                  ),
                  t = document.querySelector(".carousel-main"),
                  i = new (an())(t),
                  o = Array.from(
                    t.querySelectorAll(".Success-Slider__item")
                  ).findIndex((t) => t.dataset.team === e);
                -1 !== o && i.select(o),
                  window.dispatchEvent(new Event("resize"));
              },
            },
          })),
            (this.sliderNav = new (an())(".carousel-nav", {
              pageDots: !1,
              prevNextButtons: !1,
              contain: !0,
              wrapAround: !0,
              on: {
                ready: function () {
                  window.dispatchEvent(new Event("resize"));
                },
              },
            }));
          const e = this.slider.selectedIndex;
          this.sliderNav.select(e),
            this.slider.on("dragEnd", () => {
              const e = this.slider.selectedIndex;
              this.sliderNav.select(e), this.updateURLParameter();
            }),
            this.sliderNav.on("click", (e) => {
              const t = this.sliderNav.getCellElements().indexOf(e.target);
              this.slider.select(t), this.updateURLParameter();
            }),
            this.sliderNav.on("dragEnd", () => {
              const e = this.sliderNav.selectedIndex;
              this.slider.select(e), this.updateURLParameter();
            });
          const t = new URLSearchParams(window.location.search).get(
              "teammember"
            ),
            i = document.querySelector(".carousel-main"),
            o = new (an())(i),
            n = Array.from(
              i.querySelectorAll(".Success-Slider__item")
            ).findIndex((e) => e.dataset.team === t);
          -1 !== n && o.select(n),
            (this.videoPlayer = this.$el.querySelector("video")),
            null !== this.videoPlayer &&
              void 0 !== this.videoPlayer &&
              (this.videoPlayer.addEventListener("play", () => {
                this.paused = !1;
              }),
              this.videoPlayer.addEventListener("pause", () => {
                this.paused = !0;
              }),
              this.videoPlayer.addEventListener("ended", () => {
                this.paused = !0;
              })),
            void 0 !== this.$el.querySelectorAll(".video-embed") &&
              null !== this.$el.querySelectorAll(".video-embed") &&
              this.$el.querySelectorAll(".video-embed").length &&
              (this.isEmbed = !0);
        },
        updateURLParameter() {
          const e = document.querySelector(".carousel-main"),
            t = new (an())(e).selectedIndex,
            i = e.querySelector(`[data-slide-index="${t}"]`).dataset.team,
            o = new URLSearchParams(window.location.search);
          o.set("teammember", i);
          const n = `${window.location.pathname}?${o.toString()}`;
          window.history.pushState({}, "", n);
        },
        playVideo() {
          if (((this.paused = !1), this.isEmbed)) {
            const e = this.$root.querySelector(".video-embed iframe"),
              t = e.src + "&autoplay=1";
            e.src = t;
          } else {
            this.$root.querySelectorAll("video")[0].play();
          }
        },
      })),
        (window.teamSlider = () => ({
          sliderContainer: null,
          slider: null,
          currentSlide: 0,
          sliderEnd: !1,
          sliderFullWidth: 0,
          isSelected: null,
          tags: [],
          currentFilter: null,
          visible: !1,
          progress: 0,
          init() {
            this.initSlider(),
              this.eventListeners(),
              window.dispatchEvent(new Event("resize")),
              this.initProgress();
          },
          initProgress() {
            this.calculateProgress(),
              this.slider.on("change", () => {
                this.calculateProgress();
              });
          },
          calculateProgress() {
            const e = this.slider.slides.length,
              t = this.slider.selectedIndex + 1;
            this.progress = (t / e) * 100;
          },
          initSlider() {
            this.sliderContainer = this.$refs.teamSlider;
            const e = this;
            let t = {
                groupCells: !0,
                cellAlign: "center",
                contain: !0,
                draggable: !0,
                pageDots: !1,
                prevNextButtons: !1,
                imageLoaded: !0,
                wrapAround: !1,
                adaptiveHeight: !1,
                freeScroll: !0,
                on: {
                  ready: function () {
                    window.dispatchEvent(new Event("resize")),
                      e.sliderResize(this);
                  },
                },
              },
              i = {};
            (i = no.extend(t, i)),
              (this.slider = new (ao())(this.sliderContainer, i)),
              no.onResizeFinished(() => {
                this.sliderResize();
              }, !1);
          },
          filterDepts(e = null) {
            const t = this.$root.querySelector("[data-pegasus-filterable]");
            this.$root.querySelectorAll(".Team-Slider__filter").forEach((e) => {
              e.classList.remove("filter-active");
            });
            const i = [
                'data-pegasus-filterable="' + t.dataset.pegasusFilterable + '"',
              ],
              o =
                "show-all" !== e
                  ? no.urlWithParams("filter-department", e)
                  : no.getURL();
            (this.currentFilter = e),
              no.ajaxContent(o, i, {}, () => {
                this.initSlider(), window.allModals().init();
              });
          },
          buildUrl() {
            let e =
                window.location.protocol +
                "//" +
                window.location.hostname +
                window.location.pathname +
                "?",
              t = 1;
            for (const [i, o] of Object.entries(this.currentFilters))
              (e += `${i}=${o}`),
                t < Object.keys(this.currentFilters).length && (e += "&"),
                t++;
            return e;
          },
          sliderResize(e) {
            const t = document.querySelectorAll(
              ".Team-Slider__component .flickity-slider"
            );
            (this.sliderFullWidth = 0),
              t.forEach((e) => {
                const t = e.querySelectorAll(".Team-Slider__slide");
                let i = 0;
                t.forEach((e) => {
                  (e.style.height = ""),
                    (this.sliderFullWidth += e.offsetWidth),
                    e.offsetHeight > i && (i = e.offsetHeight);
                }),
                  t.forEach((e) => {
                    e.style.height = i + "px";
                  }),
                  (e.style.height = ""),
                  (e.style.height = i + "px");
              });
          },
          eventListeners() {
            this.slider.on("change", (e) => {
              this.currentSlide = e;
            }),
              this.slider.on("scroll", (e) => {
                this.sliderEnd = e.toFixed(2) >= 1;
              });
          },
        }));
      i(846), i(574), i(133), i(213), i(746);
      document.lazyLoadInstance ||
        (document.lazyLoadInstance = new (io())({
          elements_selector: ".lazy",
        })),
        document.addEventListener("pause-all-videos", function () {
          document.querySelectorAll("video").forEach(function (e) {
            e.pause();
          });
        });
      var sn = 0.01 * window.innerHeight;
      document.documentElement.style.setProperty(
        "--mob-vh-100",
        "".concat(sn, "px")
      );
      Yi.plugin(Qi), Yi.plugin(eo), (window.Alpine = Yi), Yi.start();
    })();
})();
