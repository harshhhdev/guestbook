--
-- PostgreSQL database dump
--

-- Dumped from database version 13.6 (Ubuntu 13.6-1.pgdg20.04+1)
-- Dumped by pg_dump version 13.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Account; Type: TABLE; Schema: public; Owner: vdjoulmayjkpel
--

CREATE TABLE public."Account" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    refresh_token_expires_in integer,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    oauth_token_secret text,
    oauth_token text
);


ALTER TABLE public."Account" OWNER TO vdjoulmayjkpel;

--
-- Name: Post; Type: TABLE; Schema: public; Owner: vdjoulmayjkpel
--

CREATE TABLE public."Post" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    content character varying(100) NOT NULL,
    "userId" text NOT NULL
);


ALTER TABLE public."Post" OWNER TO vdjoulmayjkpel;

--
-- Name: Session; Type: TABLE; Schema: public; Owner: vdjoulmayjkpel
--

CREATE TABLE public."Session" (
    id text NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Session" OWNER TO vdjoulmayjkpel;

--
-- Name: User; Type: TABLE; Schema: public; Owner: vdjoulmayjkpel
--

CREATE TABLE public."User" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "isAdmin" boolean DEFAULT false NOT NULL,
    name text,
    email text,
    "emailVerified" timestamp(3) without time zone,
    image text
);


ALTER TABLE public."User" OWNER TO vdjoulmayjkpel;

--
-- Name: VerificationToken; Type: TABLE; Schema: public; Owner: vdjoulmayjkpel
--

CREATE TABLE public."VerificationToken" (
    identifier text NOT NULL,
    token text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."VerificationToken" OWNER TO vdjoulmayjkpel;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: vdjoulmayjkpel
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO vdjoulmayjkpel;

--
-- Data for Name: Account; Type: TABLE DATA; Schema: public; Owner: vdjoulmayjkpel
--

COPY public."Account" (id, "createdAt", "updatedAt", "userId", type, provider, "providerAccountId", refresh_token, refresh_token_expires_in, access_token, expires_at, token_type, scope, id_token, session_state, oauth_token_secret, oauth_token) FROM stdin;
cl0y8e94g0018infz6fnu4yz5	2022-03-19 19:16:37.936	2022-03-19 19:16:37.936	cl0y8e9080010infzowwtttjf	oauth	github	69592270	\N	\N	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	\N	bearer	read:user,user:email	\N	\N	\N	\N
\.


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: vdjoulmayjkpel
--

COPY public."Post" (id, "createdAt", content, "userId") FROM stdin;
cl0y8f1hw0002nmfzc6u7alus	2022-03-19 19:17:14.708	I cannot imagine life without Vercel sometimes	cl0y8e9080010infzowwtttjf
cl0y8f1hw0000nmfz9n85c3h8	2022-03-19 19:17:14.708	I am such a dark mode addict	cl0y8e9080010infzowwtttjf
cl0y8f1hw0004nmfzzt9nqdbq	2022-03-19 19:17:14.708	Once I started using TypeScript, JavaScript just feels weird	cl0y8e9080010infzowwtttjf
cl0y8f1hw0001nmfzwaujvsbr	2022-03-19 19:17:14.708	I should really try out Remix sometime soon	cl0y8e9080010infzowwtttjf
cl0y8f1hw0005nmfz8nfdc0x6	2022-03-19 19:17:14.708	Prisma is love, Prisma is life	cl0y8e9080010infzowwtttjf
cl0ydcnem0130llfz6kw38zpe	2022-03-19 21:35:21.214	I love CockroachDB serverless :v	cl0y8e9080010infzowwtttjf
cl0ye5ynk0340llfzi7o5gmiy	2022-03-19 21:58:08.816	Headless > Chakra change my mind	cl0y8e9080010infzowwtttjf
cl0yegfab0415llfztrw86mu3	2022-03-19 22:06:16.931	My favourite font has to be Lexend	cl0y8e9080010infzowwtttjf
cl0yekvql000009jsjpn9rzzo	2022-03-19 22:09:44.878	Red switches are amazing	cl0y8e9080010infzowwtttjf
cl0yesmy2001009me7sfyzpzu	2022-03-19 22:15:46.73	Logitech webcams are so overpriced	cl0y8e9080010infzowwtttjf
cl0zgh3ns000509jr2r5myup9	2022-03-20 15:50:33.928	Yellow is such an ugly colour	cl0y8e9080010infzowwtttjf
cl18arge9000009mglxuyoiky	2022-03-26 20:20:34.883	iPhones get too much hate	cl0y8e9080010infzowwtttjf
cl1bkx80l001009ldyk9h2859	2022-03-29 03:28:18.645	Arch is the best Linux distribution 	cl0y8e9080010infzowwtttjf
cl1bldscc000509l8gw3pkxh0	2022-03-29 03:41:11.484	I love GitHub's command palette	cl0y8e9080010infzowwtttjf
cl1blvdkw000509m66dvdceuu	2022-03-29 03:54:52.16	We should use British spellings in programming	cl0y8e9080010infzowwtttjf
\.


--
-- Data for Name: Session; Type: TABLE DATA; Schema: public; Owner: vdjoulmayjkpel
--

COPY public."Session" (id, "sessionToken", "userId", expires) FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: vdjoulmayjkpel
--

COPY public."User" (id, "createdAt", "updatedAt", "isAdmin", name, email, "emailVerified", image) FROM stdin;
cl0y8e9080010infzowwtttjf	2022-03-19 19:16:37.784	2022-03-29 17:07:48.221	t	Harsh Singh	hi.harsh@protonmail.ch	\N	https://avatars.githubusercontent.com/u/69592270?v=4
\.


--
-- Data for Name: VerificationToken; Type: TABLE DATA; Schema: public; Owner: vdjoulmayjkpel
--

COPY public."VerificationToken" (identifier, token, expires) FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: vdjoulmayjkpel
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
0c133b12-2bfb-4281-997e-3a349d9e36d7	ac023545e9a7a4c01bfb27a464334349fd04765900bfb596cc774924f5cd7622	2022-03-19 19:15:41.241958+00	20220319051603_init_db	\N	\N	2022-03-19 19:15:40.820301+00	1
\.


--
-- Name: Account Account_pkey; Type: CONSTRAINT; Schema: public; Owner: vdjoulmayjkpel
--

ALTER TABLE ONLY public."Account"
    ADD CONSTRAINT "Account_pkey" PRIMARY KEY (id);


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: vdjoulmayjkpel
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: Session Session_pkey; Type: CONSTRAINT; Schema: public; Owner: vdjoulmayjkpel
--

ALTER TABLE ONLY public."Session"
    ADD CONSTRAINT "Session_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: vdjoulmayjkpel
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: vdjoulmayjkpel
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Account_provider_providerAccountId_key; Type: INDEX; Schema: public; Owner: vdjoulmayjkpel
--

CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON public."Account" USING btree (provider, "providerAccountId");


--
-- Name: Session_sessionToken_key; Type: INDEX; Schema: public; Owner: vdjoulmayjkpel
--

CREATE UNIQUE INDEX "Session_sessionToken_key" ON public."Session" USING btree ("sessionToken");


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: vdjoulmayjkpel
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: VerificationToken_identifier_token_key; Type: INDEX; Schema: public; Owner: vdjoulmayjkpel
--

CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON public."VerificationToken" USING btree (identifier, token);


--
-- Name: VerificationToken_token_key; Type: INDEX; Schema: public; Owner: vdjoulmayjkpel
--

CREATE UNIQUE INDEX "VerificationToken_token_key" ON public."VerificationToken" USING btree (token);


--
-- Name: Account Account_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vdjoulmayjkpel
--

ALTER TABLE ONLY public."Account"
    ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Post Post_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vdjoulmayjkpel
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Session Session_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vdjoulmayjkpel
--

ALTER TABLE ONLY public."Session"
    ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: vdjoulmayjkpel
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO vdjoulmayjkpel;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--


--
-- PostgreSQL database dump complete
--

