(function(g) {
    var window = this;
    'use strict';
    var Z7 = function(a) {
            g.Aj(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Qa()).toString(36));
            return a
        },
        $7 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.eha(a.u, b, c)
        },
        Mkb = function(a) {
            if (a instanceof g.um) return a;
            if ("function" == typeof a.jk) return a.jk(!1);
            if (g.Ha(a)) {
                var b = 0,
                    c = new g.um;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.L2;
                        if (b in a) return g.vm(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Nkb = function(a, b, c) {
            if (g.Ha(a)) g.Gb(a, b, c);
            else
                for (a = Mkb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        Okb = function(a, b) {
            var c = [];
            Nkb(b, function(d) {
                try {
                    var e = g.So.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.Lla(e) && c.push(d)
            }, a);
            return c
        },
        Pkb = function(a, b) {
            Okb(a, b).forEach(function(c) {
                g.So.prototype.remove.call(this, c)
            }, a)
        },
        Qkb = function(a) {
            if (a.oa) {
                if (a.oa.locationOverrideToken) return {
                    locationOverrideToken: a.oa.locationOverrideToken
                };
                if (null != a.oa.latitudeE7 && null != a.oa.longitudeE7) return {
                    latitudeE7: a.oa.latitudeE7,
                    longitudeE7: a.oa.longitudeE7
                }
            }
            return null
        },
        Rkb = function(a, b) {
            g.kb(a, b) || a.push(b)
        },
        Skb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Tkb = function(a, b) {
            return g.Mc(a, b)
        },
        Ukb = function(a) {
            try {
                return g.Da.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        a8 = function(a) {
            if (g.Da.JSON) try {
                return g.Da.JSON.parse(a)
            } catch (b) {}
            return Ukb(a)
        },
        Vkb = function(a, b, c, d) {
            var e = new g.sj(null);
            a && g.tj(e, a);
            b && g.uj(e, b);
            c && g.vj(e, c);
            d && (e.B = d);
            return e
        },
        b8 = function(a, b) {
            g.Qz[a] = !0;
            var c = g.Oz();
            c && c.publish.apply(c, arguments);
            g.Qz[a] = !1
        },
        c8 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.zo;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", Wkb(this, a.capabilities || ""), Xkb(this, a.compatibleSenderThemes || ""), Ykb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        Wkb = function(a, b) {
            a.capabilities.clear();
            g.zm(b.split(","), g.Pa(Tkb, Zkb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        Xkb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.zm(b.split(","), g.Pa(Tkb, $kb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        Ykb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        d8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        e8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        alb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        blb = function(a) {
            return new d8(a)
        },
        clb = function(a) {
            return Array.isArray(a) ? g.Eg(a, blb) : []
        },
        f8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        dlb = function(a) {
            return Array.isArray(a) ? "[" + g.Eg(a, f8).join(",") + "]" : "null"
        },
        elb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        flb = function(a) {
            return g.Eg(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        glb = function(a, b) {
            return g.ib(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        g8 = function(a, b) {
            return g.ib(a, function(c) {
                return e8(c, b)
            })
        },
        hlb = function() {
            var a = (0, g.NA)();
            a && Pkb(a, a.j.jk(!0))
        },
        h8 = function() {
            var a = g.QA("yt-remote-connected-devices") || [];
            g.Db(a);
            return a
        },
        ilb = function(a) {
            if (g.lb(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Eg(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        jlb = function(a) {
            g.PA("yt-remote-connected-devices", a, 86400)
        },
        i8 = function() {
            if (klb) return klb;
            var a = g.QA("yt-remote-device-id");
            a || (a = elb(), g.PA("yt-remote-device-id", a, 31536E3));
            for (var b = h8(), c = 1, d = a; g.kb(b, d);) c++, d = a + "#" + c;
            return klb = d
        },
        llb = function() {
            var a = h8(),
                b = i8();
            g.SA() && g.Fb(a, b);
            a = ilb(a);
            if (g.lb(a)) try {
                g.Kw("remote_sid")
            } catch (c) {} else try {
                g.Iw("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        mlb = function() {
            return g.QA("yt-remote-session-browser-channel")
        },
        nlb = function() {
            return g.QA("yt-remote-local-screens") || []
        },
        olb = function() {
            g.PA("yt-remote-lounge-token-expiration", !0, 86400)
        },
        plb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Eg(nlb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Eg(a, function(d) {
                    return d.loungeToken
                });
            g.Nk(c, function(d) {
                return !g.kb(b, d)
            }) && olb();
            g.PA("yt-remote-local-screens", a, 31536E3)
        },
        j8 = function(a) {
            a || (g.RA("yt-remote-session-screen-id"), g.RA("yt-remote-session-video-id"));
            llb();
            a = h8();
            g.ob(a, i8());
            jlb(a)
        },
        qlb = function() {
            if (!k8) {
                var a = g.ap();
                a && (k8 = new g.Po(a))
            }
        },
        rlb = function() {
            qlb();
            return k8 ? !!k8.get("yt-remote-use-staging-server") : !1
        },
        slb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        tlb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        ulb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        l8 = function(a) {
            a.length ? vlb(a.shift(), function() {
                l8(a)
            }) : wlb()
        },
        xlb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        vlb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Vi(d, g.Fd(a));
            (document.head || document.documentElement).appendChild(d)
        },
        ylb = function() {
            var a = slb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        wlb = function() {
            var a = ulb();
            a && a(!1, "No cast extension found")
        },
        Alb = function() {
            if (zlb) {
                var a = 2,
                    b = ulb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                vlb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", wlb, c)
            }
        },
        Blb = function() {
            Alb();
            var a = ylb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            l8(a)
        },
        Dlb = function() {
            Alb();
            var a = ylb();
            a.push.apply(a, g.u(Clb.map(xlb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            l8(a)
        },
        Elb = function() {
            this.j = m8();
            this.j.qo("/client_streamz/youtube/living_room/mdx/channel/opened", {
                fh: 3,
                eh: "channel_type"
            })
        },
        Flb = function(a, b) {
            a.j.Ep("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        Glb = function() {
            this.j = m8();
            this.j.qo("/client_streamz/youtube/living_room/mdx/channel/closed", {
                fh: 3,
                eh: "channel_type"
            })
        },
        Hlb = function(a, b) {
            a.j.Ep("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        Ilb = function() {
            this.j = m8();
            this.j.qo("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                fh: 3,
                eh: "channel_type"
            })
        },
        Jlb = function(a, b) {
            a.j.Ep("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        Klb = function() {
            this.j = m8();
            this.j.qo("/client_streamz/youtube/living_room/mdx/channel/error", {
                fh: 3,
                eh: "channel_type"
            })
        },
        Llb = function(a, b) {
            a.j.Ep("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        Mlb = function() {
            this.j = m8();
            this.j.qo("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        Nlb = function() {
            this.j = m8();
            this.j.qo("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        n8 = function(a, b, c) {
            g.D.call(this);
            this.I = null != c ? (0, g.Oa)(a, c) : a;
            this.Hi = b;
            this.D = (0, g.Oa)(this.UY, this);
            this.j = !1;
            this.u = 0;
            this.B = this.Dc = null;
            this.C = []
        },
        o8 = function(a, b, c) {
            g.D.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Hi = b;
            this.B = null;
            this.j = !1;
            this.u = 0;
            this.Dc = null
        },
        Olb = function(a) {
            a.Dc = g.sf(function() {
                a.Dc = null;
                a.j && !a.u && (a.j = !1, Olb(a))
            }, a.Hi);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        p8 = function() {},
        Plb = function() {
            g.eb.call(this, "p")
        },
        Qlb = function() {
            g.eb.call(this, "o")
        },
        Slb = function() {
            return Rlb = Rlb || new g.pd
        },
        Tlb = function(a) {
            g.eb.call(this, "serverreachability", a)
        },
        q8 = function(a) {
            var b = Slb();
            b.dispatchEvent(new Tlb(b, a))
        },
        Ulb = function(a) {
            g.eb.call(this, "statevent", a)
        },
        r8 = function(a) {
            var b = Slb();
            b.dispatchEvent(new Ulb(b, a))
        },
        Vlb = function(a, b, c, d) {
            g.eb.call(this, "timingevent", a);
            this.size = b;
            this.iz = d
        },
        s8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Da.setTimeout(function() {
                a()
            }, b)
        },
        Wlb = function() {},
        t8 = function(a, b, c, d) {
            this.D = a;
            this.C = b;
            this.Fc = c;
            this.yc = d || 1;
            this.ib = new g.Fj(this);
            this.Hb = 45E3;
            a = g.oI ? 125 : void 0;
            this.kb = new g.rf(a);
            this.Ma = null;
            this.B = !1;
            this.T = this.bb = this.J = this.Ra = this.Aa = this.Tb = this.Y = null;
            this.oa = [];
            this.j = null;
            this.ma = 0;
            this.I = this.ya = null;
            this.Rb = -1;
            this.Ka = !1;
            this.wb = 0;
            this.Xa = null;
            this.vc = this.Sa = this.ac = this.Fa = !1;
            this.u = new Xlb
        },
        Xlb = function() {
            this.B = null;
            this.j = "";
            this.u = !1
        },
        Zlb = function(a, b, c) {
            a.Ra = 1;
            a.J = Z7(b.clone());
            a.T = c;
            a.Fa = !0;
            Ylb(a, null)
        },
        Ylb = function(a, b) {
            a.Aa = Date.now();
            u8(a);
            a.bb = a.J.clone();
            $7(a.bb, "t", a.yc);
            a.ma = 0;
            var c = a.D.Ra;
            a.u = new Xlb;
            a.j = $lb(a.D, c ? b : null, !a.T);
            0 < a.wb && (a.Xa = new o8((0, g.Oa)(a.MP, a, a.j), a.wb));
            a.ib.Qa(a.j, "readystatechange", a.XY);
            b = a.Ma ? g.Xc(a.Ma) : {};
            a.T ? (a.ya || (a.ya = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.bb, a.ya, a.T, b)) : (a.ya = "GET", a.j.send(a.bb, a.ya, null, b));
            q8(1)
        },
        amb = function(a) {
            return a.j ? "GET" == a.ya && 2 != a.Ra && a.D.ke : !1
        },
        emb = function(a, b, c) {
            for (var d = !0, e; !a.Ka && a.ma < c.length;)
                if (e = bmb(a, c), e == v8) {
                    4 ==
                        b && (a.I = 4, r8(14), d = !1);
                    break
                } else if (e == cmb) {
                a.I = 4;
                r8(15);
                d = !1;
                break
            } else dmb(a, e);
            amb(a) && e != v8 && e != cmb && (a.u.j = "", a.ma = 0);
            4 != b || 0 != c.length || a.u.u || (a.I = 1, r8(16), d = !1);
            a.B = a.B && d;
            d ? 0 < c.length && !a.vc && (a.vc = !0, a.D.FM(a)) : (w8(a), x8(a))
        },
        bmb = function(a, b) {
            var c = a.ma,
                d = b.indexOf("\n", c);
            if (-1 == d) return v8;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return cmb;
            d += 1;
            if (d + c > b.length) return v8;
            b = b.slice(d, d + c);
            a.ma = d + c;
            return b
        },
        u8 = function(a) {
            a.Tb = Date.now() + a.Hb;
            fmb(a, a.Hb)
        },
        fmb = function(a, b) {
            if (null != a.Y) throw Error("WatchDog timer not null");
            a.Y = s8((0, g.Oa)(a.VY, a), b)
        },
        y8 = function(a) {
            a.Y && (g.Da.clearTimeout(a.Y), a.Y = null)
        },
        x8 = function(a) {
            a.D.Rg() || a.Ka || gmb(a.D, a)
        },
        w8 = function(a) {
            y8(a);
            g.$a(a.Xa);
            a.Xa = null;
            a.kb.stop();
            a.ib.cg();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        dmb = function(a, b) {
            try {
                var c = a.D;
                if (0 != c.qh && (c.j == a || hmb(c.u, a)))
                    if (!a.Sa && hmb(c.u, a) && 3 == c.qh) {
                        try {
                            var d = c.Gf.j.parse(b)
                        } catch (z) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.T) {
                                    if (c.j)
                                        if (c.j.Aa + 3E3 < a.Aa) z8(c), A8(c);
                                        else break a;
                                    imb(c);
                                    r8(18)
                                }
                            }
                            else c.Rd = e[1], 0 < c.Rd - c.Sa && 37500 > e[2] && c.kb && 0 == c.oa && !c.ma && (c.ma = s8((0, g.Oa)(c.YY, c), 6E3));
                            if (1 >= jmb(c.u) && c.Vc) {
                                try {
                                    c.Vc()
                                } catch (z) {}
                                c.Vc = void 0
                            }
                        } else B8(c, 11)
                    } else if ((a.Sa || c.j == a) && z8(c), !g.Pb(b))
                    for (e = c.Gf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Sa = f[0];
                        f = f[1];
                        if (2 == c.qh)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.vc = f[2];
                                var h = f[3];
                                null != h && (c.NP = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.bb = 1.5 * l);
                                d = c;
                                var m = a.dL();
                                if (m) {
                                    var n = g.ki(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.Rb(n, "spdy") || g.Rb(n, "quic") || g.Rb(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (kmb(p, p.u), p.u = null))
                                    }
                                    if (d.Fa) {
                                        var q = g.ki(m, "X-HTTP-Session-Id");
                                        q && (d.je = q, g.Aj(d.Ma, d.Fa, q))
                                    }
                                }
                                c.qh = 3;
                                c.D && c.D.TP();
                                c.Mc && (c.Pd = Date.now() - a.Aa);
                                d = c;
                                var r = a;
                                d.Bd = lmb(d, d.Ra ? d.vc : null, d.yc);
                                if (r.Sa) {
                                    mmb(d.u,
                                        r);
                                    var w = r,
                                        x = d.bb;
                                    x && w.setTimeout(x);
                                    w.Y && (y8(w), u8(w));
                                    d.j = r
                                } else nmb(d);
                                0 < c.B.length && C8(c)
                            } else "stop" != f[0] && "close" != f[0] || B8(c, 7);
                        else 3 == c.qh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? B8(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.SP(f), c.oa = 0)
                    }
                q8(4)
            } catch (z) {}
        },
        omb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        pmb = function(a) {
            this.D = a || 10;
            g.Da.PerformanceNavigationTiming ? (a = g.Da.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Da.chrome && g.Da.chrome.loadTimes && g.Da.chrome.loadTimes() && g.Da.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = a ? this.D : 1;
            this.j = null;
            1 < this.C && (this.j = new Set);
            this.u = null;
            this.B = []
        },
        qmb = function(a) {
            return a.u ? !0 : a.j ? a.j.size >= a.C : !1
        },
        jmb = function(a) {
            return a.u ? 1 : a.j ? a.j.size : 0
        },
        hmb = function(a, b) {
            return a.u ? a.u == b : a.j ? a.j.has(b) : !1
        },
        kmb =
        function(a, b) {
            a.j ? a.j.add(b) : a.u = b
        },
        mmb = function(a, b) {
            a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        rmb = function(a) {
            if (null != a.u) return a.B.concat(a.u.oa);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.B;
                a = g.t(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.oa);
                return b
            }
            return g.sb(a.B)
        },
        smb = function(a, b) {
            var c = new Wlb;
            if (g.Da.Image) {
                var d = new Image;
                d.onload = g.Pa(D8, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.Pa(D8, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.Pa(D8, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.Pa(D8, c, d, "TestLoadImage: timeout", !1, b);
                g.Da.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        D8 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        tmb = function() {
            this.j = new p8
        },
        umb = function(a, b, c) {
            var d = c || "";
            try {
                g.rj(a, function(e, f) {
                    var h = e;
                    g.Ia(e) && (h = g.Gh(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        E8 = function(a, b, c) {
            return c && c.N2 ? c.N2[a] || b : b
        },
        vmb = function(a) {
            this.B = [];
            this.vc = this.Bd = this.Ma = this.yc = this.j = this.je = this.Fa = this.Ka = this.J = this.Tb = this.Y = null;
            this.wf = this.Xa = 0;
            this.uf = E8("failFast", !1, a);
            this.kb = this.ma = this.T = this.I = this.D = null;
            this.Fc = !0;
            this.Rd = this.Sa = -1;
            this.ac = this.oa = this.Aa = 0;
            this.tf = E8("baseRetryDelayMs", 5E3, a);
            this.Hf = E8("retryDelaySeedMs", 1E4, a);
            this.vf = E8("forwardChannelMaxRetries", 2, a);
            this.Jd = E8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.ge = a && a.Afb || void 0;
            this.ke = a && a.yfb || !1;
            this.bb = void 0;
            this.Ra = a && a.N7 || !1;
            this.C = "";
            this.u = new pmb(a &&
                a.ldb);
            this.Gf = new tmb;
            this.Hb = a && a.Adb || !1;
            this.wb = a && a.rdb || !1;
            this.Hb && this.wb && (this.wb = !1);
            this.Jf = a && a.fdb || !1;
            a && a.Cdb && (this.Fc = !1);
            this.Mc = !this.Hb && this.Fc && a && a.pdb || !1;
            this.Vc = void 0;
            this.Pd = 0;
            this.ib = !1;
            this.Rb = this.ya = null
        },
        A8 = function(a) {
            a.j && (wmb(a), a.j.cancel(), a.j = null)
        },
        xmb = function(a) {
            A8(a);
            a.T && (g.Da.clearTimeout(a.T), a.T = null);
            z8(a);
            a.u.cancel();
            a.I && ("number" === typeof a.I && g.Da.clearTimeout(a.I), a.I = null)
        },
        C8 = function(a) {
            qmb(a.u) || a.I || (a.I = !0, g.df(a.PP, a), a.Aa = 0)
        },
        zmb = function(a, b) {
            if (jmb(a.u) >= a.u.C - (a.I ? 1 : 0)) return !1;
            if (a.I) return a.B = b.oa.concat(a.B), !0;
            if (1 == a.qh || 2 == a.qh || a.Aa >= (a.uf ? 0 : a.vf)) return !1;
            a.I = s8((0, g.Oa)(a.PP, a, b), ymb(a, a.Aa));
            a.Aa++;
            return !0
        },
        Bmb = function(a, b) {
            var c;
            b ? c = b.Fc : c = a.Xa++;
            var d = a.Ma.clone();
            g.Aj(d, "SID", a.C);
            g.Aj(d, "RID", c);
            g.Aj(d, "AID", a.Sa);
            F8(a, d);
            a.J && a.Y && g.Ej(d, a.J, a.Y);
            c = new t8(a, a.C, c, a.Aa + 1);
            null === a.J && (c.Ma = a.Y);
            b && (a.B = b.oa.concat(a.B));
            b = Amb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Jd) + Math.round(.5 * a.Jd * Math.random()));
            kmb(a.u, c);
            Zlb(c, d, b)
        },
        F8 = function(a, b) {
            a.Ka && g.Dc(a.Ka, function(c, d) {
                g.Aj(b, d, c)
            });
            a.D && g.rj({}, function(c, d) {
                g.Aj(b, d, c)
            })
        },
        Amb = function(a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.Oa)(a.D.ZY, a.D, a) : null;
            a: for (var e = a.B, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        umb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.B.splice(0, c);
            b.oa = a;
            return d
        },
        nmb = function(a) {
            a.j || a.T || (a.ac = 1, g.df(a.OP, a), a.oa = 0)
        },
        imb = function(a) {
            if (a.j || a.T || 3 <= a.oa) return !1;
            a.ac++;
            a.T = s8((0, g.Oa)(a.OP, a), ymb(a, a.oa));
            a.oa++;
            return !0
        },
        wmb = function(a) {
            null != a.ya && (g.Da.clearTimeout(a.ya), a.ya = null)
        },
        Cmb = function(a) {
            a.j = new t8(a, a.C, "rpc", a.ac);
            null === a.J && (a.j.Ma = a.Y);
            a.j.wb = 0;
            var b = a.Bd.clone();
            g.Aj(b, "RID", "rpc");
            g.Aj(b, "SID", a.C);
            g.Aj(b, "CI", a.kb ? "0" : "1");
            g.Aj(b, "AID", a.Sa);
            g.Aj(b, "TYPE", "xmlhttp");
            F8(a, b);
            a.J && a.Y && g.Ej(b, a.J, a.Y);
            a.bb && a.j.setTimeout(a.bb);
            var c = a.j;
            a = a.vc;
            c.Ra = 1;
            c.J = Z7(b.clone());
            c.T = null;
            c.Fa = !0;
            Ylb(c, a)
        },
        z8 = function(a) {
            null != a.ma && (g.Da.clearTimeout(a.ma), a.ma = null)
        },
        gmb = function(a, b) {
            var c = null;
            if (a.j == b) {
                z8(a);
                wmb(a);
                a.j = null;
                var d = 2
            } else if (hmb(a.u, b)) c = b.oa, mmb(a.u, b), d = 1;
            else return;
            if (0 != a.qh)
                if (b.B)
                    if (1 == d) {
                        c = b.T ? b.T.length : 0;
                        b = Date.now() - b.Aa;
                        var e = a.Aa;
                        d = Slb();
                        d.dispatchEvent(new Vlb(d, c, b, e));
                        C8(a)
                    } else nmb(a);
            else {
                var f = b.Rb;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && zmb(a, b) || 2 == d && imb(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) {
                    case 1:
                        B8(a, 5);
                        break;
                    case 4:
                        B8(a, 10);
                        break;
                    case 3:
                        B8(a, 6);
                        break;
                    default:
                        B8(a, 2)
                }
            }
        },
        ymb = function(a, b) {
            var c = a.tf + Math.floor(Math.random() *
                a.Hf);
            a.isActive() || (c *= 2);
            return c * b
        },
        B8 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null);
                var d = (0, g.Oa)(a.T7, a);
                c || (c = new g.sj("//www.google.com/images/cleardot.gif"), g.Da.location && "http" == g.Da.location.protocol || g.tj(c, "https"), Z7(c));
                smb(c.toString(), d)
            } else r8(2);
            a.qh = 0;
            a.D && a.D.RP(b);
            Dmb(a);
            xmb(a)
        },
        Dmb = function(a) {
            a.qh = 0;
            a.Rb = [];
            if (a.D) {
                var b = rmb(a.u);
                if (0 != b.length || 0 != a.B.length) g.ub(a.Rb, b), g.ub(a.Rb, a.B), a.u.B.length = 0, g.sb(a.B), a.B.length = 0;
                a.D.QP()
            }
        },
        Emb = function(a) {
            if (0 == a.qh) return a.Rb;
            var b = [];
            g.ub(b, rmb(a.u));
            g.ub(b, a.B);
            return b
        },
        lmb = function(a, b, c) {
            var d = g.Bj(c);
            "" != d.j ? (b && g.uj(d, b + "." + d.j), g.vj(d, d.C)) : (d = g.Da.location, d = Vkb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Fa;
            c = a.je;
            b && c && g.Aj(d, b, c);
            g.Aj(d, "VER", a.NP);
            F8(a, d);
            return d
        },
        $lb = function(a, b, c) {
            if (b && !a.Ra) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.ke && !a.ge ? new g.di(new g.kj({
                OW: !0
            })) : new g.di(a.ge);
            b.J = a.Ra;
            return b
        },
        Fmb = function() {},
        Gmb = function() {
            if (g.Be && !g.vc(10)) throw Error("Environmental error: no available transport.");
        },
        H8 = function(a, b) {
            g.pd.call(this);
            this.j = new vmb(b);
            this.I = a;
            this.u = b && b.z3 || null;
            a = b && b.y3 || null;
            b && b.kdb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Y = a;
            a = b && b.oeb || null;
            b && b.tU && (a ? a["X-WebChannel-Content-Type"] = b.tU : a = {
                "X-WebChannel-Content-Type": b.tU
            });
            b && b.VR && (a ? a["X-WebChannel-Client-Profile"] = b.VR : a = {
                "X-WebChannel-Client-Profile": b.VR
            });
            this.j.Tb = a;
            (a = b && b.neb) && !g.Pb(a) && (this.j.J = a);
            this.J = b && b.N7 || !1;
            this.D = b && b.bfb || !1;
            (b = b && b.J2) && !g.Pb(b) && (this.j.Fa = b, g.Lc(this.u, b) && g.Uc(this.u,
                b));
            this.C = new G8(this)
        },
        Hmb = function(a) {
            Plb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.Hc(b)) ? g.Vc(b, this.j) : b : this.data = a
        },
        Imb = function(a) {
            Qlb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        G8 = function(a) {
            this.j = a
        },
        Jmb = function(a, b) {
            this.u = a;
            this.j = b
        },
        Kmb = function(a) {
            return Emb(a.j).map(function(b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.D ? Ukb(b) : b);
                return b
            })
        },
        I8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Da.setTimeout(function() {
                a()
            }, b)
        },
        K8 = function(a) {
            J8.dispatchEvent(new Lmb(J8, a))
        },
        Lmb = function(a) {
            g.eb.call(this, "statevent", a)
        },
        L8 = function(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.J = c;
            this.I = d || 1;
            this.u = 45E3;
            this.B = new g.Fj(this);
            this.D = new g.rf;
            this.D.setInterval(250)
        },
        Nmb = function(a, b, c) {
            a.Gw = 1;
            a.Wq = Z7(b.clone());
            a.Ot = c;
            a.Fa = !0;
            Mmb(a, null)
        },
        Omb = function(a, b, c, d, e) {
            a.Gw = 1;
            a.Wq = Z7(b.clone());
            a.Ot = null;
            a.Fa = c;
            e && (a.tW = !1);
            Mmb(a, d)
        },
        Mmb = function(a, b) {
            a.Fw = Date.now();
            M8(a);
            a.Yq = a.Wq.clone();
            $7(a.Yq, "t", a.I);
            a.SD = 0;
            a.Si = a.j.rI(a.j.fA() ? b : null);
            0 < a.pI && (a.QD = new o8((0, g.Oa)(a.UP, a, a.Si), a.pI));
            a.B.Qa(a.Si, "readystatechange", a.bZ);
            b = a.Nt ? g.Xc(a.Nt) : {};
            a.Ot ? (a.RD = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Si.send(a.Yq, a.RD, a.Ot, b)) : (a.RD = "GET", a.tW && !g.wc && (b.Connection = "close"), a.Si.send(a.Yq, a.RD, null, b));
            a.j.jn(1)
        },
        Rmb = function(a, b) {
            var c = a.SD,
                d = b.indexOf("\n", c);
            if (-1 == d) return Pmb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Qmb;
            d += 1;
            if (d + c > b.length) return Pmb;
            b = b.slice(d, d + c);
            a.SD = d + c;
            return b
        },
        Tmb = function(a, b) {
            a.Fw = Date.now();
            M8(a);
            var c = b ? window.location.hostname : "";
            a.Yq = a.Wq.clone();
            g.Aj(a.Yq, "DOMAIN", c);
            g.Aj(a.Yq, "t", a.I);
            try {
                a.Hn = new ActiveXObject("htmlfile")
            } catch (m) {
                N8(a);
                a.Xq = 7;
                K8(22);
                O8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in P8) f = P8[f];
                        else if (f in Smb) f = P8[f] = Smb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                P8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            g.Cd("b/12014412");
            c = g.Td(d);
            a.Hn.open();
            a.Hn.write(g.Sd(c));
            a.Hn.close();
            a.Hn.parentWindow.m = (0, g.Oa)(a.u6, a);
            a.Hn.parentWindow.d = (0, g.Oa)(a.wV, a, !0);
            a.Hn.parentWindow.rpcClose = (0, g.Oa)(a.wV, a, !1);
            c = a.Hn.createElement("DIV");
            a.Hn.parentWindow.document.body.appendChild(c);
            d = g.Kd(a.Yq.toString());
            d = g.ne(g.Hd(d));
            g.Cd("b/12014412");
            d = g.Td('<iframe src="' + d + '"></iframe>');
            g.Yba(c, d);
            a.j.jn(1)
        },
        M8 = function(a) {
            a.qI =
                Date.now() + a.u;
            Umb(a, a.u)
        },
        Umb = function(a, b) {
            if (null != a.Hw) throw Error("WatchDog timer not null");
            a.Hw = I8((0, g.Oa)(a.aZ, a), b)
        },
        Vmb = function(a) {
            a.Hw && (g.Da.clearTimeout(a.Hw), a.Hw = null)
        },
        O8 = function(a) {
            a.j.Rg() || a.Mt || a.j.TD(a)
        },
        N8 = function(a) {
            Vmb(a);
            g.$a(a.QD);
            a.QD = null;
            a.D.stop();
            a.B.cg();
            if (a.Si) {
                var b = a.Si;
                a.Si = null;
                b.abort();
                b.dispose()
            }
            a.Hn && (a.Hn = null)
        },
        Wmb = function(a, b) {
            try {
                a.j.VP(a, b), a.j.jn(4)
            } catch (c) {}
        },
        Ymb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                Xmb(a, b, function(h) {
                    h ? c(!0) : g.Da.setTimeout(function() {
                        Ymb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        Xmb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    Q8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    Q8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    Q8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    Q8(d), c(!1)
                } catch (e) {}
            };
            g.Da.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        Q8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        Zmb = function(a) {
            this.j = a;
            this.u = new p8
        },
        $mb = function(a) {
            var b = R8(a.j, a.BA, "/mail/images/cleardot.gif");
            Z7(b);
            Ymb(b.toString(), 5E3, (0, g.Oa)(a.H0, a), 3, 2E3);
            a.jn(1)
        },
        anb = function(a) {
            var b = a.j.Y;
            if (null != b) K8(5), b ? (K8(11), S8(a.j, a, !1)) : (K8(12), S8(a.j, a, !0));
            else if (a.vj = new L8(a), a.vj.Nt = a.sI, b = a.j, b = R8(b, b.fA() ? a.eA : null, a.tI), K8(5), !g.Be || g.vc(10)) $7(b, "TYPE", "xmlhttp"), Omb(a.vj, b, !1, a.eA, !1);
            else {
                $7(b, "TYPE", "html");
                var c = a.vj;
                a = !!a.eA;
                c.Gw = 3;
                c.Wq = Z7(b.clone());
                Tmb(c, a)
            }
        },
        bnb = function(a, b, c) {
            this.j = 1;
            this.u = [];
            this.B = [];
            this.D = new p8;
            this.T = a || null;
            this.Y = null != b ? b : null;
            this.J = c || !1
        },
        cnb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        dnb = function(a, b, c, d) {
            g.eb.call(this, "timingevent", a);
            this.size = b;
            this.iz = d
        },
        enb = function(a) {
            g.eb.call(this, "serverreachability", a)
        },
        gnb = function(a) {
            a.cZ(1, 0);
            a.UD = R8(a, null, a.uI);
            fnb(a)
        },
        hnb = function(a) {
            a.Br && (a.Br.abort(), a.Br = null);
            a.Bg && (a.Bg.cancel(), a.Bg = null);
            a.Cp && (g.Da.clearTimeout(a.Cp), a.Cp = null);
            T8(a);
            a.Ej && (a.Ej.cancel(), a.Ej = null);
            a.Zq && (g.Da.clearTimeout(a.Zq), a.Zq = null)
        },
        inb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new cnb(a.dZ++, b));
            2 != a.j && 3 != a.j || fnb(a)
        },
        jnb = function(a) {
            var b = 0;
            a.Bg && b++;
            a.Ej && b++;
            return b
        },
        fnb = function(a) {
            a.Ej || a.Zq || (a.Zq = I8((0, g.Oa)(a.ZP, a), 0), a.Jw = 0)
        },
        mnb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.hA = Math.floor(1E5 * Math.random());
                    b = a.hA++;
                    var c = new L8(a, "", b);
                    c.Nt = a.Mn;
                    var d = knb(a),
                        e = a.UD.clone();
                    g.Aj(e, "RID", b);
                    g.Aj(e, "CVER", "1");
                    U8(a, e);
                    Nmb(c, e, d);
                    a.Ej = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? lnb(a, b) : 0 == a.u.length || a.Ej || lnb(a))
        },
        lnb = function(a, b) {
            if (b)
                if (6 < a.Pt) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0;
                    var c = a.hA - 1;
                    b = knb(a)
                } else c = b.J, b = b.Ot;
            else c = a.hA++, b = knb(a);
            var d = a.UD.clone();
            g.Aj(d, "SID", a.C);
            g.Aj(d, "RID", c);
            g.Aj(d, "AID", a.Kw);
            U8(a, d);
            c = new L8(a, a.C, c, a.Jw + 1);
            c.Nt = a.Mn;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Ej = c;
            Nmb(c, d, b)
        },
        U8 = function(a, b) {
            a.wi && (a = a.wi.dQ()) && g.Dc(a, function(c, d) {
                g.Aj(b, d, c)
            })
        },
        knb = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Pt && 0 < b) {
                var d = a.u[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    nw: e.nw
                }, f++) {
                e.nw = a.u[f].j;
                var h = a.u[f].map;
                e.nw = 6 >= a.Pt ? f : e.nw - d;
                try {
                    g.Dc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.nw + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.nw + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        },
        nnb = function(a) {
            a.Bg || a.Cp || (a.I = 1, a.Cp = I8((0, g.Oa)(a.YP, a), 0), a.Iw = 0)
        },
        pnb = function(a) {
            if (a.Bg || a.Cp || 3 <= a.Iw) return !1;
            a.I++;
            a.Cp = I8((0, g.Oa)(a.YP, a), onb(a, a.Iw));
            a.Iw++;
            return !0
        },
        S8 = function(a, b, c) {
            a.FH = c;
            a.Nn = b.Bp;
            a.J || gnb(a)
        },
        T8 = function(a) {
            null != a.Qt && (g.Da.clearTimeout(a.Qt), a.Qt = null)
        },
        onb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        V8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.wi && (c = null);
                var d = (0, g.Oa)(a.S7, a);
                c || (c = new g.sj("//www.google.com/images/cleardot.gif"), Z7(c));
                Xmb(c.toString(), 1E4, d)
            } else K8(2);
            qnb(a, b)
        },
        qnb = function(a, b) {
            a.j = 0;
            a.wi && a.wi.aQ(b);
            rnb(a);
            hnb(a)
        },
        rnb = function(a) {
            a.j = 0;
            a.Nn = -1;
            if (a.wi)
                if (0 == a.B.length && 0 == a.u.length) a.wi.vI();
                else {
                    var b = g.sb(a.B),
                        c = g.sb(a.u);
                    a.B.length = 0;
                    a.u.length = 0;
                    a.wi.vI(b, c)
                }
        },
        R8 = function(a, b, c) {
            var d = g.Bj(c);
            if ("" != d.j) b && g.uj(d, b + "." + d.j), g.vj(d, d.C);
            else {
                var e = window.location;
                d = Vkb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.gA && g.Dc(a.gA, function(f, h) {
                g.Aj(d, h, f)
            });
            g.Aj(d, "VER", a.Pt);
            U8(a, d);
            return d
        },
        snb = function() {},
        tnb = function() {
            this.j = [];
            this.u = []
        },
        unb = function(a) {
            g.eb.call(this, "channelMessage");
            this.message = a
        },
        vnb = function(a) {
            g.eb.call(this, "channelError");
            this.error = a
        },
        wnb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        W8 = function(a, b) {
            g.D.call(this);
            this.j = new g.io(this.m6, 0, this);
            g.E(this, this.j);
            this.Hi = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.Oa)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.Oa)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        xnb = function() {},
        m8 = function() {
            if (!X8) {
                X8 = new g.uf(new xnb);
                var a = g.Zv("client_streamz_web_flush_count", -1); - 1 !== a && (X8.C = a)
            }
            return X8
        },
        ynb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Aa = a;
            this.J = b;
            this.B = new g.Mo;
            this.u = new W8(this.q7, this);
            this.j = null;
            this.ma = !1;
            this.I = null;
            this.Y = "";
            this.T = this.D = 0;
            this.C = [];
            this.Ra = c;
            this.oa = d;
            this.Sa = e;
            this.Ma = new Elb;
            this.ya = new Glb;
            this.Ka = new Ilb;
            this.Fa = new Klb;
            this.Xa = new Mlb;
            this.bb = new Nlb
        },
        znb = function(a) {
            if (a.j) {
                var b = a.oa(),
                    c = a.j.Mn || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Mn = c
            }
        },
        Y8 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.Nh(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Oh(a) || "";
            a = g.Wb();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Vb(a, "10.0") && (this.u = !1))
        },
        Z8 = function(a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j);
            return g.Yh(c + b, {})
        },
        Anb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Pa(a.C, d, !0),
                onError: g.Pa(a.B, e),
                onTimeout: g.Pa(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.yw(b, a)
        },
        Bnb = function(a, b) {
            g.pd.call(this);
            var c = this;
            this.qd = a();
            this.qd.subscribe("handlerOpened", this.hZ, this);
            this.qd.subscribe("handlerClosed", this.fZ, this);
            this.qd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.qd.subscribe("handlerMessage", this.gZ, this);
            this.j = b
        },
        Cnb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new Gmb : e;
            var f = void 0 === f ? new g.Mo : f;
            this.pathPrefix = a;
            this.j = b;
            this.Aa = c;
            this.D = f;
            this.T = null;
            this.Y = this.J = 0;
            this.channel = null;
            this.I = 0;
            this.B = new W8(function() {
                d.B.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : jmb((new Jmb(h, h.j)).j.u)) && d.connect(d.T, d.J)
            });
            this.C = {};
            this.u = {};
            this.ma = !1;
            this.logger = null;
            this.oa = [];
            this.Gg = void 0;
            this.Ma = new Elb;
            this.ya = new Glb;
            this.Ka = new Ilb;
            this.Fa = new Klb
        },
        Dnb = function(a) {
            g.dd(a.channel, "m", function() {
                a.I = 3;
                a.B.reset();
                a.T = null;
                a.J = 0;
                for (var b = g.t(a.oa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.oa = [];
                a.ea("webChannelOpened");
                Flb(a.Ma, "WEB_CHANNEL")
            });
            g.dd(a.channel, "n", function() {
                a.I = 0;
                a.B.isActive() || a.ea("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : Kmb(new Jmb(b, b.j));
                c && (a.oa = [].concat(g.u(c)));
                Hlb(a.ya, "WEB_CHANNEL")
            });
            g.dd(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.ea("webChannelMessage", new wnb(c[0], c[1]));
                a.Gg = b.statusCode;
                Jlb(a.Ka, "WEB_CHANNEL")
            });
            g.dd(a.channel, "o", function() {
                401 === a.Gg || a.B.start();
                a.ea("webChannelError");
                Llb(a.Fa, "WEB_CHANNEL")
            })
        },
        Enb = function(a) {
            var b = a.Aa();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        },
        Fnb = function(a) {
            g.pd.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.kZ, this);
            this.j.subscribe("webChannelClosed", this.iZ, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.jZ, this)
        },
        Gnb = function(a, b, c, d, e) {
            function f() {
                return new ynb(Z8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.Yv("enable_mdx_web_channel_desktop") ? new Fnb(function() {
                return new Cnb(Z8(a, "/wc"), b, c)
            }) : new Bnb(f, e)
        },
        Knb = function() {
            var a = Hnb;
            Inb();
            $8.push(a);
            Jnb()
        },
        a9 = function(a, b) {
            Inb();
            var c = Lnb(a, String(b));
            g.lb($8) ? Mnb(c) : (Jnb(), g.Gb($8, function(d) {
                d(c)
            }))
        },
        b9 = function(a) {
            a9("CP", a)
        },
        Inb = function() {
            $8 || ($8 = g.Ga("yt.mdx.remote.debug.handlers_") || [], g.Fa("yt.mdx.remote.debug.handlers_", $8))
        },
        Mnb = function(a) {
            var b = (c9 + 1) % 50;
            c9 = b;
            d9[b] = a;
            e9 || (e9 = 49 == b)
        },
        Jnb = function() {
            var a = $8;
            if (d9[0]) {
                var b = e9 ? c9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = d9[b];
                    g.Gb(a, function(d) {
                        d(c)
                    })
                } while (b != c9);
                d9 = Array(50);
                c9 = -1;
                e9 = !1
            }
        },
        Lnb = function(a, b) {
            var c = (Date.now() - Nnb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        f9 = function(a) {
            g.RB.call(this);
            this.I = a;
            this.screens = []
        },
        Onb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        Pnb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.zm(a.screens, function(f) {
                return !!glb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = Onb(a, b[d]) || c;
            return c
        },
        Qnb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.zm(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        Rnb = function(a, b, c, d, e) {
            g.RB.call(this);
            this.B = a;
            this.J = b;
            this.C = c;
            this.I = d;
            this.D = e;
            this.u = 0;
            this.j = null;
            this.Dc = NaN
        },
        h9 = function(a) {
            f9.call(this, "LocalScreenService");
            this.u = a;
            this.j = NaN;
            g9(this);
            this.info("Initializing with " + dlb(this.screens))
        },
        Snb = function(a) {
            if (a.screens.length) {
                var b = g.Eg(a.screens, function(d) {
                        return d.id
                    }),
                    c = Z8(a.u, "/pairing/get_lounge_token_batch");
                Anb(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.Oa)(a.f2, a), (0, g.Oa)(a.e2, a))
            }
        },
        g9 = function(a) {
            if (g.Yv("deprecate_pair_servlet_enabled")) return Pnb(a, []);
            var b = clb(nlb());
            b = g.zm(b, function(c) {
                return !c.uuid
            });
            return Pnb(a, b)
        },
        i9 = function(a, b) {
            plb(g.Eg(a.screens, alb));
            b && olb()
        },
        Unb = function(a, b) {
            g.RB.call(this);
            this.I = b;
            b = (b = g.QA("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.I(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.kb(b, h)
            }
            this.j = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            Tnb("Initialized with " + g.Gh(this.j))
        },
        Vnb = function(a, b, c) {
            var d = Z8(a.D, "/pairing/get_screen_availability");
            Anb(a.D, d, {
                lounge_token: b.token
            }, (0, g.Oa)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.Oa)(function() {
                c(!1)
            }, a))
        },
        Xnb = function(a, b) {
            a: if (Skb(b) != Skb(a.j)) var c = !1;
                else {
                    c = g.Jc(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (Tnb("Updated online screens: " + g.Gh(a.j)), a.j = b, a.ea("screenChange"));Wnb(a)
        },
        j9 = function(a) {
            isNaN(a.B) || g.vw(a.B);
            a.B = g.tw((0, g.Oa)(a.IN, a), 0 < a.C && a.C < g.Qa() ? 2E4 : 1E4)
        },
        Tnb = function(a) {
            a9("OnlineScreenService", a)
        },
        Ynb = function(a) {
            var b = {};
            g.Gb(a.I(), function(c) {
                c.token ? b[c.token] = c.id : this.Rf("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        Wnb = function(a) {
            a = g.Jc(g.Ec(a.j, function(b) {
                return b
            }));
            g.Db(a);
            a.length ? g.PA("yt-remote-online-screen-ids", a.join(","), 60) : g.RA("yt-remote-online-screen-ids")
        },
        k9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            f9.call(this, "ScreenService");
            this.C = a;
            this.J = b;
            this.j = this.u = null;
            this.B = [];
            this.D = {};
            Znb(this)
        },
        aob = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.vk(),
                l = c ? g8(h, c) : null;
            c && (a.J || l) || (l = g8(h, b));
            if (l) {
                l.uuid = b;
                var m = l9(a, l);
                Vnb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? $nb(a, c, (0, g.Oa)(function(n) {
                var p = l9(this, new d8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                Vnb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        bob = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        cob = function(a, b, c) {
            Vnb(a.j, b, c)
        },
        $nb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.yw(Z8(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        dob = function(a) {
            a.screens = a.u.vk();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + dlb(a.screens))
        },
        Znb = function(a) {
            eob(a);
            a.u = new h9(a.C);
            a.u.subscribe("screenChange", (0, g.Oa)(a.s2, a));
            dob(a);
            a.J || (a.B = clb(g.QA("yt-remote-automatic-screen-cache") || []));
            eob(a);
            a.info("Initializing automatic screens: " + dlb(a.B));
            a.j = new Unb(a.C, (0, g.Oa)(a.vk, a, !0));
            a.j.subscribe("screenChange", (0, g.Oa)(function() {
                this.ea("onlineScreenChange")
            }, a))
        },
        l9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = g8(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.J || fob(a));
            eob(a);
            a.D[b.uuid] = b.id;
            g.PA("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        fob = function(a) {
            a = g.zm(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.PA("yt-remote-automatic-screen-cache", g.Eg(a, alb))
        },
        eob = function(a) {
            a.D = g.QA("yt-remote-device-id-map") || {}
        },
        m9 = function(a, b, c) {
            g.RB.call(this);
            this.Fa = c;
            this.C = a;
            this.u = b;
            this.j = null
        },
        n9 = function(a, b) {
            a.j = b;
            a.ea("sessionScreen", a.j)
        },
        gob = function(a, b) {
            a.j && (a.j.token = b, l9(a.C, a.j));
            a.ea("sessionScreen", a.j)
        },
        o9 = function(a, b) {
            a9(a.Fa, b)
        },
        p9 = function(a, b, c) {
            m9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.B = null;
            this.oa = (0, g.Oa)(this.pZ, this);
            this.ya = (0, g.Oa)(this.E6, this);
            this.ma = g.tw(function() {
                hob(d, null)
            }, 12E4);
            this.J = this.D = this.I = this.T = 0;
            this.Aa = !1;
            this.Y = "unknown"
        },
        job = function(a, b) {
            g.vw(a.J);
            a.J = 0;
            0 == b ? iob(a) : a.J = g.tw(function() {
                iob(a)
            }, b)
        },
        iob = function(a) {
            kob(a, "getLoungeToken");
            g.vw(a.D);
            a.D = g.tw(function() {
                lob(a, null)
            }, 3E4)
        },
        kob = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Gh());
            var c = {};
            c.type = b;
            a.B ? a.B.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Oa)(function() {
                o9(this, "Failed to send message: " + b + ".")
            }, a)) : o9(a, "Sending yt message without session: " + g.Gh(c))
        },
        mob = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.XS(b, function(c) {
                n9(a, c)
            }, function() {
                return a.hj()
            }, 5)) : a.hj(Error("Waiting for session status timed out."))
        },
        oob = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new d8(b);
            nob(a, d, function(e) {
                e ? (a.Aa = !0, l9(a.C, d), n9(a, d), a.Y = "unknown", job(a, c)) : (g.cw(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.hj())
            }, 5)
        },
        hob = function(a, b) {
            g.vw(a.ma);
            a.ma = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? oob(a, {
                    name: a.u.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.cw(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), mob(a, b.screenId))) : (g.cw(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), mob(a, b.screenId)) :
                mob(a, b.screenId) : a.hj(Error("Waiting for session status timed out."))
        },
        lob = function(a, b) {
            g.vw(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, job(a, 3E4)) : (gob(a, b.loungeToken), a.Aa = !1, a.Y = "unknown", job(a, b.loungeTokenRefreshIntervalMs))
        },
        nob = function(a, b, c, d) {
            g.vw(a.I);
            a.I = 0;
            cob(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.tw(function() {
                    nob(a, b, c, d - 1)
                }, 300)
            })
        },
        pob = function(a) {
            g.vw(a.T);
            a.T = 0;
            g.vw(a.I);
            a.I = 0;
            g.vw(a.ma);
            a.ma = 0;
            g.vw(a.D);
            a.D = 0;
            g.vw(a.J);
            a.J = 0
        },
        q9 = function(a, b, c, d) {
            m9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.B = this.T = null;
            this.ya = "";
            this.Ra = c;
            this.Ma = null;
            this.ma = function() {};
            this.Y = NaN;
            this.Ka = (0, g.Oa)(this.qZ, this);
            this.D = function() {};
            this.J = this.I = 0;
            this.oa = !1;
            this.Aa = "unknown"
        },
        r9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.B) ? 0 : b.getDialAppInfo))
        },
        qob = function(a) {
            a.D = a.C.fQ(a.ya, a.u.label, a.u.friendlyName, r9(a), function(b, c) {
                a.D = function() {};
                a.oa = !0;
                n9(a, b);
                "shortLived" == b.idType && 0 < c && s9(a, c)
            }, function(b) {
                a.D = function() {};
                a.hj(b)
            })
        },
        rob = function(a) {
            var b = {};
            b.pairingCode = a.ya;
            b.theme = a.Ra;
            rlb() && (b.env_useStageMdx = 1);
            return g.Wh(b)
        },
        sob = function(a) {
            return new Promise(function(b) {
                a.ya = elb();
                if (a.Ma) {
                    var c = new chrome.cast.DialLaunchResponse(!0, rob(a));
                    b(c);
                    qob(a)
                } else a.ma = function() {
                    g.vw(a.Y);
                    a.ma = function() {};
                    a.Y = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, rob(a));
                    b(d);
                    qob(a)
                }, a.Y = g.tw(function() {
                    a.ma()
                }, 100)
            })
        },
        uob = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new d8(b);
            return (new Promise(function(e) {
                tob(a, d, function(f) {
                    f ? (a.oa = !0, l9(a.C, d), n9(a, d), s9(a, c)) : g.cw(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : sob(a)
            })
        },
        vob = function(a, b) {
            var c = a.T.receiver.label,
                d = a.u.friendlyName;
            return (new Promise(function(e) {
                aob(a.C, c, b, d, function(f) {
                    f && f.token && n9(a, f);
                    e(f)
                }, function(f) {
                    o9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : sob(a)
            })
        },
        tob = function(a, b, c, d) {
            g.vw(a.I);
            a.I = 0;
            cob(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.tw(function() {
                    tob(a, b, c, d - 1)
                }, 300)
            })
        },
        s9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            r9(a) && (g.vw(a.J), a.J = 0, 0 == b ? wob(a) : a.J = g.tw(function() {
                wob(a)
            }, b))
        },
        wob = function(a) {
            r9(a) && a.B.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Aa = c, s9(a, 3E4)) : (a.oa = !1, a.Aa = "unknown", gob(a, b.loungeToken), s9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Aa = "noLoungeTokenResponse";
                s9(a, 3E4)
            })
        },
        xob = function(a) {
            g.vw(a.I);
            a.I = 0;
            g.vw(a.J);
            a.J = 0;
            a.D();
            a.D = function() {};
            g.vw(a.Y)
        },
        t9 = function(a, b) {
            m9.call(this, a, b, "ManualSession");
            this.B = g.tw((0, g.Oa)(this.Cy, this, null), 150)
        },
        u9 = function(a, b) {
            g.RB.call(this);
            this.config_ = b;
            this.u = a;
            this.T = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.Y = b.disableCastApi || !1;
            this.I = b.forceMirroring || !1;
            this.j = null;
            this.J = !1;
            this.B = [];
            this.D = (0, g.Oa)(this.A5, this)
        },
        yob = function(a, b) {
            return b ? g.ib(a.B, function(c) {
                return e8(b, c.label)
            }, a) : null
        },
        v9 = function(a) {
            a9("Controller", a)
        },
        Hnb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        w9 = function(a) {
            return a.J || !!a.B.length || !!a.j
        },
        x9 = function(a, b, c) {
            b != a.j && (g.$a(a.j), (a.j = b) ? (c ? a.ea("yt-remote-cast2-receiver-resumed",
                b.u) : a.ea("yt-remote-cast2-receiver-selected", b.u), b.subscribe("sessionScreen", (0, g.Oa)(a.uV, a, b)), b.subscribe("sessionFailed", function() {
                return zob(a, b)
            }), b.j ? a.ea("yt-remote-cast2-session-change", b.j) : c && a.j.Cy(null)) : a.ea("yt-remote-cast2-session-change", null))
        },
        zob = function(a, b) {
            a.j == b && a.ea("yt-remote-cast2-session-failed")
        },
        Aob = function(a) {
            var b = a.u.eQ(),
                c = a.j && a.j.u;
            a = g.Eg(b, function(d) {
                c && e8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = yob(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        Hob = function(a, b, c, d) {
            d.disableCastApi ? y9("Cannot initialize because disabled by Mdx config.") : Bob() ? Cob(b, d) && (Dob(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Eob(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? Eob(a, c) : (z9("Failed to load cast API: " + f), Fob(!1), Dob(!1), g.RA("yt-remote-cast-available"), g.RA("yt-remote-cast-receiver"),
                    Gob(), c(!1))
            }, d.loadCastApiSetupScript ? g.TA("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= slb() && Blb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? wlb() : 89 <= slb() ? Dlb() : (Alb(), l8(Clb.map(xlb))))) : y9("Cannot initialize because not running Chrome")
        },
        Gob = function() {
            y9("dispose");
            var a = A9();
            a && a.dispose();
            g.Fa("yt.mdx.remote.cloudview.instance_", null);
            Iob(!1);
            g.Tz(Job);
            Job.length = 0
        },
        B9 = function() {
            return !!g.QA("yt-remote-cast-installed")
        },
        Kob = function() {
            var a = g.QA("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        Lob = function() {
            y9("clearCurrentReceiver");
            g.RA("yt-remote-cast-receiver")
        },
        Mob = function() {
            return B9() ? A9() ? A9().getCastSession() : (z9("getCastSelector: Cast is not initialized."), null) : (z9("getCastSelector: Cast API is not installed!"), null)
        },
        Nob = function() {
            B9() ? A9() ? C9() ? (y9("Requesting cast selector."), A9().requestSession()) : (y9("Wait for cast API to be ready to request the session."), Job.push(g.Sz("yt-remote-cast2-api-ready", Nob))) : z9("requestCastSelector: Cast is not initialized.") : z9("requestCastSelector: Cast API is not installed!")
        },
        D9 = function(a, b) {
            C9() ? A9().setConnectedScreenStatus(a, b) : z9("setConnectedScreenStatus called before ready.")
        },
        Bob = function() {
            var a = 0 <= g.Wb().search(/ (CrMo|Chrome|CriOS)\//);
            return g.RF || a
        },
        Oob = function(a, b) {
            A9().init(a, b)
        },
        Cob = function(a, b) {
            var c = !1;
            A9() || (a = new u9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.PA("yt-remote-cast-available", d);
                b8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                y9("onReceiverSelected: " + d.friendlyName);
                g.PA("yt-remote-cast-receiver", d);
                b8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                y9("onReceiverResumed: " + d.friendlyName);
                g.PA("yt-remote-cast-receiver", d);
                b8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                y9("onSessionChange: " + f8(d));
                d || g.RA("yt-remote-cast-receiver");
                b8("yt-remote-cast2-session-change", d)
            }), g.Fa("yt.mdx.remote.cloudview.instance_", a), c = !0);
            y9("cloudview.createSingleton_: " + c);
            return c
        },
        A9 = function() {
            return g.Ga("yt.mdx.remote.cloudview.instance_")
        },
        Eob = function(a, b) {
            Fob(!0);
            Dob(!1);
            Oob(a, function(c) {
                c ? (Iob(!0), g.Uz("yt-remote-cast2-api-ready")) : (z9("Failed to initialize cast API."), Fob(!1), g.RA("yt-remote-cast-available"), g.RA("yt-remote-cast-receiver"), Gob());
                b(c)
            })
        },
        y9 = function(a) {
            a9("cloudview", a)
        },
        z9 = function(a) {
            a9("cloudview", a)
        },
        Fob = function(a) {
            y9("setCastInstalled_ " + a);
            g.PA("yt-remote-cast-installed", a)
        },
        C9 = function() {
            return !!g.Ga("yt.mdx.remote.cloudview.apiReady_")
        },
        Iob = function(a) {
            y9("setApiReady_ " + a);
            g.Fa("yt.mdx.remote.cloudview.apiReady_", a)
        },
        Dob = function(a) {
            g.Fa("yt.mdx.remote.cloudview.initializing_", a)
        },
        E9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.I = this.J = 0;
            this.trackData = null;
            this.zk = this.Mo = !1;
            this.T = this.D = this.j = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        Pob = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Mo = !1;
            a.zk = !1;
            a.J = 0;
            a.I = g.Qa();
            a.C = 0;
            a.j = 0;
            a.D = 0;
            a.T = 0;
            a.B = NaN;
            a.u = !1
        },
        F9 = function(a) {
            return a.Zc() ? (g.Qa() - a.I) / 1E3 : 0
        },
        G9 = function(a, b) {
            a.J = b;
            a.I = g.Qa()
        },
        H9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Qa() - a.I) / 1E3 + a.J;
                case -1E3:
                    return 0
            }
            return a.J
        },
        I9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && Pob(a)
        },
        Qob = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.Yc(a.trackData);
            b.hasPrevious = a.Mo;
            b.hasNext = a.zk;
            b.playerTime = a.J;
            b.playerTimeAt = a.I;
            b.seekableStart = a.C;
            b.seekableEnd = a.j;
            b.duration = a.D;
            b.loadedTime = a.T;
            b.liveIngestionTime = a.B;
            return b
        },
        K9 = function(a, b) {
            g.RB.call(this);
            this.B = 0;
            this.C = a;
            this.I = [];
            this.D = new tnb;
            this.u = this.j = null;
            this.Y = (0, g.Oa)(this.r4, this);
            this.J = (0, g.Oa)(this.rC, this);
            this.T = (0, g.Oa)(this.q4, this);
            this.ma = (0, g.Oa)(this.t4, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.eO, this), Rob(this))) : c = 3;
            0 != c && (b ? this.eO(c) : g.tw((0, g.Oa)(function() {
                this.eO(c)
            }, this), 0));
            (a = Mob()) && J9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ma)
        },
        L9 = function(a) {
            return new E9(a.C.getPlayerContextData())
        },
        Rob = function(a) {
            g.Gb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.I.push(this.C.subscribe(b, g.Pa(this.y5, b), this))
            }, a)
        },
        Sob = function(a) {
            g.Gb(a.I, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.I.length = 0
        },
        M9 = function(a) {
            return 1 == a.getState()
        },
        N9 = function(a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.u.push(b)
        },
        Tob = function(a, b, c) {
            var d = L9(a);
            G9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            O9(a, d)
        },
        P9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        O9 = function(a, b) {
            Sob(a);
            a.C.setPlayerContextData(Qob(b));
            Rob(a)
        },
        J9 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.Y), a.u.removeMediaListener(a.J), a.rC(null));
            a.u = b;
            a.u && (b9("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.Y), a.u.addMediaListener(a.J), a.u.media.length && a.rC(a.u.media[0]))
        },
        Uob = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = L9(a);
                b.contentId != d.videoId && b9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                G9(d, a.j.getEstimatedTime());
                O9(a, d)
            } else b9("No cast media video. Ignoring state update.")
        },
        Q9 = function(a, b, c) {
            return (0, g.Oa)(function(d) {
                this.Rf("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Rf("Retrying " + b + " using MDx browser channel."), P9(this, b, c))
            }, a)
        },
        T9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.RB.call(this);
            var e = this;
            this.I = NaN;
            this.ya = !1;
            this.Y = this.T = this.oa = this.Aa = NaN;
            this.ma = [];
            this.D = this.J = this.C = this.j = this.u = null;
            this.Ma = a;
            this.Ka = d;
            this.ma.push(g.yz(window, "beforeunload", function() {
                e.Lx(2)
            }));
            this.B = [];
            this.j = new E9;
            this.Ra = b.id;
            this.Fa = b.idType;
            this.u = Gnb(this.Ma, c, this.jQ, "shortLived" == this.Fa, this.Ra);
            this.u.Qa("channelOpened", function() {
                Vob(e)
            });
            this.u.Qa("channelClosed", function() {
                R9("Channel closed");
                isNaN(e.I) ? j8(!0) : j8();
                e.dispose()
            });
            this.u.Qa("channelError", function(f) {
                j8();
                isNaN(e.uB()) ? (1 == f && "shortLived" == e.Fa && e.ea("browserChannelAuthError", f), R9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.ya = !0, R9("Channel error: " + f + " with reconnection in " + e.uB() + " ms"), S9(e, 2))
            });
            this.u.Qa("channelMessage", function(f) {
                Wob(e, f)
            });
            this.u.Lq(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.SA() && g.PA("yt-remote-session-video-id", f)
            })
        },
        Xob = function(a) {
            return g.ib(a.B, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        R9 = function(a) {
            a9("conn", a)
        },
        S9 = function(a, b) {
            a.ea("proxyStateChange", b)
        },
        Yob = function(a) {
            a.I = g.tw(function() {
                R9("Connecting timeout");
                a.Lx(1)
            }, 2E4)
        },
        Zob = function(a) {
            g.vw(a.I);
            a.I = NaN
        },
        $ob = function(a) {
            g.vw(a.Aa);
            a.Aa = NaN
        },
        bpb = function(a) {
            apb(a);
            a.oa = g.tw(function() {
                U9(a, "getNowPlaying")
            }, 2E4)
        },
        apb = function(a) {
            g.vw(a.oa);
            a.oa = NaN
        },
        Vob = function(a) {
            R9("Channel opened");
            a.ya && (a.ya = !1, $ob(a), a.Aa = g.tw(function() {
                R9("Timing out waiting for a screen.");
                a.Lx(1)
            }, 15E3))
        },
        dpb = function(a, b) {
            var c = null;
            if (b) {
                var d = Xob(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Fa("yt.mdx.remote.remoteClient_", c);
            b && (Zob(a), $ob(a));
            c = a.u.py() && isNaN(a.I);
            b == c ? b && (S9(a, 1), U9(a, "getSubtitlesTrack")) : b ? (a.VS() && a.j.reset(), S9(a, 1), U9(a, "getNowPlaying"), cpb(a)) : a.Lx(1)
        },
        epb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.Tc(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.ea("remotePlayerChange"))
        },
        fpb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            I9(a.j, d, e);
            a.ea("remoteQueueChange", c)
        },
        hpb = function(a, b) {
            b.params = b.params || {};
            fpb(a, b, "NOW_PLAYING_MAY_CHANGE");
            gpb(a, b);
            a.ea("autoplayDismissed")
        },
        gpb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            G9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.T = isNaN(c) ? 0 : c;
            a.j.Nk(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? bpb(a) : apb(a);
            a.ea("remotePlayerChange")
        },
        ipb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                G9(a.j, isNaN(b) ? 0 : b);
                a.ea("remotePlayerChange")
            }
        },
        jpb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.ea("remotePlayerChange")
        },
        kpb = function(a, b) {
            a.J = b.params.videoId;
            a.ea("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        lpb = function(a, b) {
            a.J = b.params.videoId || null;
            a.ea("autoplayUpNext", a.J)
        },
        mpb = function(a, b) {
            a.D = b.params.autoplayMode;
            a.ea("autoplayModeChange", a.D);
            "DISABLED" == a.D && a.ea("autoplayDismissed")
        },
        npb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.Mo = "true" == b.params.hasPrevious;
            a.j.zk = c;
            a.ea("previousNextChange")
        },
        Wob = function(a, b) {
            b = b.message;
            b.params ? R9("Received: action=" + b.action + ", params=" + g.Gh(b.params)) : R9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = a8(b.params.devices);
                    a.B = g.Eg(b, function(d) {
                        return new c8(d)
                    });
                    b = !!g.ib(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    dpb(a, b);
                    b = a.OT("mlm");
                    a.ea("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.qb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    dpb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new c8(a8(b.params.device));
                    g.ib(a.B, function(d) {
                        return d.equals(c)
                    }) || Rkb(a.B, c);
                    break;
                case "remoteDisconnected":
                    c = new c8(a8(b.params.device));
                    g.qb(a.B, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    fpb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    hpb(a, b);
                    break;
                case "onStateChange":
                    gpb(a, b);
                    break;
                case "onAdStateChange":
                    ipb(a, b);
                    break;
                case "onVolumeChanged":
                    jpb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    epb(a, b);
                    break;
                case "nowAutoplaying":
                    kpb(a, b);
                    break;
                case "autoplayDismissed":
                    a.ea("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    lpb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    mpb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    npb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.ea("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.ea("loopModeChange", b.params.loopMode);
                    break;
                default:
                    R9("Unrecognized action: " + b.action)
            }
        },
        cpb = function(a) {
            g.vw(a.Y);
            a.Y = g.tw(function() {
                a.Lx(1)
            }, 864E5)
        },
        U9 = function(a, b, c) {
            c ? R9("Sending: action=" + b + ", params=" + g.Gh(c)) : R9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        },
        opb = function(a) {
            f9.call(this, "ScreenServiceProxy");
            this.Qg = a;
            this.j = [];
            this.j.push(this.Qg.$_s("screenChange", (0, g.Oa)(this.uZ, this)));
            this.j.push(this.Qg.$_s("onlineScreenChange", (0, g.Oa)(this.g5, this)))
        },
        tpb = function(a, b) {
            qlb();
            if (!k8 || !k8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.L("MDX_CONFIG") || b;
                hlb();
                llb();
                V9 || (V9 = new Y8(b ? b.loungeApiHost : void 0), rlb() && (V9.j = "/api/loungedev"));
                W9 || (W9 = g.Ga("yt.mdx.remote.deferredProxies_") || [], g.Fa("yt.mdx.remote.deferredProxies_", W9));
                ppb();
                var c = X9();
                if (!c) {
                    var d = new k9(V9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Fa("yt.mdx.remote.screenService_", d);
                    c = X9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Fa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    Hob(a, d, function(f) {
                        f ? Y9() && D9(Y9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            b8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ga("yt.mdx.remote.initialized_") && (g.Fa("yt.mdx.remote.initialized_", !0), Z9("Initializing: " + g.Gh(b)),
                    $9.push(g.Sz("yt-remote-cast2-api-ready", function() {
                        b8("yt-remote-api-ready")
                    })), $9.push(g.Sz("yt-remote-cast2-availability-change", function() {
                        b8("yt-remote-receiver-availability-change")
                    })), $9.push(g.Sz("yt-remote-cast2-receiver-selected", function() {
                        a$(null);
                        b8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), $9.push(g.Sz("yt-remote-cast2-receiver-resumed", function() {
                        b8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), $9.push(g.Sz("yt-remote-cast2-session-change", qpb)), $9.push(g.Sz("yt-remote-connection-change", function(f) {
                        f ? D9(Y9(), "YouTube TV") : b$() || (D9(null, null), Lob())
                    })), $9.push(g.Sz("yt-remote-cast2-session-failed", function() {
                        b8("yt-remote-connection-failed")
                    })), a = rpb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Yv("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), Z9(" -- with channel params: " + g.Gh(a)), a ? (g.PA("yt-remote-session-app", a.app), g.PA("yt-remote-session-name", a.name)) : (g.RA("yt-remote-session-app"), g.RA("yt-remote-session-name")), g.Fa("yt.mdx.remote.channelParams_", a), c.start(), Y9() || spb())
            }
        },
        upb = function() {
            var a = X9().Qg.$_gos();
            var b = c$();
            b && d$() && (glb(a, b) || a.push(b));
            return flb(a)
        },
        wpb = function() {
            var a = vpb();
            !a && B9() && Kob() && (a = {
                key: "cast-selector-receiver",
                name: Kob()
            });
            return a
        },
        vpb = function() {
            var a = upb(),
                b = c$();
            b || (b = b$());
            return g.ib(a, function(c) {
                return b && e8(b, c.key) ? !0 : !1
            })
        },
        c$ = function() {
            var a = Y9();
            if (!a) return null;
            var b = X9().vk();
            return g8(b, a)
        },
        qpb = function(a) {
            Z9("remote.onCastSessionChange_: " + f8(a));
            if (a) {
                var b = c$();
                if (b && b.id == a.id) {
                    if (D9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) e$ && (e$.token = a), (b = d$()) && b.Lq(a)
                } else b && f$(), g$(a, 1)
            } else d$() && f$()
        },
        f$ = function() {
            C9() ? A9().stopSession() : z9("stopSession called before API ready.");
            var a = d$();
            a && (a.disconnect(1), xpb(null))
        },
        ypb = function() {
            var a = d$();
            return !!a && 3 != a.getProxyState()
        },
        Z9 = function(a) {
            a9("remote", a)
        },
        X9 = function() {
            if (!zpb) {
                var a = g.Ga("yt.mdx.remote.screenService_");
                zpb = a ? new opb(a) : null
            }
            return zpb
        },
        Y9 = function() {
            return g.Ga("yt.mdx.remote.currentScreenId_")
        },
        Apb = function(a) {
            g.Fa("yt.mdx.remote.currentScreenId_", a)
        },
        Bpb = function() {
            return g.Ga("yt.mdx.remote.connectData_")
        },
        a$ = function(a) {
            g.Fa("yt.mdx.remote.connectData_", a)
        },
        d$ = function() {
            return g.Ga("yt.mdx.remote.connection_")
        },
        xpb = function(a) {
            var b = d$();
            a$(null);
            a || Apb("");
            g.Fa("yt.mdx.remote.connection_", a);
            W9 && (g.Gb(W9, function(c) {
                c(a)
            }), W9.length = 0);
            b && !a ? b8("yt-remote-connection-change", !1) : !b && a && b8("yt-remote-connection-change", !0)
        },
        b$ = function() {
            var a = g.SA();
            if (!a) return null;
            var b = X9();
            if (!b) return null;
            b = b.vk();
            return g8(b, a)
        },
        g$ = function(a, b) {
            Y9();
            c$() && c$();
            if (h$) e$ = a;
            else {
                Apb(a.id);
                var c = g.Ga("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new T9(V9, a, rpb(), c);
                a.connect(b, Bpb());
                a.subscribe("beforeDisconnect", function(d) {
                    b8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    d$() && (d$(), xpb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = c$();
                    d && "shortLived" == d.idType && (C9() ? A9().handleBrowserChannelAuthError() : z9("refreshLoungeToken called before API ready."))
                });
                xpb(a)
            }
        },
        spb = function() {
            var a = b$();
            a ? (Z9("Resume connection to: " + f8(a)), g$(a, 0)) : (j8(), Lob(), Z9("Skipping connecting because no session screen found."))
        },
        ppb = function() {
            var a = rpb();
            if (g.Tc(a)) {
                a = i8();
                var b = g.QA("yt-remote-session-name") || "",
                    c = g.QA("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Fa("yt.mdx.remote.channelParams_", a)
            }
        },
        rpb = function() {
            return g.Ga("yt.mdx.remote.channelParams_") || {}
        },
        Epb = function(a, b, c) {
            g.D.call(this);
            var d = this;
            this.module = a;
            this.F = b;
            this.wc = c;
            this.events = new g.OF(this);
            this.Y = this.events.S(this.F, "onVolumeChange", function(e) {
                Cpb(d, e)
            });
            this.C = !1;
            this.D = new g.hM(64);
            this.j = new g.io(this.KW, 500, this);
            this.u = new g.io(this.LW, 1E3, this);
            this.J = new n8(this.n8, 0, this);
            this.B = {};
            this.T = new g.io(this.zX, 1E3, this);
            this.I = new o8(this.seekTo, 1E3, this);
            g.E(this, this.events);
            this.events.S(b, "onCaptionsTrackListChanged", this.R4);
            this.events.S(b, "captionschanged", this.o4);
            this.events.S(b, "captionssettingschanged", this.UW);
            this.events.S(b, "videoplayerreset", this.sG);
            this.events.S(b, "mdxautoplaycancel", function() {
                d.wc.kS()
            });
            b.N("enable_mdx_video_play_directly") && this.events.S(b, "videodatachange", function() {
                Dpb(d.module) || i$(d) || j$(d, 0)
            });
            a = this.wc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.rV, this);
            a.subscribe("remotePlayerChange", this.vC, this);
            a.subscribe("remoteQueueChange", this.sG, this);
            a.subscribe("previousNextChange", this.oV, this);
            a.subscribe("nowAutoplaying", this.iV, this);
            a.subscribe("autoplayDismissed", this.LU, this);
            g.E(this, this.j);
            g.E(this, this.u);
            g.E(this, this.J);
            g.E(this, this.T);
            g.E(this, this.I);
            this.UW();
            this.sG();
            this.vC()
        },
        Cpb = function(a, b) {
            if (i$(a)) {
                a.wc.unsubscribe("remotePlayerChange", a.vC, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = L9(a.wc);
                if (c !== d.volume || b !== d.muted) a.wc.setVolume(c, b), a.T.start();
                a.wc.subscribe("remotePlayerChange", a.vC, a)
            }
        },
        Fpb = function(a) {
            a.qc(0);
            a.j.stop();
            a.kc(new g.hM(64))
        },
        Gpb = function(a, b) {
            if (i$(a) && !a.C) {
                var c = null;
                b && (c = {
                    style: a.F.getSubtitlesUserSettings()
                }, g.Zc(c, b));
                a.wc.iQ(a.F.getVideoData(1).videoId, c);
                a.B = L9(a.wc).trackData
            }
        },
        j$ = function(a, b) {
            var c = a.F.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.F.getVideoData(1);
            a.wc.playVideo(c.videoId, b, d, e, c.playerParams, c.ya, Qkb(c));
            a.kc(new g.hM(1))
        },
        Hpb = function(a, b) {
            if (b) {
                var c = a.F.getOption("captions", "tracklist", {
                    ET: 1
                });
                c && c.length ? (a.F.setOption("captions", "track", b), a.C = !1) : (a.F.loadModule("captions"), a.C = !0)
            } else a.F.setOption("captions", "track", {})
        },
        i$ = function(a) {
            return L9(a.wc).videoId === a.F.getVideoData(1).videoId
        },
        k$ = function() {
            g.U.call(this, {
                G: "div",
                K: "ytp-mdx-popup-dialog",
                X: {
                    role: "dialog"
                },
                W: [{
                    G: "div",
                    K: "ytp-mdx-popup-dialog-inner-content",
                    W: [{
                        G: "div",
                        K: "ytp-mdx-popup-title",
                        qa: "You're signed out"
                    }, {
                        G: "div",
                        K: "ytp-mdx-popup-description",
                        qa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        G: "div",
                        K: "ytp-mdx-privacy-popup-buttons",
                        W: [{
                            G: "button",
                            Ia: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            qa: "Cancel"
                        }, {
                            G: "button",
                            Ia: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            qa: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.lO(this, 250);
            this.cancelButton = this.Ba("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ba("ytp-mdx-privacy-popup-confirm");
            g.E(this, this.j);
            this.S(this.cancelButton, "click", this.u);
            this.S(this.confirmButton, "click", this.B)
        },
        l$ = function(a) {
            g.U.call(this, {
                G: "div",
                K: "ytp-remote",
                W: [{
                    G: "div",
                    K: "ytp-remote-display-status",
                    W: [{
                        G: "div",
                        K: "ytp-remote-display-status-icon",
                        W: [g.xFa()]
                    }, {
                        G: "div",
                        K: "ytp-remote-display-status-text",
                        qa: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.lO(this, 250);
            g.E(this, this.j);
            this.S(a, "presentingplayerstatechange", this.onStateChange);
            this.Cc(a.Fb())
        },
        m$ = function(a, b) {
            g.JU.call(this, "Play on", 1, a, b);
            this.F = a;
            this.gt = {};
            this.S(a, "onMdxReceiversChange", this.C);
            this.S(a, "presentingplayerstatechange", this.C);
            this.C()
        },
        Ipb = function(a) {
            g.rR.call(this, a);
            this.Vo = {
                key: elb(),
                name: "This computer"
            };
            this.ul = null;
            this.subscriptions = [];
            this.qN = this.wc = null;
            this.gt = [this.Vo];
            this.Fr = this.Vo;
            this.Ud = new g.hM(64);
            this.cU = 0;
            this.Bh = -1;
            this.HC = !1;
            this.FC = this.bz = null;
            if (!g.UH(this.player.V()) && !g.VH(this.player.V())) {
                a = this.player;
                var b = g.qQ(a);
                b && (b = b.Lm()) && (b = new m$(a, b), g.E(this, b));
                b = new l$(a);
                g.E(this, b);
                g.IQ(a, b.element, 4);
                this.bz = new k$;
                g.E(this, this.bz);
                g.IQ(a, this.bz.element, 4);
                this.HC = !!b$()
            }
        },
        n$ = function(a) {
            a.FC && (a.player.removeEventListener("presentingplayerstatechange",
                a.FC), a.FC = null)
        },
        Jpb = function(a, b, c) {
            a.Ud = c;
            a.player.ea("presentingplayerstatechange", new g.AL(c, b))
        },
        o$ = function(a, b) {
            if (b.key !== a.Fr.key)
                if (b.key === a.Vo.key) f$();
                else if (Dpb(a) && Kpb(a), a.Fr = b, !a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.VH(a.player.V())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.V().N("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.mR(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.ya,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = Qkb(d)) && (a.locationInfo = d);
                    d = a
                }
                Z9("Connecting to: " + g.Gh(b));
                "cast-selector-receiver" == b.key ? (a$(d || null), b = d || null, C9() ? A9().setLaunchParams(b) : z9("setLaunchParams called before ready.")) : !d && ypb() && Y9() == b.key ? b8("yt-remote-connection-change", !0) : (f$(), a$(d || null), d = X9().vk(), (b = g8(d, b.key)) && g$(b, 1))
            }
        },
        Dpb = function(a) {
            var b;
            (b = !a.player.V().N("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.L("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.L("SESSION_INDEX") && !g.L("LOGGED_IN"))) || a.HC || !a.bz);
            return b ? !1 : g.kI(a.player.V()) || g.nI(a.player.V())
        },
        Kpb = function(a) {
            a.player.Fb().Zc() ? a.player.pauseVideo() : (a.FC = function(b) {
                !a.HC && g.CL(b, 8) && (a.player.pauseVideo(), n$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.FC));
            a.bz && a.bz.Qc();
            d$() || (h$ = !0)
        };
    g.sr.prototype.Rr = g.ca(0, function() {
        return g.bg(this, 6)
    });
    var Smb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        P8 = {
            "'": "\\'"
        },
        Zkb = {
            cha: "atp",
            c_a: "ska",
            iWa: "que",
            XMa: "mus",
            b_a: "sus",
            iza: "dsp",
            GXa: "seq",
            ALa: "mic",
            Ara: "dpa",
            mia: "cds",
            MMa: "mlm",
            nra: "dsdtr",
            fOa: "ntb",
            a$a: "vsp"
        },
        $kb = {
            Y_: "u",
            CLASSIC: "cl",
            z_: "k",
            tY: "i",
            fY: "cr",
            G_: "m",
            pY: "g",
            gR: "up"
        };
    c8.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var k8, klb = "",
        zlb = tlb("loadCastFramework") || tlb("loadCastApplicationFramework"),
        Clb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.Ra(n8, g.D);
    g.k = n8.prototype;
    g.k.TY = function(a) {
        this.C = arguments;
        this.j = !1;
        this.Dc ? this.B = g.Qa() + this.Hi : this.Dc = g.sf(this.D, this.Hi)
    };
    g.k.stop = function() {
        this.Dc && (g.Da.clearTimeout(this.Dc), this.Dc = null);
        this.B = null;
        this.j = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.j && (this.j = !1, this.I.apply(null, this.C)))
    };
    g.k.ra = function() {
        this.stop();
        n8.Df.ra.call(this)
    };
    g.k.UY = function() {
        this.Dc && (g.Da.clearTimeout(this.Dc), this.Dc = null);
        this.B ? (this.Dc = g.sf(this.D, this.B - g.Qa()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.I.apply(null, this.C))
    };
    g.v(o8, g.D);
    g.k = o8.prototype;
    g.k.oI = function(a) {
        this.B = arguments;
        this.Dc || this.u ? this.j = !0 : Olb(this)
    };
    g.k.stop = function() {
        this.Dc && (g.Da.clearTimeout(this.Dc), this.Dc = null, this.j = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.j || this.Dc || (this.j = !1, Olb(this))
    };
    g.k.ra = function() {
        g.D.prototype.ra.call(this);
        this.stop()
    };
    p8.prototype.stringify = function(a) {
        return g.Da.JSON.stringify(a, void 0)
    };
    p8.prototype.parse = function(a) {
        return g.Da.JSON.parse(a, void 0)
    };
    g.Ra(Plb, g.eb);
    g.Ra(Qlb, g.eb);
    var Rlb = null;
    g.Ra(Tlb, g.eb);
    g.Ra(Ulb, g.eb);
    g.Ra(Vlb, g.eb);
    Wlb.prototype.info = function() {};
    Wlb.prototype.warning = function() {};
    var cmb = {},
        v8 = {};
    g.k = t8.prototype;
    g.k.setTimeout = function(a) {
        this.Hb = a
    };
    g.k.XY = function(a) {
        a = a.target;
        var b = this.Xa;
        b && 3 == g.gi(a) ? b.oI() : this.MP(a)
    };
    g.k.MP = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.gi(this.j),
                    c = this.j.u,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.oI || this.j && (this.u.u || g.ii(this.j) || g.ji(this.j)))) {
                    this.Ka || 4 != b || 7 == c || (8 == c || 0 >= d ? q8(3) : q8(2));
                    y8(this);
                    var e = this.j.getStatus();
                    this.Rb = e;
                    b: if (amb(this)) {
                        var f = g.ji(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.gi(this.j);
                        if (!this.u.B) {
                            if ("undefined" === typeof TextDecoder) {
                                w8(this);
                                x8(this);
                                var m = "";
                                break b
                            }
                            this.u.B = new g.Da.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.splice(0, h);
                        this.u.j += a;
                        this.ma = 0;
                        m = this.u.j
                    } else m = g.ii(this.j);
                    if (this.B = 200 == e) {
                        if (this.ac && !this.Sa) {
                            b: {
                                if (this.j) {
                                    var n = g.ki(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.Pb(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Sa = !0,
                            dmb(this, e);
                            else {
                                this.B = !1;
                                this.I = 3;
                                r8(12);
                                w8(this);
                                x8(this);
                                break a
                            }
                        }
                        this.Fa ? (emb(this, b, m), g.oI && this.B && 3 == b && (this.ib.Qa(this.kb, "tick", this.WY), this.kb.start())) : dmb(this, m);
                        4 == b && w8(this);
                        this.B && !this.Ka && (4 == b ? gmb(this.D, this) : (this.B = !1, u8(this)))
                    } else g.Afa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.I = 3, r8(12)) : (this.I = 0, r8(13)), w8(this), x8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.WY = function() {
        if (this.j) {
            var a = g.gi(this.j),
                b = g.ii(this.j);
            this.ma < b.length && (y8(this), emb(this, a, b), this.B && 4 != a && u8(this))
        }
    };
    g.k.cancel = function() {
        this.Ka = !0;
        w8(this)
    };
    g.k.VY = function() {
        this.Y = null;
        var a = Date.now();
        0 <= a - this.Tb ? (2 != this.Ra && (q8(3), r8(17)), w8(this), this.I = 2, x8(this)) : fmb(this, this.Tb - a)
    };
    g.k.getLastError = function() {
        return this.I
    };
    g.k.dL = function() {
        return this.j
    };
    pmb.prototype.cancel = function() {
        this.B = rmb(this);
        if (this.u) this.u.cancel(), this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.t(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = vmb.prototype;
    g.k.NP = 8;
    g.k.qh = 1;
    g.k.connect = function(a, b, c, d) {
        r8(0);
        this.yc = a;
        this.Ka = b || {};
        c && void 0 !== d && (this.Ka.OSID = c, this.Ka.OAID = d);
        this.kb = this.Fc;
        this.Ma = lmb(this, null, this.yc);
        C8(this)
    };
    g.k.disconnect = function() {
        xmb(this);
        if (3 == this.qh) {
            var a = this.Xa++,
                b = this.Ma.clone();
            g.Aj(b, "SID", this.C);
            g.Aj(b, "RID", a);
            g.Aj(b, "TYPE", "terminate");
            F8(this, b);
            a = new t8(this, this.C, a);
            a.Ra = 2;
            a.J = Z7(b.clone());
            b = !1;
            g.Da.navigator && g.Da.navigator.sendBeacon && (b = g.Da.navigator.sendBeacon(a.J.toString(), ""));
            !b && g.Da.Image && ((new Image).src = a.J, b = !0);
            b || (a.j = $lb(a.D, null), a.j.send(a.J));
            a.Aa = Date.now();
            u8(a)
        }
        Dmb(this)
    };
    g.k.Rg = function() {
        return 0 == this.qh
    };
    g.k.getState = function() {
        return this.qh
    };
    g.k.PP = function(a) {
        if (this.I)
            if (this.I = null, 1 == this.qh) {
                if (!a) {
                    this.Xa = Math.floor(1E5 * Math.random());
                    a = this.Xa++;
                    var b = new t8(this, "", a),
                        c = this.Y;
                    this.Tb && (c ? (c = g.Xc(c), g.Zc(c, this.Tb)) : c = this.Tb);
                    null !== this.J || this.wb || (b.Ma = c, c = null);
                    var d;
                    if (this.Hb) a: {
                        for (var e = d = 0; e < this.B.length; e++) {
                            b: {
                                var f = this.B[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.B.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = Amb(this, b, d);
                    e = this.Ma.clone();
                    g.Aj(e, "RID", a);
                    g.Aj(e, "CVER", 22);
                    this.Fa && g.Aj(e, "X-HTTP-Session-Id", this.Fa);
                    F8(this, e);
                    c && (this.wb ? d = "headers=" + g.je(g.fha(c)) + "&" + d : this.J && g.Ej(e, this.J, c));
                    kmb(this.u, b);
                    this.Jf && g.Aj(e, "TYPE", "init");
                    this.Hb ? (g.Aj(e, "$req", d), g.Aj(e, "SID", "null"), b.ac = !0, Zlb(b, e, null)) : Zlb(b, e, d);
                    this.qh = 2
                }
            } else 3 == this.qh && (a ? Bmb(this, a) : 0 == this.B.length || qmb(this.u) || Bmb(this))
    };
    g.k.OP = function() {
        this.T = null;
        Cmb(this);
        if (this.Mc && !(this.ib || null == this.j || 0 >= this.Pd)) {
            var a = 2 * this.Pd;
            this.ya = s8((0, g.Oa)(this.n4, this), a)
        }
    };
    g.k.n4 = function() {
        this.ya && (this.ya = null, this.kb = !1, this.ib = !0, r8(10), A8(this), Cmb(this))
    };
    g.k.FM = function(a) {
        this.j == a && this.Mc && !this.ib && (wmb(this), this.ib = !0, r8(11))
    };
    g.k.YY = function() {
        null != this.ma && (this.ma = null, A8(this), imb(this), r8(19))
    };
    g.k.T7 = function(a) {
        a ? r8(2) : r8(1)
    };
    g.k.isActive = function() {
        return !!this.D && this.D.isActive(this)
    };
    g.k = Fmb.prototype;
    g.k.TP = function() {};
    g.k.SP = function() {};
    g.k.RP = function() {};
    g.k.QP = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.ZY = function() {};
    g.Ra(H8, g.pd);
    H8.prototype.open = function() {
        this.j.D = this.C;
        this.J && (this.j.Ra = !0);
        this.j.connect(this.I, this.u || void 0)
    };
    H8.prototype.close = function() {
        this.j.disconnect()
    };
    H8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Gh(a), a = c);
        b.B.push(new omb(b.wf++, a));
        3 == b.qh && C8(b)
    };
    H8.prototype.ra = function() {
        this.j.D = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        H8.Df.ra.call(this)
    };
    g.Ra(Hmb, Plb);
    g.Ra(Imb, Qlb);
    g.Ra(G8, Fmb);
    G8.prototype.TP = function() {
        this.j.dispatchEvent("m")
    };
    G8.prototype.SP = function(a) {
        this.j.dispatchEvent(new Hmb(a))
    };
    G8.prototype.RP = function(a) {
        this.j.dispatchEvent(new Imb(a))
    };
    G8.prototype.QP = function() {
        this.j.dispatchEvent("n")
    };
    var J8 = new g.pd;
    g.v(Lmb, g.eb);
    g.k = L8.prototype;
    g.k.Nt = null;
    g.k.Ap = !1;
    g.k.Hw = null;
    g.k.qI = null;
    g.k.Fw = null;
    g.k.Gw = null;
    g.k.Wq = null;
    g.k.Yq = null;
    g.k.Ot = null;
    g.k.Si = null;
    g.k.SD = 0;
    g.k.Hn = null;
    g.k.RD = null;
    g.k.Xq = null;
    g.k.dA = -1;
    g.k.tW = !0;
    g.k.Mt = !1;
    g.k.pI = 0;
    g.k.QD = null;
    var Qmb = {},
        Pmb = {};
    g.k = L8.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.bZ = function(a) {
        a = a.target;
        var b = this.QD;
        b && 3 == g.gi(a) ? b.oI() : this.UP(a)
    };
    g.k.UP = function(a) {
        try {
            if (a == this.Si) a: {
                var b = g.gi(this.Si),
                    c = this.Si.u,
                    d = this.Si.getStatus();
                if (g.Be && !g.vc(10) || g.wc && !g.uc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.ii(this.Si)) break a;this.Mt || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.jn(3) : this.j.jn(2));Vmb(this);
                var e = this.Si.getStatus();this.dA = e;
                var f = g.ii(this.Si);
                if (this.Ap = 200 == e) {
                    4 == b && N8(this);
                    if (this.Fa) {
                        for (a = !0; !this.Mt && this.SD < f.length;) {
                            var h = Rmb(this, f);
                            if (h == Pmb) {
                                4 == b && (this.Xq = 4, K8(15), a = !1);
                                break
                            } else if (h == Qmb) {
                                this.Xq = 4;
                                K8(16);
                                a = !1;
                                break
                            } else Wmb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Xq = 1, K8(17), a = !1);
                        this.Ap = this.Ap && a;
                        a || (N8(this), O8(this))
                    } else Wmb(this, f);
                    this.Ap && !this.Mt && (4 == b ? this.j.TD(this) : (this.Ap = !1, M8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Xq = 3, K8(13)) : (this.Xq = 0, K8(14)),
                N8(this),
                O8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.u6 = function(a) {
        I8((0, g.Oa)(this.t6, this, a), 0)
    };
    g.k.t6 = function(a) {
        this.Mt || (Vmb(this), Wmb(this, a), M8(this))
    };
    g.k.wV = function(a) {
        I8((0, g.Oa)(this.s6, this, a), 0)
    };
    g.k.s6 = function(a) {
        this.Mt || (N8(this), this.Ap = a, this.j.TD(this), this.j.jn(4))
    };
    g.k.cancel = function() {
        this.Mt = !0;
        N8(this)
    };
    g.k.aZ = function() {
        this.Hw = null;
        var a = Date.now();
        0 <= a - this.qI ? (2 != this.Gw && this.j.jn(3), N8(this), this.Xq = 2, K8(18), O8(this)) : Umb(this, this.qI - a)
    };
    g.k.getLastError = function() {
        return this.Xq
    };
    g.k = Zmb.prototype;
    g.k.sI = null;
    g.k.vj = null;
    g.k.SG = !1;
    g.k.MW = null;
    g.k.TE = null;
    g.k.WL = null;
    g.k.tI = null;
    g.k.ol = null;
    g.k.Bp = -1;
    g.k.eA = null;
    g.k.BA = null;
    g.k.connect = function(a) {
        this.tI = a;
        a = R8(this.j, null, this.tI);
        K8(3);
        this.MW = Date.now();
        var b = this.j.T;
        null != b ? (this.eA = b[0], (this.BA = b[1]) ? (this.ol = 1, $mb(this)) : (this.ol = 2, anb(this))) : ($7(a, "MODE", "init"), this.vj = new L8(this), this.vj.Nt = this.sI, Omb(this.vj, a, !1, null, !0), this.ol = 0)
    };
    g.k.H0 = function(a) {
        if (a) this.ol = 2, anb(this);
        else {
            K8(4);
            var b = this.j;
            b.Nn = b.Br.Bp;
            V8(b, 9)
        }
        a && this.jn(2)
    };
    g.k.rI = function(a) {
        return this.j.rI(a)
    };
    g.k.abort = function() {
        this.vj && (this.vj.cancel(), this.vj = null);
        this.Bp = -1
    };
    g.k.Rg = function() {
        return !1
    };
    g.k.VP = function(a, b) {
        this.Bp = a.dA;
        if (0 == this.ol)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Nn = this.Bp;
                    V8(a, 2);
                    return
                }
                this.eA = c[0];
                this.BA = c[1]
            } else a = this.j, a.Nn = this.Bp, V8(a, 2);
        else if (2 == this.ol)
            if (this.SG) K8(7), this.WL = Date.now();
            else if ("11111" == b) {
            if (K8(6), this.SG = !0, this.TE = Date.now(), a = this.TE - this.MW, !g.Be || g.vc(10) || 500 > a) this.Bp = 200, this.vj.cancel(), K8(12), S8(this.j, this, !0)
        } else K8(8), this.TE = this.WL = Date.now(), this.SG = !1
    };
    g.k.TD = function() {
        this.Bp = this.vj.dA;
        if (this.vj.Ap) 0 == this.ol ? this.BA ? (this.ol = 1, $mb(this)) : (this.ol = 2, anb(this)) : 2 == this.ol && ((!g.Be || g.vc(10) ? !this.SG : 200 > this.WL - this.TE) ? (K8(11), S8(this.j, this, !1)) : (K8(12), S8(this.j, this, !0)));
        else {
            0 == this.ol ? K8(9) : 2 == this.ol && K8(10);
            var a = this.j;
            this.vj.getLastError();
            a.Nn = this.Bp;
            V8(a, 2)
        }
    };
    g.k.fA = function() {
        return this.j.fA()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.jn = function(a) {
        this.j.jn(a)
    };
    g.k = bnb.prototype;
    g.k.Mn = null;
    g.k.gA = null;
    g.k.Ej = null;
    g.k.Bg = null;
    g.k.uI = null;
    g.k.UD = null;
    g.k.WP = null;
    g.k.VD = null;
    g.k.hA = 0;
    g.k.dZ = 0;
    g.k.wi = null;
    g.k.Zq = null;
    g.k.Cp = null;
    g.k.Qt = null;
    g.k.Br = null;
    g.k.FH = null;
    g.k.Kw = -1;
    g.k.XP = -1;
    g.k.Nn = -1;
    g.k.Jw = 0;
    g.k.Iw = 0;
    g.k.Pt = 8;
    g.Ra(dnb, g.eb);
    g.Ra(enb, g.eb);
    g.k = bnb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        K8(0);
        this.uI = b;
        this.gA = c || {};
        d && void 0 !== e && (this.gA.OSID = d, this.gA.OAID = e);
        this.J ? (I8((0, g.Oa)(this.XR, this, a), 100), gnb(this)) : this.XR(a)
    };
    g.k.disconnect = function() {
        hnb(this);
        if (3 == this.j) {
            var a = this.hA++,
                b = this.UD.clone();
            g.Aj(b, "SID", this.C);
            g.Aj(b, "RID", a);
            g.Aj(b, "TYPE", "terminate");
            U8(this, b);
            a = new L8(this, this.C, a);
            a.Gw = 2;
            a.Wq = Z7(b.clone());
            (new Image).src = a.Wq.toString();
            a.Fw = Date.now();
            M8(a)
        }
        rnb(this)
    };
    g.k.XR = function(a) {
        this.Br = new Zmb(this);
        this.Br.sI = this.Mn;
        this.Br.u = this.D;
        this.Br.connect(a)
    };
    g.k.Rg = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.ZP = function(a) {
        this.Zq = null;
        mnb(this, a)
    };
    g.k.YP = function() {
        this.Cp = null;
        this.Bg = new L8(this, this.C, "rpc", this.I);
        this.Bg.Nt = this.Mn;
        this.Bg.pI = 0;
        var a = this.WP.clone();
        g.Aj(a, "RID", "rpc");
        g.Aj(a, "SID", this.C);
        g.Aj(a, "CI", this.FH ? "0" : "1");
        g.Aj(a, "AID", this.Kw);
        U8(this, a);
        if (!g.Be || g.vc(10)) g.Aj(a, "TYPE", "xmlhttp"), Omb(this.Bg, a, !0, this.VD, !1);
        else {
            g.Aj(a, "TYPE", "html");
            var b = this.Bg,
                c = !!this.VD;
            b.Gw = 3;
            b.Wq = Z7(a.clone());
            Tmb(b, c)
        }
    };
    g.k.VP = function(a, b) {
        if (0 != this.j && (this.Bg == a || this.Ej == a))
            if (this.Nn = a.dA, this.Ej == a && 3 == this.j)
                if (7 < this.Pt) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Cp) {
                                if (this.Bg)
                                    if (this.Bg.Fw + 3E3 < this.Ej.Fw) T8(this), this.Bg.cancel(), this.Bg = null;
                                    else break a;
                                pnb(this);
                                K8(19)
                            }
                        }
                    else this.XP = a[1], 0 < this.XP - this.Kw && 37500 > a[2] && this.FH && 0 == this.Iw && !this.Qt && (this.Qt = I8((0, g.Oa)(this.eZ, this), 6E3));
                    else V8(this, 11)
                } else null != b && V8(this, 11);
        else if (this.Bg ==
            a && T8(this), !g.Pb(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.Kw = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.VD = c[2], c = c[3], null != c ? this.Pt = c : this.Pt = 6, this.j = 3, this.wi && this.wi.cQ(), this.WP = R8(this, this.fA() ? this.VD : null, this.uI), nnb(this)) : "stop" == c[0] && V8(this, 7) : 3 == this.j && ("stop" == c[0] ? V8(this, 7) : "noop" != c[0] && this.wi && this.wi.bQ(c), this.Iw = 0)
    };
    g.k.eZ = function() {
        null != this.Qt && (this.Qt = null, this.Bg.cancel(), this.Bg = null, pnb(this), K8(20))
    };
    g.k.TD = function(a) {
        if (this.Bg == a) {
            T8(this);
            this.Bg = null;
            var b = 2
        } else if (this.Ej == a) this.Ej = null, b = 1;
        else return;
        this.Nn = a.dA;
        if (0 != this.j)
            if (a.Ap)
                if (1 == b) {
                    b = Date.now() - a.Fw;
                    var c = J8;
                    c.dispatchEvent(new dnb(c, a.Ot ? a.Ot.length : 0, b, this.Jw));
                    fnb(this);
                    this.B.length = 0
                } else nnb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Nn)) {
                if (d = 1 == b) this.Ej || this.Zq || 1 == this.j || 2 <= this.Jw ? d = !1 : (this.Zq = I8((0, g.Oa)(this.ZP, this, a), onb(this, this.Jw)), this.Jw++, d = !0);
                d = !(d || 2 == b && pnb(this))
            }
            if (d) switch (c) {
                case 1:
                    V8(this,
                        5);
                    break;
                case 4:
                    V8(this, 10);
                    break;
                case 3:
                    V8(this, 6);
                    break;
                case 7:
                    V8(this, 12);
                    break;
                default:
                    V8(this, 2)
            }
        }
    };
    g.k.cZ = function(a) {
        if (!g.kb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.S7 = function(a) {
        a ? K8(2) : (K8(1), qnb(this, 8))
    };
    g.k.rI = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.di;
        a.J = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.wi && this.wi.isActive(this)
    };
    g.k.jn = function(a) {
        var b = J8;
        b.dispatchEvent(new enb(b, a))
    };
    g.k.fA = function() {
        return !(!g.Be || g.vc(10))
    };
    g.k = snb.prototype;
    g.k.cQ = function() {};
    g.k.bQ = function() {};
    g.k.aQ = function() {};
    g.k.vI = function() {};
    g.k.dQ = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = tnb.prototype;
    g.k.Af = function() {
        return 0 === this.j.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.j = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.kb(this.j, a) || g.kb(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.K5a)(b, a);
        0 <= c ? (g.nb(b, c), b = !0) : b = !1;
        return b || g.ob(this.u, a)
    };
    g.k.Gl = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.v(unb, g.eb);
    g.v(vnb, g.eb);
    g.Ra(W8, g.D);
    g.k = W8.prototype;
    g.k.m6 = function() {
        this.Hi = Math.min(3E5, 2 * this.Hi);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.Hi + 15E3 * Math.random();
        g.jo(this.j, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Hi = 5E3
    };
    xnb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.Yv("enable_client_streamz_web")) {
            a = g.t(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Uea(c.value), c = {
                serializedIncrementBatch: g.xf(c.j())
            }, g.Kx("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var X8;
    g.Ra(ynb, snb);
    g.k = ynb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.Jh = function(a) {
        return this.B.Jh(a)
    };
    g.k.ea = function(a, b) {
        return this.B.ea.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.$a(this.B), this.disconnect(), g.$a(this.u), this.u = null, this.oa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.Y = "";
            this.u.stop();
            this.I = a || null;
            this.D = b || 0;
            a = this.Aa + "/test";
            b = this.Aa + "/bind";
            var d = new bnb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Ra),
                e = this.j;
            e && (e.wi = null);
            d.wi = this;
            this.j = d;
            znb(this);
            if (this.j) {
                d = g.L("ID_TOKEN");
                var f = this.j.Mn || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Mn = f
            }
            e ? (3 != e.getState() && 0 == jnb(e) || e.getState(), this.j.connect(a, b, this.J, e.C, e.Kw)) : c ? this.j.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.j.connect(a, b, this.J)
        }
    };
    g.k.disconnect = function(a) {
        this.T = a || 0;
        this.u.stop();
        znb(this);
        this.j && (3 == this.j.getState() && mnb(this.j), this.j.disconnect());
        this.T = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Zc(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.py() && (znb(this), inb(this.j, a))
    };
    g.k.cQ = function() {
        this.u.reset();
        this.I = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) inb(this.j, a[b])
        }
        this.ea("handlerOpened");
        Flb(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.aQ = function(a) {
        var b = 2 == a && 401 == this.j.Nn;
        4 == a || b || this.u.start();
        this.ea("handlerError", a, b);
        Llb(this.Fa, "BROWSER_CHANNEL")
    };
    g.k.vI = function(a, b) {
        if (!this.u.isActive()) this.ea("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        Hlb(this.ya, "BROWSER_CHANNEL");
        a && this.Xa.j.yI("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.bb.j.yI("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.dQ = function() {
        var a = {
            v: 2
        };
        this.Y && (a.gsessionid = this.Y);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.T && (a.ui = "" + this.T);
        this.I && g.Zc(a, this.I);
        return a
    };
    g.k.bQ = function(a) {
        "S" == a[0] ? this.Y = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.ea("handlerMessage", new wnb(a[0], a[1]));
        Jlb(this.Ka, "BROWSER_CHANNEL")
    };
    g.k.py = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.Lq = function(a) {
        (this.J.loungeIdToken = a) || this.u.stop();
        if (this.Sa && this.j) {
            var b = this.j.Mn || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Mn = b
        }
    };
    g.k.Rr = function() {
        return this.J.id
    };
    g.k.hs = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    };
    g.k.Mv = function() {
        var a = this.u;
        g.ko(a.j);
        a.start()
    };
    g.k.q7 = function() {
        this.u.isActive();
        0 == jnb(this.j) && this.connect(this.I, this.D)
    };
    Y8.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Y8.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Y8.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    g.v(Bnb, g.pd);
    g.k = Bnb.prototype;
    g.k.connect = function(a, b, c) {
        this.qd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.qd.disconnect(a)
    };
    g.k.Mv = function() {
        this.qd.Mv()
    };
    g.k.Rr = function() {
        return this.qd.Rr()
    };
    g.k.hs = function() {
        return this.qd.hs()
    };
    g.k.py = function() {
        return this.qd.py()
    };
    g.k.hZ = function() {
        this.dispatchEvent("channelOpened");
        var a = this.qd,
            b = this.j;
        g.PA("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.FH,
            sessionId: a.j.C,
            arrayId: a.j.Kw
        });
        g.PA("yt-remote-session-screen-id", b);
        a = h8();
        b = i8();
        g.kb(a, b) || a.push(b);
        jlb(a);
        llb()
    };
    g.k.fZ = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.gZ = function(a) {
        this.dispatchEvent(new unb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new vnb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.qd.sendMessage(a, b)
    };
    g.k.Lq = function(a) {
        this.qd.Lq(a)
    };
    g.k.dispose = function() {
        this.qd.dispose()
    };
    g.k = Cnb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.I && (this.B.stop(), this.T = a, this.J = b, Enb(this), (a = g.L("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.u3 && (this.u.mdxVersion = "" + this.j.u3), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities), this.j.X0 && (this.u.cst = this.j.X0)),
            0 !== this.J ? this.u.ui = "" + this.J : delete this.u.ui, Object.assign(this.u, this.T), this.channel = new H8(this.pathPrefix, {
                J2: "gsessionid",
                y3: this.C,
                z3: this.u
            }), this.channel.open(), this.I = 2, Dnb(this))
    };
    g.k.disconnect = function(a) {
        this.Y = void 0 === a ? 0 : a;
        this.B.stop();
        Enb(this);
        this.channel && (0 !== this.Y ? this.u.ui = "" + this.Y : delete this.u.ui, this.channel.close());
        this.Y = 0
    };
    g.k.hs = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    };
    g.k.Mv = function() {
        var a = this.B;
        g.ko(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (Enb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Lq = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.k.Rr = function() {
        return this.j ? this.j.id : ""
    };
    g.k.ea = function(a) {
        return this.D.ea.apply(this.D, [a].concat(g.u(g.xa.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    };
    g.k.Jh = function(a) {
        return this.D.Jh(a)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.$a(this.D), this.disconnect(), g.$a(this.B), this.Aa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.v(Fnb, g.pd);
    g.k = Fnb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Mv = function() {
        this.j.Mv()
    };
    g.k.Rr = function() {
        return this.j.Rr()
    };
    g.k.hs = function() {
        return this.j.hs()
    };
    g.k.py = function() {
        return 3 === this.j.I
    };
    g.k.kZ = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.iZ = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.jZ = function(a) {
        this.dispatchEvent(new unb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new vnb(401 === this.j.Gg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Lq = function(a) {
        this.j.Lq(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var Nnb = Date.now(),
        $8 = null,
        d9 = Array(50),
        c9 = -1,
        e9 = !1;
    g.Ra(f9, g.RB);
    f9.prototype.vk = function() {
        return this.screens
    };
    f9.prototype.contains = function(a) {
        return !!glb(this.screens, a)
    };
    f9.prototype.get = function(a) {
        return a ? g8(this.screens, a) : null
    };
    f9.prototype.info = function(a) {
        a9(this.I, a)
    };
    g.v(Rnb, g.RB);
    g.k = Rnb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.Dc) && this.KV()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.Dc) || (g.vw(this.Dc), this.Dc = NaN)
    };
    g.k.ra = function() {
        this.stop();
        g.RB.prototype.ra.call(this)
    };
    g.k.KV = function() {
        this.Dc = NaN;
        this.j = g.yw(Z8(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.J
            },
            timeout: 5E3,
            onSuccess: (0, g.Oa)(this.mZ, this),
            onError: (0, g.Oa)(this.lZ, this),
            onTimeout: (0, g.Oa)(this.nZ, this)
        })
    };
    g.k.mZ = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.I;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ea("pairingComplete", new d8(a), b)
    };
    g.k.lZ = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= Lpb.length ? this.ea("pairingFailed", Error("DIAL polling timed out")) : (a = Lpb[this.u], this.Dc = g.tw((0, g.Oa)(this.KV, this), a), this.u++) : this.ea("pairingFailed", Error("Server error " + a.status))
    };
    g.k.nZ = function() {
        this.j = null;
        this.ea("pairingFailed", Error("Server not responding"))
    };
    var Lpb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ra(h9, f9);
    g.k = h9.prototype;
    g.k.start = function() {
        g9(this) && this.ea("screenChange");
        !g.QA("yt-remote-lounge-token-expiration") && Snb(this);
        g.vw(this.j);
        this.j = g.tw((0, g.Oa)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        g9(this);
        Onb(this, a);
        i9(this, !1);
        this.ea("screenChange");
        b(a);
        a.token || Snb(this)
    };
    g.k.remove = function(a, b) {
        var c = g9(this);
        Qnb(this, a) && (i9(this, !1), c = !0);
        b(a);
        c && this.ea("screenChange")
    };
    g.k.EH = function(a, b, c, d) {
        var e = g9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, i9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.ea("screenChange")
    };
    g.k.ra = function() {
        g.vw(this.j);
        h9.Df.ra.call(this)
    };
    g.k.f2 = function(a) {
        g9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        i9(this, !b);
        b && a9(this.I, "Missed " + b + " lounge tokens.")
    };
    g.k.e2 = function(a) {
        a9(this.I, "Requesting lounge tokens failed: " + a)
    };
    g.v(Unb, g.RB);
    g.k = Unb.prototype;
    g.k.start = function() {
        var a = parseInt(g.QA("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Qa() - 144E5 < a ? 0 : a) ? j9(this): (this.C = g.Qa() + 3E5, g.PA("yt-remote-fast-check-period", this.C), this.IN())
    };
    g.k.Af = function() {
        return g.Tc(this.j)
    };
    g.k.update = function() {
        Tnb("Updating availability on schedule.");
        var a = this.I(),
            b = g.Ec(this.j, function(c, d) {
                return c && !!g8(a, d)
            }, this);
        Xnb(this, b)
    };
    g.k.ra = function() {
        g.vw(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.RB.prototype.ra.call(this)
    };
    g.k.IN = function() {
        g.vw(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = Ynb(this);
        if (Skb(a)) {
            var b = Z8(this.D, "/pairing/get_screen_availability");
            this.u = Anb(this.D, b, {
                lounge_token: g.Jc(a).join(",")
            }, (0, g.Oa)(this.S5, this, a), (0, g.Oa)(this.R5, this))
        } else Xnb(this, {}), j9(this)
    };
    g.k.S5 = function(a, b) {
        this.u = null;
        var c = g.Jc(Ynb(this));
        if (g.Eb(c, g.Jc(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            Xnb(this, c);
            j9(this)
        } else this.Rf("Changing Screen set during request."), this.IN()
    };
    g.k.R5 = function(a) {
        this.Rf("Screen availability failed: " + a);
        this.u = null;
        j9(this)
    };
    g.k.Rf = function(a) {
        a9("OnlineScreenService", a)
    };
    g.Ra(k9, f9);
    g.k = k9.prototype;
    g.k.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.ea("screenChange"), this.j.Af() || this.ea("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    };
    g.k.EH = function(a, b, c, d) {
        this.u.contains(a) ? this.u.EH(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, a9(this.I, a), d(Error(a)))
    };
    g.k.vk = function(a) {
        return a ? this.screens : g.rb(this.screens, g.zm(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.eQ = function() {
        return g.zm(this.vk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.fQ = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new Rnb(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.$a(l);
            e(l9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.$a(l);
            f(m)
        });
        l.start();
        return (0, g.Oa)(l.stop, l)
    };
    g.k.oZ = function(a, b, c, d) {
        g.yw(Z8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Oa)(function(e, f) {
                e = new d8(f.screen || {});
                if (!e.name || bob(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); bob(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(l9(this, e))
            }, this),
            onError: (0, g.Oa)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Oa)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.ra = function() {
        g.$a(this.u);
        g.$a(this.j);
        k9.Df.ra.call(this)
    };
    g.k.s2 = function() {
        dob(this);
        this.ea("screenChange");
        this.j.update()
    };
    k9.prototype.dispose = k9.prototype.dispose;
    g.Ra(m9, g.RB);
    g.k = m9.prototype;
    g.k.hj = function(a) {
        this.isDisposed() || (a && (o9(this, "" + a), this.ea("sessionFailed")), this.j = null, this.ea("sessionScreen", null))
    };
    g.k.info = function(a) {
        a9(this.Fa, a)
    };
    g.k.gQ = function() {
        return null
    };
    g.k.cO = function(a) {
        var b = this.u;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Oa)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Oa)(function() {
            o9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.ra = function() {
        this.cO("");
        m9.Df.ra.call(this)
    };
    g.v(p9, m9);
    g.k = p9.prototype;
    g.k.bO = function(a) {
        if (this.B) {
            if (this.B == a) return;
            o9(this, "Overriding cast session with new session object");
            pob(this);
            this.Aa = !1;
            this.Y = "unknown";
            this.B.removeUpdateListener(this.oa);
            this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya)
        }
        this.B = a;
        this.B.addUpdateListener(this.oa);
        this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya);
        kob(this, "getMdxSessionStatus")
    };
    g.k.Cy = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Gh(a))
    };
    g.k.stop = function() {
        this.B ? this.B.stop((0, g.Oa)(function() {
            this.hj()
        }, this), (0, g.Oa)(function() {
            this.hj(Error("Failed to stop receiver app."))
        }, this)) : this.hj(Error("Stopping cast device without session."))
    };
    g.k.cO = function() {};
    g.k.ra = function() {
        this.info("disposeInternal");
        pob(this);
        this.B && (this.B.removeUpdateListener(this.oa), this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya));
        this.B = null;
        m9.prototype.ra.call(this)
    };
    g.k.E6 = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = a8(b), g.Ia(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Gh(b)), a) {
                    case "mdxSessionStatus":
                        hob(this, b);
                        break;
                    case "loungeToken":
                        lob(this, b);
                        break;
                    default:
                        o9(this, "Unknown youtube message: " + a)
                } else o9(this, "Unable to parse message.");
                else o9(this, "No data in message.")
    };
    g.k.XS = function(a, b, c, d) {
        g.vw(this.T);
        this.T = 0;
        aob(this.C, this.u.label, a, this.u.friendlyName, (0, g.Oa)(function(e) {
            e ? b(e) : 0 <= d ? (o9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.T = g.tw((0, g.Oa)(this.XS, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.gQ = function() {
        return this.B
    };
    g.k.pZ = function(a) {
        this.isDisposed() || a || (o9(this, "Cast session died."), this.hj())
    };
    g.v(q9, m9);
    g.k = q9.prototype;
    g.k.bO = function(a) {
        this.B = a;
        this.B.addUpdateListener(this.Ka)
    };
    g.k.Cy = function(a) {
        this.Ma = a;
        this.ma()
    };
    g.k.stop = function() {
        xob(this);
        this.B ? this.B.stop((0, g.Oa)(this.hj, this, null), (0, g.Oa)(this.hj, this, "Failed to stop DIAL device.")) : this.hj()
    };
    g.k.ra = function() {
        xob(this);
        this.B && this.B.removeUpdateListener(this.Ka);
        this.B = null;
        m9.prototype.ra.call(this)
    };
    g.k.qZ = function(a) {
        this.isDisposed() || a || (o9(this, "DIAL session died."), this.D(), this.D = function() {}, this.hj())
    };
    g.v(t9, m9);
    t9.prototype.stop = function() {
        this.hj()
    };
    t9.prototype.bO = function() {};
    t9.prototype.Cy = function() {
        g.vw(this.B);
        this.B = NaN;
        var a = g8(this.C.vk(), this.u.label);
        a ? n9(this, a) : this.hj(Error("No such screen"))
    };
    t9.prototype.ra = function() {
        g.vw(this.B);
        this.B = NaN;
        m9.prototype.ra.call(this)
    };
    g.v(u9, g.RB);
    g.k = u9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.T, [chrome.cast.Capability.AUDIO_OUT]);
        this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.I ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Oa)(this.D5, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Oa)(this.sV, this), e, d, a);
        c.customDialLaunchCallback = (0, g.Oa)(this.B4, this);
        chrome.cast.initialize(c, (0, g.Oa)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), Knb(), this.u.subscribe("onlineScreenChange", (0, g.Oa)(this.hQ, this)), this.B = Aob(this), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Oa)(function(f) {
                this.Rf("Failed to set initial custom receivers: " + g.Gh(f))
            }, this)), this.ea("yt-remote-cast2-availability-change", w9(this)), b(!0))
        }, this), (0, g.Oa)(function(f) {
            this.Rf("Failed to initialize API: " + g.Gh(f));
            b(!1)
        }, this))
    };
    g.k.v7 = function(a, b) {
        v9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) v9("Unsetting old screen status: " + this.j.u.friendlyName), x9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = g8(this.u.vk(), a);
                if (!c) {
                    v9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    v9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = yob(this, c);
                a || (v9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Oa)(function(d) {
                    this.Rf("Failed to set initial custom receivers: " + g.Gh(d))
                }, this)));
                v9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                x9(this, new t9(this.u, a), !0)
            }
            this.j.cO(b)
        } else v9("setConnectedScreenStatus: no screen.")
    };
    g.k.w7 = function(a) {
        this.isDisposed() ? this.Rf("Setting connection data on disposed cast v2") : this.j ? this.j.Cy(a) : this.Rf("Setting connection data without a session")
    };
    g.k.sZ = function() {
        this.isDisposed() ? this.Rf("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), x9(this, null)) : v9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Oa)(this.sV, this), (0, g.Oa)(this.V5, this))
    };
    g.k.ra = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.Oa)(this.hQ, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = Hnb,
            b = g.Ga("yt.mdx.remote.debug.handlers_");
        g.ob(b || [], a);
        g.$a(this.j);
        g.RB.prototype.ra.call(this)
    };
    g.k.Rf = function(a) {
        a9("Controller", a)
    };
    g.k.uV = function(a, b) {
        this.j == a && (b || x9(this, null), this.ea("yt-remote-cast2-session-change", b))
    };
    g.k.A5 = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), v9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.u.label != a.label) v9("onReceiverAction_: Stopping active receiver: " + this.j.u.friendlyName), this.j.stop();
                        else {
                            v9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.ea("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            x9(this,
                                new t9(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            x9(this, new q9(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            x9(this, new p9(this.u, a, this.config_));
                            break;
                        default:
                            this.Rf("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.u.label == a.label ? this.j.stop() : this.Rf("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Rf("onReceiverAction_ called without receiver.")
    };
    g.k.B4 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Rf("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.u : null;
        if (!c || c.label != b.label) return this.Rf("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return v9("Reselecting dial screen."),
                this.ea("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Rf('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            x9(this, new q9(this.u, b, this.C, this.config_))
        }
        b = this.j;
        b.T = a;
        b.T.appState == chrome.cast.DialAppState.RUNNING ? (a = b.T.extraData || {}, c = a.screenId || null, r9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = uob(b, {
                name: b.u.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.T.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.cw(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = vob(b, c)) : a = vob(b, c)) : a = sob(b);
        return a
    };
    g.k.sV = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.I) {
            v9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) v9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), x9(this, new p9(this.u, c, this.config_), !0);
                    else {
                        this.Rf("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.u,
                    e = g8(this.u.vk(),
                        d.label);
                e && e8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (v9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.$a(this.j), this.j = new p9(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Oa)(this.uV, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return zob(b, b.j)
                }), this.j.Cy(null));
                this.j.bO(a)
            }
        }
    };
    g.k.rZ = function() {
        return this.j ? this.j.gQ() : null
    };
    g.k.V5 = function(a) {
        this.isDisposed() || (this.Rf("Failed to estabilish a session: " + g.Gh(a)), a.code != chrome.cast.ErrorCode.CANCEL && x9(this, null), this.ea("yt-remote-cast2-session-failed"))
    };
    g.k.D5 = function(a) {
        v9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = w9(this);
            this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            w9(this) != b && this.ea("yt-remote-cast2-availability-change", w9(this))
        }
    };
    g.k.hQ = function() {
        this.isDisposed() || (this.B = Aob(this), v9("Updating custom receivers: " + g.Gh(this.B)), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Oa)(function() {
            this.Rf("Failed to set custom receivers.")
        }, this)), this.ea("yt-remote-cast2-availability-change", w9(this)))
    };
    u9.prototype.setLaunchParams = u9.prototype.w7;
    u9.prototype.setConnectedScreenStatus = u9.prototype.v7;
    u9.prototype.stopSession = u9.prototype.sZ;
    u9.prototype.getCastSession = u9.prototype.rZ;
    u9.prototype.requestSession = u9.prototype.requestSession;
    u9.prototype.init = u9.prototype.init;
    u9.prototype.dispose = u9.prototype.dispose;
    var Job = [];
    g.k = E9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        Pob(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Mo = a.hasPrevious, this.zk = a.hasNext, this.J = a.playerTime, this.I = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.T = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.Zc = function() {
        return 1 == this.playerState
    };
    g.k.Nk = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + F9(this) : this.D
    };
    g.k.clone = function() {
        return new E9(Qob(this))
    };
    g.v(K9, g.RB);
    g.k = K9.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.hs = function() {
        return this.C.getReconnectTimeout()
    };
    g.k.Mv = function() {
        this.C.reconnect()
    };
    g.k.play = function() {
        M9(this) ? (this.j ? this.j.play(null, g.td, Q9(this, "play")) : P9(this, "play"), Tob(this, 1, H9(L9(this))), this.ea("remotePlayerChange")) : N9(this, this.play)
    };
    g.k.pause = function() {
        M9(this) ? (this.j ? this.j.pause(null, g.td, Q9(this, "pause")) : P9(this, "pause"), Tob(this, 2, H9(L9(this))), this.ea("remotePlayerChange")) : N9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (M9(this)) {
            if (this.j) {
                var b = L9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.Zc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.td, Q9(this, "seekTo", {
                    newTime: a
                }))
            } else P9(this, "seekTo", {
                newTime: a
            });
            Tob(this, 3, a);
            this.ea("remotePlayerChange")
        } else N9(this, g.Pa(this.seekTo, a))
    };
    g.k.stop = function() {
        if (M9(this)) {
            this.j ? this.j.stop(null, g.td, Q9(this, "stopVideo")) : P9(this, "stopVideo");
            var a = L9(this);
            a.index = -1;
            a.videoId = "";
            Pob(a);
            O9(this, a);
            this.ea("remotePlayerChange")
        } else N9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (M9(this)) {
            var c = L9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.Oa)(function() {
                        b9("set receiver volume: " + d)
                    }, this), (0, g.Oa)(function() {
                        this.Rf("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.Oa)(function() {
                    b9("set receiver muted: " + b)
                }, this), (0, g.Oa)(function() {
                    this.Rf("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                P9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            O9(this, c)
        } else N9(this, g.Pa(this.setVolume, a, b))
    };
    g.k.iQ = function(a, b) {
        if (M9(this)) {
            var c = L9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Gh(b.style), g.Zc(a, c.trackData));
            P9(this, "setSubtitlesTrack", a);
            O9(this, c)
        } else N9(this, g.Pa(this.iQ, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        M9(this) ? (b = b.getLanguageInfo().getId(), P9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = L9(this), a.audioTrackId = b, O9(this, a)) : N9(this, g.Pa(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = L9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        I9(l, a, c || 0);
        void 0 !== b && (G9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Gh(h));
        P9(this, "setPlaylist", m);
        d || O9(this, l)
    };
    g.k.JG = function(a, b) {
        if (M9(this)) {
            if (a && b) {
                var c = L9(this);
                I9(c, a, b);
                O9(this, c)
            }
            P9(this, "previous")
        } else N9(this, g.Pa(this.JG, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (M9(this)) {
            if (a && b) {
                var c = L9(this);
                I9(c, a, b);
                O9(this, c)
            }
            P9(this, "next")
        } else N9(this, g.Pa(this.nextVideo, a, b))
    };
    g.k.xx = function() {
        if (M9(this)) {
            P9(this, "clearPlaylist");
            var a = L9(this);
            a.reset();
            O9(this, a);
            this.ea("remotePlayerChange")
        } else N9(this, this.xx)
    };
    g.k.kS = function() {
        M9(this) ? P9(this, "dismissAutoplay") : N9(this, this.kS)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.ea("proxyStateChange", a, this.B)
        }
        g.RB.prototype.dispose.call(this)
    };
    g.k.ra = function() {
        Sob(this);
        this.C = null;
        this.D.clear();
        J9(this, null);
        g.RB.prototype.ra.call(this)
    };
    g.k.eO = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.ea("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.Af();) b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.y5 = function(a, b) {
        this.ea(a, b)
    };
    g.k.r4 = function(a) {
        if (!a) this.rC(null), J9(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = L9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) b9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, O9(this, b)
        }
    };
    g.k.rC = function(a) {
        b9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.T);
        if (this.j = a) this.j.addUpdateListener(this.T), Uob(this), this.ea("remotePlayerChange")
    };
    g.k.q4 = function(a) {
        a ? (Uob(this), this.ea("remotePlayerChange")) : this.rC(null)
    };
    g.k.FO = function() {
        P9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.t4 = function() {
        var a = Mob();
        a && J9(this, a)
    };
    g.k.Rf = function(a) {
        a9("CP", a)
    };
    g.v(T9, g.RB);
    g.k = T9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            G9(this.j,
                n);
            this.D = "UNSUPPORTED";
            c = this.Ka ? "setInitialState" : "setPlaylist";
            R9("Connecting with " + c + " and params: " + g.Gh(m));
            this.u.connect({
                method: c,
                params: g.Gh(m)
            }, a, mlb())
        } else R9("Connecting without params"), this.u.connect({}, a, mlb());
        Yob(this)
    };
    g.k.Lq = function(a) {
        this.u.Lq(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Fa("yt.mdx.remote.remoteClient_", null), this.ea("beforeDispose"), S9(this, 3));
        g.RB.prototype.dispose.call(this)
    };
    g.k.ra = function() {
        Zob(this);
        apb(this);
        $ob(this);
        g.vw(this.T);
        this.T = NaN;
        g.vw(this.Y);
        this.Y = NaN;
        this.C = null;
        g.zz(this.ma);
        this.ma.length = 0;
        this.u.dispose();
        g.RB.prototype.ra.call(this);
        this.D = this.J = this.B = this.j = this.u = null
    };
    g.k.OT = function(a) {
        if (!this.B || 0 === this.B.length) return !1;
        for (var b = g.t(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.S1 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.uB()) ? this.u.py() && isNaN(this.I) && (a = 1) : a = 2);
        return a
    };
    g.k.Lx = function(a) {
        R9("Disconnecting with " + a);
        g.Fa("yt.mdx.remote.remoteClient_", null);
        Zob(this);
        this.ea("beforeDisconnect", a);
        1 == a && j8();
        this.u.disconnect(a);
        this.dispose()
    };
    g.k.Q1 = function() {
        var a = this.j;
        this.C && (a = this.j.clone(), I9(a, this.C, a.index));
        return Qob(a)
    };
    g.k.x7 = function(a) {
        var b = this,
            c = new E9(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.vw(this.T), this.T = g.tw(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && U9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && H9(this.j) == H9(c) && g.Gh(this.j.trackData) == g.Gh(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.Gb(d, function(e) {
            this.ea(e)
        }, this)
    };
    g.k.VS = function() {
        var a = this.u.Rr(),
            b = g.ib(this.B, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.uB = function() {
        return this.u.hs()
    };
    g.k.L1 = function() {
        return this.D || "UNSUPPORTED"
    };
    g.k.M1 = function() {
        return this.J || ""
    };
    g.k.tZ = function() {
        !isNaN(this.uB()) && this.u.Mv()
    };
    g.k.u7 = function(a, b) {
        U9(this, a, b);
        cpb(this)
    };
    g.k.jQ = function() {
        var a = g.Jw("SID", "") || "",
            b = g.Jw("SAPISID", "") || "",
            c = g.Jw("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.xf(g.wf(a), 2);
        b = g.xf(g.wf(b), 2);
        c = g.xf(g.wf(c), 2);
        return g.xf(g.wf(a + "," + b + "," + c), 2)
    };
    T9.prototype.subscribe = T9.prototype.subscribe;
    T9.prototype.unsubscribeByKey = T9.prototype.Jh;
    T9.prototype.getProxyState = T9.prototype.S1;
    T9.prototype.disconnect = T9.prototype.Lx;
    T9.prototype.getPlayerContextData = T9.prototype.Q1;
    T9.prototype.setPlayerContextData = T9.prototype.x7;
    T9.prototype.getOtherConnectedRemoteId = T9.prototype.VS;
    T9.prototype.getReconnectTimeout = T9.prototype.uB;
    T9.prototype.getAutoplayMode = T9.prototype.L1;
    T9.prototype.getAutoplayVideoId = T9.prototype.M1;
    T9.prototype.reconnect = T9.prototype.tZ;
    T9.prototype.sendMessage = T9.prototype.u7;
    T9.prototype.getXsrfToken = T9.prototype.jQ;
    T9.prototype.isCapabilitySupportedOnConnectedDevices = T9.prototype.OT;
    g.v(opb, f9);
    g.k = opb.prototype;
    g.k.vk = function(a) {
        return this.Qg.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Qg.$_c(a)
    };
    g.k.get = function(a) {
        return this.Qg.$_g(a)
    };
    g.k.start = function() {
        this.Qg.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Qg.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Qg.$_r(a, b, c)
    };
    g.k.EH = function(a, b, c, d) {
        this.Qg.$_un(a, b, c, d)
    };
    g.k.ra = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.Qg.$_ubk(this.j[a]);
        this.j.length = 0;
        this.Qg = null;
        f9.prototype.ra.call(this)
    };
    g.k.uZ = function() {
        this.ea("screenChange")
    };
    g.k.g5 = function() {
        this.ea("onlineScreenChange")
    };
    k9.prototype.$_st = k9.prototype.start;
    k9.prototype.$_gspc = k9.prototype.oZ;
    k9.prototype.$_gsppc = k9.prototype.fQ;
    k9.prototype.$_c = k9.prototype.contains;
    k9.prototype.$_g = k9.prototype.get;
    k9.prototype.$_a = k9.prototype.add;
    k9.prototype.$_un = k9.prototype.EH;
    k9.prototype.$_r = k9.prototype.remove;
    k9.prototype.$_gs = k9.prototype.vk;
    k9.prototype.$_gos = k9.prototype.eQ;
    k9.prototype.$_s = k9.prototype.subscribe;
    k9.prototype.$_ubk = k9.prototype.Jh;
    var e$ = null,
        h$ = !1,
        V9 = null,
        W9 = null,
        zpb = null,
        $9 = [];
    g.v(Epb, g.D);
    g.k = Epb.prototype;
    g.k.ra = function() {
        g.D.prototype.ra.call(this);
        this.j.stop();
        this.u.stop();
        this.J.stop();
        var a = this.wc;
        a.unsubscribe("proxyStateChange", this.rV, this);
        a.unsubscribe("remotePlayerChange", this.vC, this);
        a.unsubscribe("remoteQueueChange", this.sG, this);
        a.unsubscribe("previousNextChange", this.oV, this);
        a.unsubscribe("nowAutoplaying", this.iV, this);
        a.unsubscribe("autoplayDismissed", this.LU, this);
        this.wc = this.module = null
    };
    g.k.xk = function(a) {
        var b = g.xa.apply(1, arguments);
        if (2 != this.wc.B)
            if (i$(this)) {
                if (1081 != L9(this.wc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        L9(this.wc).Zc() ? this.wc.pause() : this.wc.play();
                        break;
                    case "control_play":
                        this.wc.play();
                        break;
                    case "control_pause":
                        this.wc.pause();
                        break;
                    case "control_seek":
                        this.I.oI(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        Gpb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.F.getCurrentTime();
                    j$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    j$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    Gpb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.o4 = function(a) {
        this.J.TY(a)
    };
    g.k.n8 = function(a) {
        this.xk("control_subtitles_set_track", g.Tc(a) ? null : a)
    };
    g.k.UW = function() {
        var a = this.F.getOption("captions", "track");
        g.Tc(a) || Gpb(this, a)
    };
    g.k.qc = function(a) {
        this.module.qc(a, this.F.getVideoData().lengthSeconds)
    };
    g.k.R4 = function() {
        g.Tc(this.B) || Hpb(this, this.B);
        this.C = !1
    };
    g.k.rV = function(a, b) {
        this.u.stop();
        2 === b && this.LW()
    };
    g.k.vC = function() {
        if (i$(this)) {
            this.j.stop();
            var a = L9(this.wc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Bh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Bh = 0;
                    break;
                default:
                    this.module.Bh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.kc(new g.hM(8));
                    this.KW();
                    break;
                case 1085:
                case 3:
                    this.kc(new g.hM(9));
                    break;
                case 1083:
                case 0:
                    this.kc(new g.hM(2));
                    this.I.stop();
                    this.qc(this.F.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.kc(new g.hM(4));
                    break;
                case 2:
                    this.kc(new g.hM(4));
                    this.qc(H9(a));
                    break;
                case -1:
                    this.kc(new g.hM(64));
                    break;
                case -1E3:
                    this.kc(new g.hM(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        QE: 2
                    }))
            }
            a = L9(this.wc).trackData;
            var b = this.B;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a, Hpb(this, a));
            a = L9(this.wc); - 1 === a.volume || Math.round(this.F.getVolume()) === a.volume && this.F.isMuted() === a.muted || this.T.isActive() || this.zX()
        } else Fpb(this)
    };
    g.k.oV = function() {
        this.F.ea("mdxpreviousnextchange")
    };
    g.k.sG = function() {
        i$(this) || Fpb(this)
    };
    g.k.iV = function(a) {
        isNaN(a) || this.F.ea("mdxnowautoplaying", a)
    };
    g.k.LU = function() {
        this.F.ea("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        i$(this) && this.wc.setAudioTrack(this.F.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === L9(this.wc).playerState ? j$(this, a) : b && this.wc.seekTo(a)
    };
    g.k.zX = function() {
        var a = this;
        if (i$(this)) {
            var b = L9(this.wc);
            this.events.Ec(this.Y);
            b.muted ? this.F.mute() : this.F.unMute();
            this.F.setVolume(b.volume);
            this.Y = this.events.S(this.F, "onVolumeChange", function(c) {
                Cpb(a, c)
            })
        }
    };
    g.k.KW = function() {
        this.j.stop();
        if (!this.wc.isDisposed()) {
            var a = L9(this.wc);
            a.Zc() && this.kc(new g.hM(8));
            this.qc(H9(a));
            this.j.start()
        }
    };
    g.k.LW = function() {
        this.u.stop();
        this.j.stop();
        var a = this.wc.hs();
        2 == this.wc.B && !isNaN(a) && this.u.start()
    };
    g.k.kc = function(a) {
        this.u.stop();
        var b = this.D;
        if (!g.mM(b, a)) {
            var c = g.T(a, 2);
            c !== g.T(this.D, 2) && this.F.pz(c);
            this.D = a;
            Jpb(this.module, b, a)
        }
    };
    g.v(k$, g.U);
    k$.prototype.Qc = function() {
        this.j.show()
    };
    k$.prototype.zb = function() {
        this.j.hide()
    };
    k$.prototype.u = function() {
        b8("mdx-privacy-popup-cancel");
        this.zb()
    };
    k$.prototype.B = function() {
        b8("mdx-privacy-popup-confirm");
        this.zb()
    };
    g.v(l$, g.U);
    l$.prototype.onStateChange = function(a) {
        this.Cc(a.state)
    };
    l$.prototype.Cc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.T(a, 128) ? g.QL("Error on $RECEIVER_NAME", b) : a.Zc() || g.nM(a) ? g.QL("Playing on $RECEIVER_NAME", b) : g.QL("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.v(m$, g.JU);
    m$.prototype.C = function() {
        var a = this.F.getOption("remote", "receivers");
        a && 1 < a.length && !this.F.getOption("remote", "quickCast") ? (this.gt = g.Jb(a, this.j, this), g.KU(this, g.Eg(a, this.j)), a = this.F.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.wj(a), this.enable(!0)) : this.enable(!1)
    };
    m$.prototype.j = function(a) {
        return a.key
    };
    m$.prototype.rl = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.gt[a].name
    };
    m$.prototype.Yg = function(a) {
        g.JU.prototype.Yg.call(this, a);
        this.F.setOption("remote", "currentReceiver", this.gt[a]);
        this.qb.zb()
    };
    g.v(Ipb, g.rR);
    g.k = Ipb.prototype;
    g.k.create = function() {
        var a = this.player.V(),
            b = g.SH(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        tpb(b, a);
        this.subscriptions.push(g.Sz("yt-remote-before-disconnect", this.m4, this));
        this.subscriptions.push(g.Sz("yt-remote-connection-change", this.E5, this));
        this.subscriptions.push(g.Sz("yt-remote-receiver-availability-change", this.qV,
            this));
        this.subscriptions.push(g.Sz("yt-remote-auto-connect", this.C5, this));
        this.subscriptions.push(g.Sz("yt-remote-receiver-resumed", this.B5, this));
        this.subscriptions.push(g.Sz("mdx-privacy-popup-confirm", this.V6, this));
        this.subscriptions.push(g.Sz("mdx-privacy-popup-cancel", this.U6, this));
        this.qV()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.rR.prototype.load.call(this);
        this.ul = new Epb(this, this.player, this.wc);
        var a = (a = Bpb()) ? a.currentTime : 0;
        var b = ypb() ? new K9(d$(), void 0) : null;
        0 == a && b && (a = H9(L9(b)));
        0 !== a && this.qc(a);
        Jpb(this, this.Ud, this.Ud);
        this.player.gp(6)
    };
    g.k.unload = function() {
        this.player.ea("mdxautoplaycanceled");
        this.Fr = this.Vo;
        g.ab(this.ul, this.wc);
        this.wc = this.ul = null;
        g.rR.prototype.unload.call(this);
        this.player.gp(5);
        n$(this)
    };
    g.k.ra = function() {
        g.Tz(this.subscriptions);
        g.rR.prototype.ra.call(this)
    };
    g.k.Xo = function(a) {
        var b = g.xa.apply(1, arguments);
        this.loaded && this.ul.xk.apply(this.ul, [a].concat(g.u(b)))
    };
    g.k.getAdState = function() {
        return this.Bh
    };
    g.k.Mo = function() {
        return this.wc ? L9(this.wc).Mo : !1
    };
    g.k.zk = function() {
        return this.wc ? L9(this.wc).zk : !1
    };
    g.k.qc = function(a, b) {
        this.cU = a || 0;
        this.player.ea("progresssync", a, b);
        this.player.Oa("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.cU
    };
    g.k.getProgressState = function() {
        var a = L9(this.wc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Ah(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + F9(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + F9(a) : a.j) - this.getCurrentTime(),
            loaded: a.T,
            seekableEnd: a.u ? a.j + F9(a) : a.j,
            seekableStart: 0 < a.C ? a.C + F9(a) : a.C,
            offset: 0
        }
    };
    g.k.nextVideo = function() {
        this.wc && this.wc.nextVideo()
    };
    g.k.JG = function() {
        this.wc && this.wc.JG()
    };
    g.k.m4 = function(a) {
        1 === a && (this.qN = this.wc ? L9(this.wc) : null)
    };
    g.k.E5 = function() {
        var a = ypb() ? new K9(d$(), void 0) : null;
        if (a) {
            var b = this.Fr;
            this.loaded && this.unload();
            this.wc = a;
            this.qN = null;
            b.key !== this.Vo.key && (this.Fr = b, this.load())
        } else g.$a(this.wc), this.wc = null, this.loaded && (this.unload(), (a = this.qN) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, H9(a)));
        this.player.ea("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.qV = function() {
        var a = [this.Vo],
            b = a.concat,
            c = upb();
        B9() && g.QA("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.gt = b.call(a, c);
        a = wpb() || this.Vo;
        o$(this, a);
        this.player.Oa("onMdxReceiversChange")
    };
    g.k.C5 = function() {
        var a = wpb();
        o$(this, a)
    };
    g.k.B5 = function() {
        this.Fr = wpb()
    };
    g.k.V6 = function() {
        this.HC = !0;
        n$(this);
        h$ = !1;
        e$ && g$(e$, 1);
        e$ = null
    };
    g.k.U6 = function() {
        this.HC = !1;
        n$(this);
        o$(this, this.Vo);
        this.Fr = this.Vo;
        h$ = !1;
        e$ = null;
        this.player.playVideo()
    };
    g.k.rh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.gt;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? Nob() : o$(this, b)), this.loaded ? this.Fr : this.Vo;
            case "quickCast":
                return 2 === this.gt.length && "cast-selector-receiver" === this.gt[1].key ? (b && Nob(), !0) : !1
        }
    };
    g.k.FO = function() {
        this.wc.FO()
    };
    g.k.Pk = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.qR("remote", Ipb);
})(_yt_player);