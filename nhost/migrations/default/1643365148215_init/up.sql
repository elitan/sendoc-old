SET check_function_bodies = false;
CREATE TABLE public.doc_links (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    doc_id uuid NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    require_email_to_view boolean DEFAULT false NOT NULL,
    passcode text,
    download_allowed boolean DEFAULT false NOT NULL
);
CREATE TABLE public.doc_visits (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    doc_link_id uuid NOT NULL,
    email text
);
CREATE TABLE public.docs (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    file_id uuid NOT NULL,
    user_id uuid NOT NULL
);
ALTER TABLE ONLY public.doc_links
    ADD CONSTRAINT doc_links_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.doc_visits
    ADD CONSTRAINT doc_visits_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.docs
    ADD CONSTRAINT docs_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_doc_links_updated_at BEFORE UPDATE ON public.doc_links FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_doc_links_updated_at ON public.doc_links IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_doc_visits_updated_at BEFORE UPDATE ON public.doc_visits FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_doc_visits_updated_at ON public.doc_visits IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_docs_updated_at BEFORE UPDATE ON public.docs FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_docs_updated_at ON public.docs IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.doc_links
    ADD CONSTRAINT doc_links_doc_id_fkey FOREIGN KEY (doc_id) REFERENCES public.docs(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.doc_visits
    ADD CONSTRAINT doc_visits_doc_link_id_fkey FOREIGN KEY (doc_link_id) REFERENCES public.doc_links(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.docs
    ADD CONSTRAINT docs_file_id_fkey FOREIGN KEY (file_id) REFERENCES storage.files(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.docs
    ADD CONSTRAINT docs_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
