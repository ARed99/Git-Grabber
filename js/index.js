!(function (
  e,
  t,
  r,
  o,
  n,
) {
  var a =
      'undefined' !=
      typeof globalThis
        ? globalThis
        : 'undefined' !=
          typeof self
        ? self
        : 'undefined' !=
          typeof window
        ? window
        : 'undefined' !=
          typeof global
        ? global
        : {},
    i =
      'function' ==
        typeof a[
          o
        ] && a[o],
    s =
      i.cache || {},
    l =
      'undefined' !=
        typeof module &&
      'function' ==
        typeof module.require &&
      module.require.bind(
        module,
      );
  function u(t, r) {
    if (!s[t]) {
      if (!e[t]) {
        var n =
          'function' ==
            typeof a[
              o
            ] &&
          a[o];
        if (!r && n)
          return n(
            t,
            !0,
          );
        if (i)
          return i(
            t,
            !0,
          );
        if (
          l &&
          'string' ==
            typeof t
        )
          return l(
            t,
          );
        var c =
          Error(
            "Cannot find module '" +
              t +
              "'",
          );
        throw (
          ((c.code =
            'MODULE_NOT_FOUND'),
          c)
        );
      }
      (p.resolve =
        function (
          r,
        ) {
          var o =
            e[t][1][
              r
            ];
          return null !=
            o
            ? o
            : r;
        }),
        (p.cache =
          {});
      var f = (s[
        t
      ] =
        new u.Module(
          t,
        ));
      e[t][0].call(
        f.exports,
        p,
        f,
        f.exports,
        this,
      );
    }
    return s[t]
      .exports;
    function p(e) {
      var t =
        p.resolve(
          e,
        );
      return !1 ===
        t
        ? {}
        : u(t);
    }
  }
  (u.isParcelRequire =
    !0),
    (u.Module =
      function (e) {
        (this.id =
          e),
          (this.bundle =
            u),
          (this.exports =
            {});
      }),
    (u.modules = e),
    (u.cache = s),
    (u.parent = i),
    (u.register =
      function (
        t,
        r,
      ) {
        e[t] = [
          function (
            e,
            t,
          ) {
            t.exports =
              r;
          },
          {},
        ];
      }),
    Object.defineProperty(
      u,
      'root',
      {
        get: function () {
          return a[
            o
          ];
        },
      },
    ),
    (a[o] = u);
  for (
    var c = 0;
    c < t.length;
    c++
  )
    u(t[c]);
  if (r) {
    var f = u(r);
    'object' ==
      typeof exports &&
    'undefined' !=
      typeof module
      ? (module.exports =
          f)
      : 'function' ==
          typeof define &&
        define.amd &&
        define(
          function () {
            return f;
          },
        );
  }
})(
  {
    imzaT: [
      function (
        e,
        t,
        r,
      ) {
        e(
          'ea9b74cca40090cf',
        ).register(
          e(
            '175471d8e22905ce',
          ).getBundleURL(
            'gAkDS',
          ),
          JSON.parse(
            '["gAkDS","index.9032277f.js","hvOsp","jszip.min.56cb75cc.js"]',
          ),
        );
      },
      {
        ea9b74cca40090cf:
          '6oqja',
        '175471d8e22905ce':
          'hUXv3',
      },
    ],
    '6oqja': [
      function (
        e,
        t,
        r,
      ) {
        var o =
          new Map();
        (t.exports.register =
          function (
            e,
            t,
          ) {
            for (
              var r = 0;
              r <
              t.length -
                1;
              r += 2
            )
              o.set(
                t[
                  r
                ],
                {
                  baseUrl:
                    e,
                  path: t[
                    r +
                      1
                  ],
                },
              );
          }),
          (t.exports.resolve =
            function (
              e,
            ) {
              var t =
                o.get(
                  e,
                );
              if (
                null ==
                t
              )
                throw Error(
                  'Could not resolve bundle with id ' +
                    e,
                );
              return new URL(
                t.path,
                t.baseUrl,
              ).toString();
            });
      },
      {},
    ],
    hUXv3: [
      function (
        e,
        t,
        r,
      ) {
        var o = {};
        function n(
          e,
        ) {
          return (
            (
              '' + e
            ).replace(
              /^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,
              '$1',
            ) + '/'
          );
        }
        (r.getBundleURL =
          function (
            e,
          ) {
            var t =
              o[e];
            return (
              t ||
                ((t =
                  (function () {
                    try {
                      throw Error();
                    } catch (t) {
                      var e =
                        (
                          '' +
                          t.stack
                        ).match(
                          /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g,
                        );
                      if (
                        e
                      )
                        return n(
                          e[2],
                        );
                    }
                    return '/';
                  })()),
                (o[
                  e
                ] =
                  t)),
              t
            );
          }),
          (r.getBaseURL =
            n),
          (r.getOrigin =
            function (
              e,
            ) {
              var t =
                (
                  '' +
                  e
                ).match(
                  /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/,
                );
              if (
                !t
              )
                throw Error(
                  'Origin not found',
                );
              return t[0];
            });
      },
      {},
    ],
    gLO4P: [
      function (
        e,
        t,
        r,
      ) {
        var o = e(
          '@parcel/transformer-js/src/esmodule-helpers.js',
        );
        e(
          'typed-query-selector',
        );
        var n = e(
            'list-github-dir-content',
          ),
          a = e(
            'p-map',
          ),
          i =
            o.interopDefault(
              a,
            ),
          s = e(
            './download.js',
          ),
          l = e(
            './repository-info.js',
          ),
          u =
            o.interopDefault(
              l,
            );
        async function c(
          e,
        ) {
          let t =
            await (0,
            n.getDirectoryContentViaTreesApi)(
              e,
            );
          return t.truncated
            ? (f(
                'Warning: It’s a large repo and this it take a long while just to download the list of files. You might want to use "git sparse checkout" instead.',
              ),
              (0,
              n.getDirectoryContentViaContentsApi)(
                e,
              ))
            : t;
        }
        function f(
          e,
          ...t
        ) {
          let r =
            document.querySelector(
              '.status',
            );
          if (e) {
            let t =
              document.createElement(
                'div',
              );
            (t.textContent =
              e),
              r.prepend(
                t,
              );
          } else
            r.textContent =
              e ??
              '';
          console.log(
            e,
            ...t,
          );
        }
        async function p() {
          return new (await e(
            '3a6084253342d32e',
          ))();
        }
        let d =
          /malware|virus|trojan/i;
        (async function () {
          f();
          let e =
              p(),
            t =
              document.querySelector(
                'input#token',
              ),
            r =
              localStorage.getItem(
                'token',
              );
          r &&
            (t.value =
              r),
            t.addEventListener(
              'input',
              () => {
                localStorage.setItem(
                  'token',
                  t.value,
                );
              },
              {
                passive:
                  !0,
              },
            );
          let o =
              new URLSearchParams(
                location.search,
              ),
            n =
              o.get(
                'url',
              );
          if (
            ((document.querySelector(
              'input#url',
            ).value =
              n ??
              ''),
            !n)
          )
            return;
          if (
            d.test(
              n,
            )
          ) {
            f(
              'Virus, malware, trojans are not allowed',
            );
            return;
          }
          if (
            !navigator.onLine
          )
            throw (
              (f(
                '⚠ You are offline.',
              ),
              Error(
                'You are offline',
              ))
            );
          let a =
            await (0,
            u.default)(
              n,
            );
          if (
            'error' in
            a
          ) {
            'NOT_A_REPOSITORY' ===
            a.error
              ? f(
                  '⚠ Not a repository',
                )
              : 'NOT_A_DIRECTORY' ===
                a.error
              ? f(
                  '⚠ Not a directory',
                )
              : 'REPOSITORY_NOT_FOUND' ===
                a.error
              ? f(
                  '⚠ Repository not found. If it’s private, you should enter a token that can access it.',
                )
              : f(
                  '⚠ Unknown error',
                );
            return;
          }
          let {
            user: l,
            repository:
              h,
            gitReference:
              m,
            directory:
              y,
            isPrivate:
              g,
          } = a;
          if (
            (f(
              `Repo: ${l}/${h}
Directory: /${y}`,
              {
                source:
                  {
                    user: l,
                    repository:
                      h,
                    gitReference:
                      m,
                    directory:
                      y,
                    isPrivate:
                      g,
                  },
              },
            ),
            'downloadUrl' in
              a)
          ) {
            f(
              'Downloading the entire repository directly from GitHub',
            ),
              (window.location.href =
                a.downloadUrl);
            return;
          }
          f(
            'Retrieving directory info',
          );
          let w =
            await c(
              {
                user: l,
                repository:
                  h,
                ref: m,
                directory:
                  y,
                token:
                  localStorage.getItem(
                    'token',
                  ) ??
                  void 0,
                getFullData:
                  !0,
              },
            );
          if (
            0 ===
            w.length
          ) {
            f(
              'No files to download',
            );
            return;
          }
          if (
            w.some(
              (e) =>
                d.test(
                  e.path,
                ),
            )
          ) {
            f(
              'Virus, malware, trojans are not allowed',
            );
            return;
          }
          f(
            `Will download ${w.length} files`,
          );
          let b =
              new AbortController(),
            v =
              b.signal,
            T = 0;
          try {
            await (0,
            i.default)(
              w,
              async (
                t,
              ) => {
                let r =
                  (0,
                  s.downloadFile)(
                    {
                      user: l,
                      repository:
                        h,
                      reference:
                        m,
                      file: t,
                      isPrivate:
                        g,
                      signal:
                        v,
                    },
                  );
                T++,
                  f(
                    t.path,
                  ),
                  (
                    await e
                  ).file(
                    t.path.replace(
                      y +
                        '/',
                      '',
                    ),
                    r,
                    {
                      binary:
                        !0,
                    },
                  );
              },
              {
                concurrency: 20,
              },
            );
          } catch (e) {
            throw (
              ((b.abort(),
              navigator.onLine)
                ? e instanceof
                    Error &&
                  e.message.startsWith(
                    'HTTP ',
                  )
                  ? f(
                      '⚠ Could not download all files.',
                    )
                  : f(
                      '⚠ Some files were blocked from downloading, try to disable any ad blockers and refresh the page.',
                    )
                : f(
                    '⚠ Could not download all files, network connection lost.',
                  ),
              e)
            );
          }
          f(
            `Zipping ${T} files...`,
          );
          let _ =
              await e,
            j =
              await _.generateAsync(
                {
                  type: 'blob',
                },
              ),
            E =
              o.get(
                'filename',
              ) ??
              `${l} ${h} ${m} ${y}`.replace(
                /\//,
                '-',
              );
          !(function (
            e,
            t,
          ) {
            let r =
                URL.createObjectURL(
                  e,
                ),
              o =
                document.createElement(
                  'a',
                );
            (o.href =
              r),
              (o.download =
                t),
              o.click(),
              URL.revokeObjectURL(
                r,
              );
          })(
            j,
            E.endsWith(
              '.zip',
            )
              ? E
              : `${E}.zip`,
          ),
            f(
              `Downloaded ${T} files! Done!`,
            );
        })().catch(
          (e) => {
            if (
              e instanceof
              Error
            )
              switch (
                e.message
              ) {
                case 'Invalid token':
                  f(
                    '⚠ The token provided is invalid or has been revoked.',
                    {
                      token:
                        localStorage.getItem(
                          'token',
                        ),
                    },
                  );
                  break;
                case 'Rate limit exceeded':
                  f(
                    '⚠ Your token rate limit has been exceeded. Please wait or add a token',
                    {
                      token:
                        localStorage.getItem(
                          'token',
                        ),
                    },
                  );
                  break;
                default:
                  f(
                    `\u{26A0} ${e.message}`,
                    e,
                  );
              }
          },
        );
      },
      {
        'typed-query-selector':
          'hyT0C',
        'list-github-dir-content':
          '9YVya',
        'p-map':
          'iTAy0',
        './download.js':
          'gF7Lk',
        './repository-info.js':
          'jufXb',
        '3a6084253342d32e':
          '3dq3H',
        '@parcel/transformer-js/src/esmodule-helpers.js':
          'qayoQ',
      },
    ],
    hyT0C: [
      function (
        e,
        t,
        r,
      ) {
        e(
          '@parcel/transformer-js/src/esmodule-helpers.js',
        ).defineInteropFlag(
          r,
        );
      },
      {
        '@parcel/transformer-js/src/esmodule-helpers.js':
          'qayoQ',
      },
    ],
    qayoQ: [
      function (
        e,
        t,
        r,
      ) {
        (r.interopDefault =
          function (
            e,
          ) {
            return e &&
              e.__esModule
              ? e
              : {
                  default:
                    e,
                };
          }),
          (r.defineInteropFlag =
            function (
              e,
            ) {
              Object.defineProperty(
                e,
                '__esModule',
                {
                  value:
                    !0,
                },
              );
            }),
          (r.exportAll =
            function (
              e,
              t,
            ) {
              return (
                Object.keys(
                  e,
                ).forEach(
                  function (
                    r,
                  ) {
                    'default' ===
                      r ||
                      '__esModule' ===
                        r ||
                      Object.prototype.hasOwnProperty.call(
                        t,
                        r,
                      ) ||
                      Object.defineProperty(
                        t,
                        r,
                        {
                          enumerable:
                            !0,
                          get: function () {
                            return e[
                              r
                            ];
                          },
                        },
                      );
                  },
                ),
                t
              );
            }),
          (r.export =
            function (
              e,
              t,
              r,
            ) {
              Object.defineProperty(
                e,
                t,
                {
                  enumerable:
                    !0,
                  get: r,
                },
              );
            });
      },
      {},
    ],
    '9YVya': [
      function (
        e,
        t,
        r,
      ) {
        var o = e(
          '@parcel/transformer-js/src/esmodule-helpers.js',
        );
        async function n(
          e,
          t,
        ) {
          return (
            await fetch(
              `https://api.github.com/repos/${e}`,
              {
                headers:
                  t
                    ? {
                        Authorization: `Bearer ${t}`,
                      }
                    : void 0,
              },
            )
          ).json();
        }
        async function a({
          user: e,
          repository:
            t,
          ref: r = 'HEAD',
          directory:
            o,
          token: i,
          getFullData:
            s = !1,
        }) {
          let l =
              [],
            u = [],
            c =
              await n(
                `${e}/${t}/contents/${o}?ref=${r}`,
                i,
              );
          if (
            'Not Found' ===
            c.message
          )
            return [];
          if (
            c.message
          )
            throw Error(
              c.message,
            );
          for (let o of c)
            'file' ===
            o.type
              ? l.push(
                  s
                    ? o
                    : o.path,
                )
              : 'dir' ===
                  o.type &&
                u.push(
                  a(
                    {
                      user: e,
                      repository:
                        t,
                      ref: r,
                      directory:
                        o.path,
                      token:
                        i,
                      getFullData:
                        s,
                    },
                  ),
                );
          return [
            ...l,
            ...(await Promise.all(
              u,
            )),
          ].flat();
        }
        async function i({
          user: e,
          repository:
            t,
          ref: r = 'HEAD',
          directory:
            o,
          token: a,
          getFullData:
            i = !1,
        }) {
          o.endsWith(
            '/',
          ) ||
            (o +=
              '/');
          let s =
              [],
            l =
              await n(
                `${e}/${t}/git/trees/${r}?recursive=1`,
                a,
              );
          if (
            l.message
          )
            throw Error(
              l.message,
            );
          for (let e of l.tree)
            'blob' ===
              e.type &&
              e.path.startsWith(
                o,
              ) &&
              s.push(
                i
                  ? e
                  : e.path,
              );
          return (
            (s.truncated =
              l.truncated),
            s
          );
        }
        o.defineInteropFlag(
          r,
        ),
          o.export(
            r,
            'getDirectoryContentViaContentsApi',
            () => a,
          ),
          o.export(
            r,
            'getDirectoryContentViaTreesApi',
            () => i,
          );
      },
      {
        '@parcel/transformer-js/src/esmodule-helpers.js':
          'qayoQ',
      },
    ],
    iTAy0: [
      function (
        e,
        t,
        r,
      ) {
        var o = e(
          '@parcel/transformer-js/src/esmodule-helpers.js',
        );
        async function n(
          e,
          t,
          {
            concurrency:
              r = Number.POSITIVE_INFINITY,
            stopOnError:
              o = !0,
            signal:
              a,
          } = {},
        ) {
          return new Promise(
            (
              n,
              s,
            ) => {
              if (
                void 0 ===
                  e[
                    Symbol
                      .iterator
                  ] &&
                void 0 ===
                  e[
                    Symbol
                      .asyncIterator
                  ]
              )
                throw TypeError(
                  `Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`,
                );
              if (
                'function' !=
                typeof t
              )
                throw TypeError(
                  'Mapper function is required',
                );
              if (
                !(
                  (Number.isSafeInteger(
                    r,
                  ) &&
                    r >=
                      1) ||
                  r ===
                    Number.POSITIVE_INFINITY
                )
              )
                throw TypeError(
                  `Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${r}\` (${typeof r})`,
                );
              let l =
                  [],
                u =
                  [],
                c =
                  new Map(),
                f =
                  !1,
                p =
                  !1,
                d =
                  !1,
                h = 0,
                m = 0,
                y =
                  void 0 ===
                  e[
                    Symbol
                      .iterator
                  ]
                    ? e[
                        Symbol
                          .asyncIterator
                      ]()
                    : e[
                        Symbol
                          .iterator
                      ](),
                g =
                  (
                    e,
                  ) => {
                    (f =
                      !0),
                      (p =
                        !0),
                      s(
                        e,
                      );
                  };
              a &&
                (a.aborted &&
                  g(
                    a.reason,
                  ),
                a.addEventListener(
                  'abort',
                  () => {
                    g(
                      a.reason,
                    );
                  },
                ));
              let w =
                async () => {
                  if (
                    p
                  )
                    return;
                  let e =
                      await y.next(),
                    r =
                      m;
                  if (
                    (m++,
                    e.done)
                  ) {
                    if (
                      ((d =
                        !0),
                      0 ===
                        h &&
                        !p)
                    ) {
                      if (
                        !o &&
                        u.length >
                          0
                      ) {
                        g(
                          AggregateError(
                            u,
                          ),
                        );
                        return;
                      }
                      if (
                        ((p =
                          !0),
                        0 ===
                          c.size)
                      ) {
                        n(
                          l,
                        );
                        return;
                      }
                      let e =
                        [];
                      for (let [
                        t,
                        r,
                      ] of l.entries())
                        c.get(
                          t,
                        ) !==
                          i &&
                          e.push(
                            r,
                          );
                      n(
                        e,
                      );
                    }
                    return;
                  }
                  h++,
                    (async () => {
                      try {
                        let o =
                          await e.value;
                        if (
                          p
                        )
                          return;
                        let n =
                          await t(
                            o,
                            r,
                          );
                        n ===
                          i &&
                          c.set(
                            r,
                            n,
                          ),
                          (l[
                            r
                          ] =
                            n),
                          h--,
                          await w();
                      } catch (e) {
                        if (
                          o
                        )
                          g(
                            e,
                          );
                        else {
                          u.push(
                            e,
                          ),
                            h--;
                          try {
                            await w();
                          } catch (e) {
                            g(
                              e,
                            );
                          }
                        }
                      }
                    })();
                };
              (async () => {
                for (
                  let e = 0;
                  e <
                  r;
                  e++
                ) {
                  try {
                    await w();
                  } catch (e) {
                    g(
                      e,
                    );
                    break;
                  }
                  if (
                    d ||
                    f
                  )
                    break;
                }
              })();
            },
          );
        }
        function a(
          e,
          t,
          {
            concurrency:
              r = Number.POSITIVE_INFINITY,
            backpressure:
              o = r,
          } = {},
        ) {
          if (
            void 0 ===
              e[
                Symbol
                  .iterator
              ] &&
            void 0 ===
              e[
                Symbol
                  .asyncIterator
              ]
          )
            throw TypeError(
              `Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`,
            );
          if (
            'function' !=
            typeof t
          )
            throw TypeError(
              'Mapper function is required',
            );
          if (
            !(
              (Number.isSafeInteger(
                r,
              ) &&
                r >=
                  1) ||
              r ===
                Number.POSITIVE_INFINITY
            )
          )
            throw TypeError(
              `Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${r}\` (${typeof r})`,
            );
          if (
            !(
              (Number.isSafeInteger(
                o,
              ) &&
                o >=
                  r) ||
              o ===
                Number.POSITIVE_INFINITY
            )
          )
            throw TypeError(
              `Expected \`backpressure\` to be an integer from \`concurrency\` (${r}) and up or \`Infinity\`, got \`${o}\` (${typeof o})`,
            );
          return {
            async *[Symbol.asyncIterator]() {
              let n =
                  void 0 ===
                  e[
                    Symbol
                      .asyncIterator
                  ]
                    ? e[
                        Symbol
                          .iterator
                      ]()
                    : e[
                        Symbol
                          .asyncIterator
                      ](),
                a =
                  [],
                s = 0,
                l =
                  !1,
                u = 0;
              function c() {
                if (
                  l ||
                  !(
                    s <
                      r &&
                    a.length <
                      o
                  )
                )
                  return;
                let e =
                  (async () => {
                    let {
                      done: r,
                      value:
                        o,
                    } =
                      await n.next();
                    if (
                      r
                    )
                      return {
                        done: !0,
                      };
                    s++,
                      c();
                    try {
                      let r =
                        await t(
                          await o,
                          u++,
                        );
                      if (
                        (s--,
                        r ===
                          i)
                      ) {
                        let t =
                          a.indexOf(
                            e,
                          );
                        t >
                          0 &&
                          a.splice(
                            t,
                            1,
                          );
                      }
                      return (
                        c(),
                        {
                          done: !1,
                          value:
                            r,
                        }
                      );
                    } catch (e) {
                      return (
                        (l =
                          !0),
                        {
                          error:
                            e,
                        }
                      );
                    }
                  })();
                a.push(
                  e,
                );
              }
              for (
                c();
                a.length >
                0;

              ) {
                let {
                  error:
                    e,
                  done: t,
                  value:
                    r,
                } = await a[0];
                if (
                  (a.shift(),
                  e)
                )
                  throw e;
                if (
                  t
                )
                  return;
                c(),
                  r !==
                    i &&
                    (yield r);
              }
            },
          };
        }
        o.defineInteropFlag(
          r,
        ),
          o.export(
            r,
            'default',
            () => n,
          ),
          o.export(
            r,
            'pMapIterable',
            () => a,
          ),
          o.export(
            r,
            'pMapSkip',
            () => i,
          );
        let i =
          Symbol(
            'skip',
          );
      },
      {
        '@parcel/transformer-js/src/esmodule-helpers.js':
          'qayoQ',
      },
    ],
    gF7Lk: [
      function (
        e,
        t,
        r,
      ) {
        var o = e(
          '@parcel/transformer-js/src/esmodule-helpers.js',
        );
        o.defineInteropFlag(
          r,
        ),
          o.export(
            r,
            'downloadFile',
            () => p,
          );
        var n = e(
            'p-retry',
          ),
          a =
            o.interopDefault(
              n,
            ),
          i = e(
            './authenticated-fetch.js',
          ),
          s =
            o.interopDefault(
              i,
            );
        function l(
          e,
        ) {
          return e.replaceAll(
            '#',
            '%23',
          );
        }
        async function u(
          e,
        ) {
          let t =
            Number(
              e.headers.get(
                'content-length',
              ),
            );
          return (
            t >
              128 &&
            t <
              140 &&
            (
              await e
                .clone()
                .text()
            ).startsWith(
              'version https://git-lfs.github.com/spec/v1',
            )
          );
        }
        async function c({
          user: e,
          repository:
            t,
          reference:
            r,
          file: o,
          signal: n,
        }) {
          let a =
            await (0,
            s.default)(
              `https://raw.githubusercontent.com/${e}/${t}/${r}/${l(
                o.path,
              )}`,
              {
                signal:
                  n,
              },
            );
          if (!a.ok)
            throw Error(
              `HTTP ${a.statusText} for ${o.path}`,
            );
          let i =
            (await u(
              a,
            ))
              ? await (0,
                s.default)(
                  `https://media.githubusercontent.com/media/${e}/${t}/${r}/${l(
                    o.path,
                  )}`,
                  {
                    signal:
                      n,
                  },
                )
              : a;
          if (!a.ok)
            throw Error(
              `HTTP ${a.statusText} for ${o.path}`,
            );
          return i.blob();
        }
        async function f({
          file: e,
          signal: t,
        }) {
          let r =
            await (0,
            s.default)(
              e.url,
              {
                signal:
                  t,
              },
            );
          if (!r.ok)
            throw Error(
              `HTTP ${r.statusText} for ${e.path}`,
            );
          let {
            content:
              o,
          } =
            await r.json();
          return (
            await fetch(
              `data:application/octet-stream;base64,${o}`,
            )
          ).blob();
        }
        async function p({
          user: e,
          repository:
            t,
          reference:
            r,
          file: o,
          isPrivate:
            n,
          signal: i,
        }) {
          let s = {
              user: e,
              repository:
                t,
              reference:
                r,
              file: o,
              signal:
                i,
            },
            l =
              async () =>
                n
                  ? f(
                      s,
                    )
                  : c(
                      s,
                    );
          return (0,
          a.default)(
            l,
            {
              onFailedAttempt:
                (
                  e,
                ) => {
                  console.error(
                    `Error downloading ${o.path}. Attempt ${e.attemptNumber}. ${e.retriesLeft} retries left.`,
                  );
                },
            },
          );
        }
      },
      {
        'p-retry':
          'apmLG',
        './authenticated-fetch.js':
          '8PjCA',
        '@parcel/transformer-js/src/esmodule-helpers.js':
          'qayoQ',
      },
    ],
    apmLG: [
      function (
        e,
        t,
        r,
      ) {
        var o = e(
          '@parcel/transformer-js/src/esmodule-helpers.js',
        );
        o.defineInteropFlag(
          r,
        ),
          o.export(
            r,
            'AbortError',
            () => l,
          ),
          o.export(
            r,
            'default',
            () => c,
          );
        var n = e(
            'retry',
          ),
          a =
            o.interopDefault(
              n,
            ),
          i = e(
            'is-network-error',
          ),
          s =
            o.interopDefault(
              i,
            );
        class l extends Error {
          constructor(
            e,
          ) {
            super(),
              e instanceof
              Error
                ? ((this.originalError =
                    e),
                  ({
                    message:
                      e,
                  } =
                    e))
                : ((this.originalError =
                    Error(
                      e,
                    )),
                  (this.originalError.stack =
                    this.stack)),
              (this.name =
                'AbortError'),
              (this.message =
                e);
          }
        }
        let u = (
          e,
          t,
          r,
        ) => {
          let o =
            r.retries -
            (t - 1);
          return (
            (e.attemptNumber =
              t),
            (e.retriesLeft =
              o),
            e
          );
        };
        async function c(
          e,
          t,
        ) {
          return new Promise(
            (
              r,
              o,
            ) => {
              t = {
                onFailedAttempt() {},
                retries: 10,
                shouldRetry:
                  () =>
                    !0,
                ...t,
              };
              let n =
                  (0,
                  a.default).operation(
                    t,
                  ),
                i =
                  () => {
                    n.stop(),
                      o(
                        t
                          .signal
                          ?.reason,
                      );
                  };
              t.signal &&
                !t
                  .signal
                  .aborted &&
                t.signal.addEventListener(
                  'abort',
                  i,
                  {
                    once: !0,
                  },
                );
              let c =
                () => {
                  t.signal?.removeEventListener(
                    'abort',
                    i,
                  ),
                    n.stop();
                };
              n.attempt(
                async (
                  a,
                ) => {
                  try {
                    let t =
                      await e(
                        a,
                      );
                    c(),
                      r(
                        t,
                      );
                  } catch (e) {
                    try {
                      if (
                        !(
                          e instanceof
                          Error
                        )
                      )
                        throw TypeError(
                          `Non-error was thrown: "${e}". You should only throw errors.`,
                        );
                      if (
                        e instanceof
                        l
                      )
                        throw e.originalError;
                      if (
                        e instanceof
                          TypeError &&
                        !(0,
                        s.default)(
                          e,
                        )
                      )
                        throw e;
                      if (
                        (u(
                          e,
                          a,
                          t,
                        ),
                        (await t.shouldRetry(
                          e,
                        )) ||
                          (n.stop(),
                          o(
                            e,
                          )),
                        await t.onFailedAttempt(
                          e,
                        ),
                        !n.retry(
                          e,
                        ))
                      )
                        throw n.mainError();
                    } catch (e) {
                      u(
                        e,
                        a,
                        t,
                      ),
                        c(),
                        o(
                          e,
                        );
                    }
                  }
                },
              );
            },
          );
        }
      },
      {
        retry:
          'knQ2X',
        'is-network-error':
          'lvAqA',
        '@parcel/transformer-js/src/esmodule-helpers.js':
          'qayoQ',
      },
    ],
    knQ2X: [
      function (
        e,
        t,
        r,
      ) {
        t.exports =
          e(
            '4f22b206be44b97e',
          );
      },
      {
        '4f22b206be44b97e':
          '8e7jM',
      },
    ],
    '8e7jM': [
      function (
        e,
        t,
        r,
      ) {
        var o = e(
          'a628df618ac3d4',
        );
        (r.operation =
          function (
            e,
          ) {
            return new o(
              r.timeouts(
                e,
              ),
              {
                forever:
                  e &&
                  (e.forever ||
                    e.retries ===
                      1 /
                        0),
                unref:
                  e &&
                  e.unref,
                maxRetryTime:
                  e &&
                  e.maxRetryTime,
              },
            );
          }),
          (r.timeouts =
            function (
              e,
            ) {
              if (
                e instanceof
                Array
              )
                return [].concat(
                  e,
                );
              var t =
                {
                  retries: 10,
                  factor: 2,
                  minTimeout: 1e3,
                  maxTimeout:
                    1 /
                    0,
                  randomize:
                    !1,
                };
              for (var r in e)
                t[
                  r
                ] =
                  e[
                    r
                  ];
              if (
                t.minTimeout >
                t.maxTimeout
              )
                throw Error(
                  'minTimeout is greater than maxTimeout',
                );
              for (
                var o =
                    [],
                  n = 0;
                n <
                t.retries;
                n++
              )
                o.push(
                  this.createTimeout(
                    n,
                    t,
                  ),
                );
              return (
                e &&
                  e.forever &&
                  !o.length &&
                  o.push(
                    this.createTimeout(
                      n,
                      t,
                    ),
                  ),
                o.sort(
                  function (
                    e,
                    t,
                  ) {
                    return (
                      e -
                      t
                    );
                  },
                ),
                o
              );
            }),
          (r.createTimeout =
            function (
              e,
              t,
            ) {
              return Math.min(
                Math.round(
                  (t.randomize
                    ? Math.random() +
                      1
                    : 1) *
                    Math.max(
                      t.minTimeout,
                      1,
                    ) *
                    Math.pow(
                      t.factor,
                      e,
                    ),
                ),
                t.maxTimeout,
              );
            }),
          (r.wrap =
            function (
              e,
              t,
              o,
            ) {
              if (
                (t instanceof
                  Array &&
                  ((o =
                    t),
                  (t =
                    null)),
                !o)
              )
                for (var n in ((o =
                  []),
                e))
                  'function' ==
                    typeof e[
                      n
                    ] &&
                    o.push(
                      n,
                    );
              for (
                var a = 0;
                a <
                o.length;
                a++
              ) {
                var i =
                    o[
                      a
                    ],
                  s =
                    e[
                      i
                    ];
                (e[
                  i
                ] =
                  function (
                    o,
                  ) {
                    var n =
                        r.operation(
                          t,
                        ),
                      a =
                        Array.prototype.slice.call(
                          arguments,
                          1,
                        ),
                      i =
                        a.pop();
                    a.push(
                      function (
                        e,
                      ) {
                        n.retry(
                          e,
                        ) ||
                          (e &&
                            (arguments[0] =
                              n.mainError()),
                          i.apply(
                            this,
                            arguments,
                          ));
                      },
                    ),
                      n.attempt(
                        function () {
                          o.apply(
                            e,
                            a,
                          );
                        },
                      );
                  }.bind(
                    e,
                    s,
                  )),
                  (e[
                    i
                  ].options =
                    t);
              }
            });
      },
      {
        a628df618ac3d4:
          '63c1u',
      },
    ],
    '63c1u': [
      function (
        e,
        t,
        r,
      ) {
        function o(
          e,
          t,
        ) {
          'boolean' ==
            typeof t &&
            (t = {
              forever:
                t,
            }),
            (this._originalTimeouts =
              JSON.parse(
                JSON.stringify(
                  e,
                ),
              )),
            (this._timeouts =
              e),
            (this._options =
              t ||
              {}),
            (this._maxRetryTime =
              (t &&
                t.maxRetryTime) ||
              1 /
                0),
            (this._fn =
              null),
            (this._errors =
              []),
            (this._attempts = 1),
            (this._operationTimeout =
              null),
            (this._operationTimeoutCb =
              null),
            (this._timeout =
              null),
            (this._operationStart =
              null),
            (this._timer =
              null),
            this
              ._options
              .forever &&
              (this._cachedTimeouts =
                this._timeouts.slice(
                  0,
                ));
        }
        (t.exports =
          o),
          (o.prototype.reset =
            function () {
              (this._attempts = 1),
                (this._timeouts =
                  this._originalTimeouts.slice(
                    0,
                  ));
            }),
          (o.prototype.stop =
            function () {
              this
                ._timeout &&
                clearTimeout(
                  this
                    ._timeout,
                ),
                this
                  ._timer &&
                  clearTimeout(
                    this
                      ._timer,
                  ),
                (this._timeouts =
                  []),
                (this._cachedTimeouts =
                  null);
            }),
          (o.prototype.retry =
            function (
              e,
            ) {
              if (
                (this
                  ._timeout &&
                  clearTimeout(
                    this
                      ._timeout,
                  ),
                !e)
              )
                return !1;
              var t =
                new Date().getTime();
              if (
                e &&
                t -
                  this
                    ._operationStart >=
                  this
                    ._maxRetryTime
              )
                return (
                  this._errors.push(
                    e,
                  ),
                  this._errors.unshift(
                    Error(
                      'RetryOperation timeout occurred',
                    ),
                  ),
                  !1
                );
              this._errors.push(
                e,
              );
              var r =
                this._timeouts.shift();
              if (
                void 0 ===
                r
              ) {
                if (
                  !this
                    ._cachedTimeouts
                )
                  return !1;
                this._errors.splice(
                  0,
                  this
                    ._errors
                    .length -
                    1,
                ),
                  (r =
                    this._cachedTimeouts.slice(
                      -1,
                    ));
              }
              var o =
                this;
              return (
                (this._timer =
                  setTimeout(
                    function () {
                      o._attempts++,
                        o._operationTimeoutCb &&
                          ((o._timeout =
                            setTimeout(
                              function () {
                                o._operationTimeoutCb(
                                  o._attempts,
                                );
                              },
                              o._operationTimeout,
                            )),
                          o
                            ._options
                            .unref &&
                            o._timeout.unref()),
                        o._fn(
                          o._attempts,
                        );
                    },
                    r,
                  )),
                this
                  ._options
                  .unref &&
                  this._timer.unref(),
                !0
              );
            }),
          (o.prototype.attempt =
            function (
              e,
              t,
            ) {
              (this._fn =
                e),
                t &&
                  (t.timeout &&
                    (this._operationTimeout =
                      t.timeout),
                  t.cb &&
                    (this._operationTimeoutCb =
                      t.cb));
              var r =
                this;
              this
                ._operationTimeoutCb &&
                (this._timeout =
                  setTimeout(
                    function () {
                      r._operationTimeoutCb();
                    },
                    r._operationTimeout,
                  )),
                (this._operationStart =
                  new Date().getTime()),
                this._fn(
                  this
                    ._attempts,
                );
            }),
          (o.prototype.try =
            function (
              e,
            ) {
              console.log(
                'Using RetryOperation.try() is deprecated',
              ),
                this.attempt(
                  e,
                );
            }),
          (o.prototype.start =
            function (
              e,
            ) {
              console.log(
                'Using RetryOperation.start() is deprecated',
              ),
                this.attempt(
                  e,
                );
            }),
          (o.prototype.start =
            o.prototype.try),
          (o.prototype.errors =
            function () {
              return this
                ._errors;
            }),
          (o.prototype.attempts =
            function () {
              return this
                ._attempts;
            }),
          (o.prototype.mainError =
            function () {
              if (
                0 ===
                this
                  ._errors
                  .length
              )
                return null;
              for (
                var e =
                    {},
                  t =
                    null,
                  r = 0,
                  o = 0;
                o <
                this
                  ._errors
                  .length;
                o++
              ) {
                var n =
                    this
                      ._errors[
                      o
                    ],
                  a =
                    n.message,
                  i =
                    (e[
                      a
                    ] ||
                      0) +
                    1;
                (e[
                  a
                ] =
                  i),
                  i >=
                    r &&
                    ((t =
                      n),
                    (r =
                      i));
              }
              return t;
            });
      },
      {},
    ],
    lvAqA: [
      function (
        e,
        t,
        r,
      ) {
        var o = e(
          '@parcel/transformer-js/src/esmodule-helpers.js',
        );
        o.defineInteropFlag(
          r,
        ),
          o.export(
            r,
            'default',
            () => s,
          );
        let n =
            Object
              .prototype
              .toString,
          a = (e) =>
            '[object Error]' ===
            n.call(
              e,
            ),
          i =
            new Set(
              [
                'network error',
                'Failed to fetch',
                'NetworkError when attempting to fetch resource.',
                'The Internet connection appears to be offline.',
                'Load failed',
                'Network request failed',
                'fetch failed',
                'terminated',
              ],
            );
        function s(
          e,
        ) {
          return (
            !!(
              e &&
              a(e)
            ) &&
            'TypeError' ===
              e.name &&
            'string' ==
              typeof e.message &&
            ('Load failed' ===
            e.message
              ? void 0 ===
                e.stack
              : i.has(
                  e.message,
                ))
          );
        }
      },
      {
        '@parcel/transformer-js/src/esmodule-helpers.js':
          'qayoQ',
      },
    ],
    '8PjCA': [
      function (
        e,
        t,
        r,
      ) {
        var o = e(
          '@parcel/transformer-js/src/esmodule-helpers.js',
        );
        async function n(
          e,
          {
            signal:
              t,
            method:
              r,
          } = {},
        ) {
          let o =
              globalThis.localStorage?.getItem(
                'token',
              ),
            a =
              await fetch(
                e,
                {
                  method:
                    r,
                  signal:
                    t,
                  ...(o
                    ? {
                        headers:
                          {
                            Authorization: `Bearer ${o}`,
                          },
                      }
                    : {}),
                },
              );
          switch (
            a.status
          ) {
            case 401:
              throw Error(
                'Invalid token',
              );
            case 403:
            case 429:
              if (
                '0' ===
                a.headers.get(
                  'X-RateLimit-Remaining',
                )
              )
                throw Error(
                  'Rate limit exceeded',
                );
          }
          return a;
        }
        o.defineInteropFlag(
          r,
        ),
          o.export(
            r,
            'default',
            () => n,
          );
      },
      {
        '@parcel/transformer-js/src/esmodule-helpers.js':
          'qayoQ',
      },
    ],
    jufXb: [
      function (
        e,
        t,
        r,
      ) {
        var o = e(
          '@parcel/transformer-js/src/esmodule-helpers.js',
        );
        o.defineInteropFlag(
          r,
        ),
          o.export(
            r,
            'default',
            () => s,
          );
        var n = e(
            './authenticated-fetch.js',
          ),
          a =
            o.interopDefault(
              n,
            );
        async function i(
          e,
          t,
          r,
        ) {
          for (
            let o = 0;
            o <
            r.length;
            o++
          ) {
            let n =
              r
                .slice(
                  0,
                  o +
                    1,
                )
                .join(
                  '/',
                );
            if (
              await l(
                e,
                t,
                n,
              )
            )
              return {
                gitReference:
                  n,
                directory:
                  r
                    .slice(
                      o +
                        1,
                    )
                    .join(
                      '/',
                    ),
              };
          }
        }
        async function s(
          e,
        ) {
          let [
            ,
            t,
            r,
            o,
            ...n
          ] =
            decodeURIComponent(
              new URL(
                e,
              )
                .pathname,
            )
              .replace(
                /[/]{2,}/,
                '/',
              )
              .replace(
                /[/]$/,
                '',
              )
              .split(
                '/',
              );
          if (
            !t ||
            !r
          )
            return {
              error:
                'NOT_A_REPOSITORY',
            };
          if (
            o &&
            'tree' !==
              o
          )
            return {
              error:
                'NOT_A_DIRECTORY',
            };
          let s =
            await (0,
            a.default)(
              `https://api.github.com/repos/${t}/${r}`,
            );
          if (
            404 ===
            s.status
          )
            return {
              error:
                'REPOSITORY_NOT_FOUND',
            };
          let {
            private:
              l,
          } =
            await s.json();
          if (
            0 ===
            n.length
          )
            return {
              user: t,
              repository:
                r,
              directory:
                '',
              isPrivate:
                l,
              downloadUrl: `https://api.github.com/repos/${t}/${r}/zipball`,
            };
          if (
            1 ===
            n.length
          )
            return {
              user: t,
              repository:
                r,
              gitReference:
                n[0],
              directory:
                '',
              isPrivate:
                l,
              downloadUrl: `https://api.github.com/repos/${t}/${r}/zipball/${n[0]}`,
            };
          let u =
            await i(
              t,
              r,
              n,
            );
          return u
            ? {
                user: t,
                repository:
                  r,
                isPrivate:
                  l,
                ...u,
              }
            : {
                error:
                  'BRANCH_NOT_FOUND',
              };
        }
        async function l(
          e,
          t,
          r,
        ) {
          let o = `https://api.github.com/repos/${e}/${t}/commits/${r}?per_page=1`;
          return (
            await (0,
            a.default)(
              o,
              {
                method:
                  'HEAD',
              },
            )
          ).ok;
        }
      },
      {
        './authenticated-fetch.js':
          '8PjCA',
        '@parcel/transformer-js/src/esmodule-helpers.js':
          'qayoQ',
      },
    ],
    '3dq3H': [
      function (
        e,
        t,
        r,
      ) {
        t.exports =
          e(
            '2fb7a8a63f385dce',
          )(
            e(
              '5ff594f85ace2a66',
            ).resolve(
              'hvOsp',
            ),
          ).then(
            () =>
              t.bundle.root(
                'eluqN',
              ),
          );
      },
      {
        '2fb7a8a63f385dce':
          '6i7Ox',
        '5ff594f85ace2a66':
          '6oqja',
      },
    ],
    '6i7Ox': [
      function (
        e,
        t,
        r,
      ) {
        var o = e(
          'ca2a84f7fa4a3bb0',
        );
        t.exports =
          o(
            function (
              e,
            ) {
              return new Promise(
                function (
                  t,
                  r,
                ) {
                  if (
                    []
                      .concat(
                        document.getElementsByTagName(
                          'script',
                        ),
                      )
                      .some(
                        function (
                          t,
                        ) {
                          return (
                            t.src ===
                            e
                          );
                        },
                      )
                  ) {
                    t();
                    return;
                  }
                  var o =
                    document.createElement(
                      'link',
                    );
                  (o.href =
                    e),
                    (o.rel =
                      'preload'),
                    (o.as =
                      'script'),
                    document.head.appendChild(
                      o,
                    );
                  var n =
                    document.createElement(
                      'script',
                    );
                  (n.async =
                    !0),
                    (n.type =
                      'text/javascript'),
                    (n.src =
                      e),
                    (n.onerror =
                      function (
                        t,
                      ) {
                        var o =
                          TypeError(
                            'Failed to fetch dynamically imported module: '
                              .concat(
                                e,
                                '. Error: ',
                              )
                              .concat(
                                t.message,
                              ),
                          );
                        (n.onerror =
                          n.onload =
                            null),
                          n.remove(),
                          r(
                            o,
                          );
                      }),
                    (n.onload =
                      function () {
                        (n.onerror =
                          n.onload =
                            null),
                          t();
                      }),
                    document
                      .getElementsByTagName(
                        'head',
                      )[0]
                      .appendChild(
                        n,
                      );
                },
              );
            },
          );
      },
      {
        ca2a84f7fa4a3bb0:
          'jQnyX',
      },
    ],
    jQnyX: [
      function (
        e,
        t,
        r,
      ) {
        var o = {},
          n = {},
          a = {};
        t.exports =
          function (
            e,
            t,
          ) {
            return function (
              r,
            ) {
              var i =
                (function (
                  e,
                ) {
                  switch (
                    e
                  ) {
                    case 'preload':
                      return n;
                    case 'prefetch':
                      return a;
                    default:
                      return o;
                  }
                })(
                  t,
                );
              return i[
                r
              ]
                ? i[
                    r
                  ]
                : (i[
                    r
                  ] =
                    e
                      .apply(
                        null,
                        arguments,
                      )
                      .catch(
                        function (
                          e,
                        ) {
                          throw (
                            (delete i[
                              r
                            ],
                            e)
                          );
                        },
                      ));
            };
          };
      },
      {},
    ],
  },
  [
    'imzaT',
    'gLO4P',
  ],
  'gLO4P',
  'parcelRequire7d3c',
);
//# sourceMappingURL=index.9032277f.js.map
