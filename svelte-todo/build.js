var app = (function () {
  "use strict";
  function t() {}
  const e = (t) => t;
  function n(t, e) {
    for (const n in e) t[n] = e[n];
    return t;
  }
  function o(t) {
    return t();
  }
  function l() {
    return Object.create(null);
  }
  function c(t) {
    t.forEach(o);
  }
  function i(t) {
    return "function" == typeof t;
  }
  function r(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  const s = "undefined" != typeof window;
  let u = s ? () => window.performance.now() : () => Date.now(),
    a = s ? (t) => requestAnimationFrame(t) : t;
  const d = new Set();
  function f(t) {
    d.forEach((e) => {
      e.c(t) || (d.delete(e), e.f());
    }),
      0 !== d.size && a(f);
  }
  function p(t, e) {
    t.appendChild(e);
  }
  function m(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function h(t) {
    t.parentNode.removeChild(t);
  }
  function $(t) {
    return document.createElement(t);
  }
  function g(t) {
    return document.createTextNode(t);
  }
  function v() {
    return g(" ");
  }
  function y(t, e, n, o) {
    return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
  }
  function _(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function b(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function x(t, e) {
    t.value = null == e ? "" : e;
  }
  function k(t, e, n) {
    t.classList[n ? "add" : "remove"](e);
  }
  function w(t, e) {
    const n = document.createEvent("CustomEvent");
    return n.initCustomEvent(t, !1, !1, e), n;
  }
  const C = new Set();
  let E,
    q = 0;
  function A(t, e, n, o, l, c, i, r = 0) {
    const s = 16.666 / o;
    let u = "{\n";
    for (let t = 0; t <= 1; t += s) {
      const o = e + (n - e) * c(t);
      u += 100 * t + `%{${i(o, 1 - o)}}\n`;
    }
    const a = u + `100% {${i(n, 1 - n)}}\n}`,
      d = `__svelte_${(function (t) {
        let e = 5381,
          n = t.length;
        for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
        return e >>> 0;
      })(a)}_${r}`,
      f = t.ownerDocument;
    C.add(f);
    const p =
        f.__svelte_stylesheet ||
        (f.__svelte_stylesheet = f.head.appendChild($("style")).sheet),
      m = f.__svelte_rules || (f.__svelte_rules = {});
    m[d] ||
      ((m[d] = !0), p.insertRule(`@keyframes ${d} ${a}`, p.cssRules.length));
    const h = t.style.animation || "";
    return (
      (t.style.animation = `${
        h ? `${h}, ` : ""
      }${d} ${o}ms linear ${l}ms 1 both`),
      (q += 1),
      d
    );
  }
  function S(t, e) {
    const n = (t.style.animation || "").split(", "),
      o = n.filter(
        e ? (t) => t.indexOf(e) < 0 : (t) => -1 === t.indexOf("__svelte")
      ),
      l = n.length - o.length;
    l &&
      ((t.style.animation = o.join(", ")),
      (q -= l),
      q ||
        a(() => {
          q ||
            (C.forEach((t) => {
              const e = t.__svelte_stylesheet;
              let n = e.cssRules.length;
              for (; n--; ) e.deleteRule(n);
              t.__svelte_rules = {};
            }),
            C.clear());
        }));
  }
  function j(t) {
    E = t;
  }
  function F() {
    const t = (function () {
      if (!E)
        throw new Error("Function called outside component initialization");
      return E;
    })();
    return (e, n) => {
      const o = t.$$.callbacks[e];
      if (o) {
        const l = w(e, n);
        o.slice().forEach((e) => {
          e.call(t, l);
        });
      }
    };
  }
  const M = [],
    O = [],
    T = [],
    L = [],
    R = Promise.resolve();
  let z = !1;
  function J(t) {
    T.push(t);
  }
  let N = !1;
  const P = new Set();
  function B() {
    if (!N) {
      N = !0;
      do {
        for (let t = 0; t < M.length; t += 1) {
          const e = M[t];
          j(e), D(e.$$);
        }
        for (j(null), M.length = 0; O.length; ) O.pop()();
        for (let t = 0; t < T.length; t += 1) {
          const e = T[t];
          P.has(e) || (P.add(e), e());
        }
        T.length = 0;
      } while (M.length);
      for (; L.length; ) L.pop()();
      (z = !1), (N = !1), P.clear();
    }
  }
  function D(t) {
    if (null !== t.fragment) {
      t.update(), c(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(J);
    }
  }
  let I;
  function G(t, e, n) {
    t.dispatchEvent(w(`${e ? "intro" : "outro"}${n}`));
  }
  const H = new Set();
  let K;
  function Q(t, e) {
    t && t.i && (H.delete(t), t.i(e));
  }
  function U(t, e, n, o) {
    if (t && t.o) {
      if (H.has(t)) return;
      H.add(t),
        K.c.push(() => {
          H.delete(t), o && (n && t.d(1), o());
        }),
        t.o(e);
    }
  }
  const V = { duration: 0 };
  function W(n, o, l, r) {
    let s = o(n, l),
      p = r ? 0 : 1,
      m = null,
      h = null,
      $ = null;
    function g() {
      $ && S(n, $);
    }
    function v(t, e) {
      const n = t.b - p;
      return (
        (e *= Math.abs(n)),
        {
          a: p,
          b: t.b,
          d: n,
          duration: e,
          start: t.start,
          end: t.start + e,
          group: t.group
        }
      );
    }
    function y(o) {
      const {
          delay: l = 0,
          duration: i = 300,
          easing: r = e,
          tick: y = t,
          css: _
        } = s || V,
        b = { start: u() + l, b: o };
      o || ((b.group = K), (K.r += 1)),
        m || h
          ? (h = b)
          : (_ && (g(), ($ = A(n, p, o, i, l, r, _))),
            o && y(0, 1),
            (m = v(b, i)),
            J(() => G(n, o, "start")),
            (function (t) {
              let e;
              0 === d.size && a(f),
                new Promise((n) => {
                  d.add((e = { c: t, f: n }));
                });
            })((t) => {
              if (
                (h &&
                  t > h.start &&
                  ((m = v(h, i)),
                  (h = null),
                  G(n, m.b, "start"),
                  _ && (g(), ($ = A(n, p, m.b, m.duration, 0, r, s.css)))),
                m)
              )
                if (t >= m.end)
                  y((p = m.b), 1 - p),
                    G(n, m.b, "end"),
                    h || (m.b ? g() : --m.group.r || c(m.group.c)),
                    (m = null);
                else if (t >= m.start) {
                  const e = t - m.start;
                  (p = m.a + m.d * r(e / m.duration)), y(p, 1 - p);
                }
              return !(!m && !h);
            }));
    }
    return {
      run(t) {
        i(s)
          ? (I ||
              ((I = Promise.resolve()),
              I.then(() => {
                I = null;
              })),
            I).then(() => {
              (s = s()), y(t);
            })
          : y(t);
      },
      end() {
        g(), (m = h = null);
      }
    };
  }
  function X(t) {
    t && t.c();
  }
  function Y(t, e, n) {
    const { fragment: l, on_mount: r, on_destroy: s, after_update: u } = t.$$;
    l && l.m(e, n),
      J(() => {
        const e = r.map(o).filter(i);
        s ? s.push(...e) : c(e), (t.$$.on_mount = []);
      }),
      u.forEach(J);
  }
  function Z(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (c(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function tt(t, e) {
    -1 === t.$$.dirty[0] &&
      (M.push(t), z || ((z = !0), R.then(B)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function et(e, n, o, i, r, s, u = [-1]) {
    const a = E;
    j(e);
    const d = n.props || {},
      f = (e.$$ = {
        fragment: null,
        ctx: null,
        props: s,
        update: t,
        not_equal: r,
        bound: l(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(a ? a.$$.context : []),
        callbacks: l(),
        dirty: u,
        skip_bound: !1
      });
    let p = !1;
    if (
      ((f.ctx = o
        ? o(e, d, (t, n, ...o) => {
            const l = o.length ? o[0] : n;
            return (
              f.ctx &&
                r(f.ctx[t], (f.ctx[t] = l)) &&
                (!f.skip_bound && f.bound[t] && f.bound[t](l), p && tt(e, t)),
              n
            );
          })
        : []),
      f.update(),
      (p = !0),
      c(f.before_update),
      (f.fragment = !!i && i(f.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(n.target);
        f.fragment && f.fragment.l(t), t.forEach(h);
      } else f.fragment && f.fragment.c();
      n.intro && Q(e.$$.fragment), Y(e, n.target, n.anchor), B();
    }
    j(a);
  }
  class nt {
    $destroy() {
      Z(this, 1), (this.$destroy = t);
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  function ot(t) {
    const e = t - 1;
    return e * e * e + 1;
  }
  function lt(
    t,
    {
      delay: e = 0,
      duration: n = 400,
      easing: o = ot,
      x: l = 0,
      y: c = 0,
      opacity: i = 0
    }
  ) {
    const r = getComputedStyle(t),
      s = +r.opacity,
      u = "none" === r.transform ? "" : r.transform,
      a = s * (1 - i);
    return {
      delay: e,
      duration: n,
      easing: o,
      css: (t, e) =>
        `\n\t\t\ttransform: ${u} translate(${(1 - t) * l}px, ${
          (1 - t) * c
        }px);\n\t\t\topacity: ${s - a * e}`
    };
  }
  function ct(t) {
    let e, n, o, l, i, r, s, u, a, d, f, x;
    return {
      c() {
        (e = $("div")),
          (n = $("div")),
          (o = $("input")),
          (l = v()),
          (i = $("div")),
          (r = g(t[1])),
          (u = v()),
          (a = $("div")),
          (a.textContent = "x"),
          _(o, "type", "checkbox"),
          _(i, "class", "todo-item-label svelte-xqohy2"),
          k(i, "completed", t[0]),
          _(n, "class", "todo-item-left svelte-xqohy2"),
          _(a, "class", "remove-item svelte-xqohy2"),
          _(e, "class", "todo-item svelte-xqohy2");
      },
      m(c, s) {
        m(c, e, s),
          p(e, n),
          p(n, o),
          (o.checked = t[0]),
          p(n, l),
          p(n, i),
          p(i, r),
          p(e, u),
          p(e, a),
          (d = !0),
          f ||
            ((x = [
              y(o, "change", t[5]),
              y(o, "change", t[3]),
              y(a, "click", t[2])
            ]),
            (f = !0));
      },
      p(t, [e]) {
        1 & e && (o.checked = t[0]),
          (!d || 2 & e) && b(r, t[1]),
          1 & e && k(i, "completed", t[0]);
      },
      i(t) {
        d ||
          (J(() => {
            s || (s = W(n, lt, { y: 20, duration: 300 }, !0)), s.run(1);
          }),
          (d = !0));
      },
      o(t) {
        s || (s = W(n, lt, { y: 20, duration: 300 }, !1)), s.run(0), (d = !1);
      },
      d(t) {
        t && h(e), t && s && s.end(), (f = !1), c(x);
      }
    };
  }
  function it(t, e, n) {
    let { id: o } = e,
      { title: l } = e,
      { completed: c } = e;
    const i = F();
    return (
      (t.$$set = (t) => {
        "id" in t && n(4, (o = t.id)),
          "title" in t && n(1, (l = t.title)),
          "completed" in t && n(0, (c = t.completed));
      }),
      [
        c,
        l,
        function () {
          i("deleteTodo", { id: o });
        },
        function () {
          i("toggleComplete", { id: o });
        },
        o,
        function () {
          (c = this.checked), n(0, c);
        }
      ]
    );
  }
  class rt extends nt {
    constructor(t) {
      super(), et(this, t, it, ct, r, { id: 4, title: 1, completed: 0 });
    }
  }
  function st(t, e, n) {
    const o = t.slice();
    return (o[16] = e[n]), o;
  }
  function ut(t) {
    let e, o, l;
    const c = [t[16]];
    let i = {};
    for (let t = 0; t < c.length; t += 1) i = n(i, c[t]);
    return (
      (o = new rt({ props: i })),
      o.$on("deleteTodo", t[8]),
      o.$on("toggleComplete", t[9]),
      {
        c() {
          (e = $("div")), X(o.$$.fragment), _(e, "class", "todo-item");
        },
        m(t, n) {
          m(t, e, n), Y(o, e, null), (l = !0);
        },
        p(t, e) {
          const n =
            2 & e
              ? (function (t, e) {
                  const n = {},
                    o = {},
                    l = { $$scope: 1 };
                  let c = t.length;
                  for (; c--; ) {
                    const i = t[c],
                      r = e[c];
                    if (r) {
                      for (const t in i) t in r || (o[t] = 1);
                      for (const t in r) l[t] || ((n[t] = r[t]), (l[t] = 1));
                      t[c] = r;
                    } else for (const t in i) l[t] = 1;
                  }
                  for (const t in o) t in n || (n[t] = void 0);
                  return n;
                })(c, [
                  ((l = t[16]), "object" == typeof l && null !== l ? l : {})
                ])
              : {};
          var l;
          o.$set(n);
        },
        i(t) {
          l || (Q(o.$$.fragment, t), (l = !0));
        },
        o(t) {
          U(o.$$.fragment, t), (l = !1);
        },
        d(t) {
          t && h(e), Z(o);
        }
      }
    );
  }
  function at(t) {
    let e,
      n,
      o,
      l,
      i,
      r,
      s,
      u,
      a,
      d,
      f,
      w,
      C,
      E,
      q,
      A,
      S,
      j,
      F,
      M,
      O,
      T,
      L,
      R,
      z,
      J,
      N,
      P,
      B,
      D,
      I,
      G,
      H = t[1],
      V = [];
    for (let e = 0; e < H.length; e += 1) V[e] = ut(st(t, H, e));
    const W = (t) =>
      U(V[t], 1, 1, () => {
        V[t] = null;
      });
    return {
      c() {
        (e = $("div")),
          (n = $("img")),
          (l = v()),
          (i = $("h2")),
          (i.textContent = "Svelte Todo App"),
          (r = v()),
          (s = $("input")),
          (u = v());
        for (let t = 0; t < V.length; t += 1) V[t].c();
        (a = v()),
          (d = $("div")),
          (f = $("div")),
          (w = $("label")),
          (C = $("input")),
          (E = g("Check All")),
          (q = v()),
          (A = $("div")),
          (S = g(t[3])),
          (j = g(" items left")),
          (F = v()),
          (M = $("div")),
          (O = $("div")),
          (T = $("button")),
          (T.textContent = "All"),
          (L = v()),
          (R = $("button")),
          (R.textContent = "Active"),
          (z = v()),
          (J = $("button")),
          (J.textContent = "Completed"),
          (N = v()),
          (P = $("dir")),
          (B = $("button")),
          (B.textContent = "Clear Completed"),
          
          _(s, "type", "text"),
          _(s, "class", "todo-input svelte-1psfqut"),
          _(s, "placeholder", "Insert todo item ..."),
          _(C, "class", "inner-container-input svelte-1psfqut"),
          _(C, "type", "checkbox"),
          _(d, "class", "inner-container svelte-1psfqut"),
          _(T, "class", "svelte-1psfqut"),
          k(T, "active", "all" === t[0]),
          _(R, "class", "svelte-1psfqut"),
          k(R, "active", "active" === t[0]),
          _(J, "class", "svelte-1psfqut"),
          k(J, "active", "completed" === t[0]),
          _(B, "class", "svelte-1psfqut"),
          _(M, "class", "inner-container svelte-1psfqut"),
          _(e, "class", "container svelte-1psfqut");
      },
      m(o, c) {
        m(o, e, c),
          p(e, n),
          p(e, l),
          p(e, i),
          p(e, r),
          p(e, s),
          x(s, t[2]),
          p(e, u);
        for (let t = 0; t < V.length; t += 1) V[t].m(e, null);
        p(e, a),
          p(e, d),
          p(d, f),
          p(f, w),
          p(w, C),
          p(w, E),
          p(d, q),
          p(d, A),
          p(A, S),
          p(A, j),
          p(e, F),
          p(e, M),
          p(M, O),
          p(O, T),
          p(O, L),
          p(O, R),
          p(O, z),
          p(O, J),
          p(M, N),
          p(M, P),
          p(P, B),
          (D = !0),
          I ||
            ((G = [
              y(s, "input", t[11]),
              y(s, "keydown", t[4]),
              y(C, "change", t[5]),
              y(T, "click", t[12]),
              y(R, "click", t[13]),
              y(J, "click", t[14]),
              y(B, "click", t[7])
            ]),
            (I = !0));
      },
      p(t, [n]) {
        if ((4 & n && s.value !== t[2] && x(s, t[2]), 770 & n)) {
          let o;
          for (H = t[1], o = 0; o < H.length; o += 1) {
            const l = st(t, H, o);
            V[o]
              ? (V[o].p(l, n), Q(V[o], 1))
              : ((V[o] = ut(l)), V[o].c(), Q(V[o], 1), V[o].m(e, a));
          }
          for (K = { r: 0, c: [], p: K }, o = H.length; o < V.length; o += 1)
            W(o);
          K.r || c(K.c), (K = K.p);
        }
        (!D || 8 & n) && b(S, t[3]),
          1 & n && k(T, "active", "all" === t[0]),
          1 & n && k(R, "active", "active" === t[0]),
          1 & n && k(J, "active", "completed" === t[0]);
      },
      i(t) {
        if (!D) {
          for (let t = 0; t < H.length; t += 1) Q(V[t]);
          D = !0;
        }
      },
      o(t) {
        V = V.filter(Boolean);
        for (let t = 0; t < V.length; t += 1) U(V[t]);
        D = !1;
      },
      d(t) {
        t && h(e),
          (function (t, e) {
            for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
          })(V, t),
          (I = !1),
          c(G);
      }
    };
  }
  function dt(t, e, n) {
    let o = "",
      l = "all",
      c = 4,
      i = [
        { id: 1, title: "My first todo", completed: !1 },
        { id: 2, title: "My second todo", completed: !1 },
        { id: 3, title: "My third todo", completed: !1 }
      ];
    function r(t) {
      n(0, (l = t));
    }
    let s, u;
    return (
      (t.$$.update = () => {
        1025 & t.$$.dirty &&
          n(
            1,
            (u =
              "all" === l
                ? i
                : "completed" === l
                ? i.filter((t) => t.completed)
                : i.filter((t) => !t.completed))
          ),
          2 & t.$$.dirty && n(3, (s = u.filter((t) => !t.completed).length));
      }),
      [
        l,
        u,
        o,
        s,
        function (t) {
          "Enter" === t.key &&
            (n(10, (i = [...i, { id: c, completed: !1, title: o }])),
            (c += 1),
            n(2, (o = "")));
        },
        function (t) {
          i.forEach((e) => (e.completed = t.target.checked)), n(10, i);
        },
        r,
        function () {
          n(10, (i = i.filter((t) => !t.completed)));
        },
        function (t) {
          n(10, (i = i.filter((e) => e.id !== t.detail.id)));
        },
        function (t) {
          const e = i.findIndex((e) => e.id === t.detail.id),
            o = { ...i[e], completed: !i[e].completed };
          n(10, (i = [...i.slice(0, e), o, ...i.slice(e + 1)]));
        },
        i,
        function () {
          (o = this.value), n(2, o);
        },
        () => r("all"),
        () => r("active"),
        () => r("completed")
      ]
    );
  }
  class ft extends nt {
    constructor(t) {
      super(), et(this, t, dt, at, r, {});
    }
  }
  function pt(e) {
    let n, o;
    return (
      (n = new ft({})),
      {
        c() {
          X(n.$$.fragment);
        },
        m(t, e) {
          Y(n, t, e), (o = !0);
        },
        p: t,
        i(t) {
          o || (Q(n.$$.fragment, t), (o = !0));
        },
        o(t) {
          U(n.$$.fragment, t), (o = !1);
        },
        d(t) {
          Z(n, t);
        }
      }
    );
  }
  return new (class extends nt {
    constructor(t) {
      super(), et(this, t, null, pt, r, {});
    }
  })({ target: document.body, props: { name: "world" } });
})();
