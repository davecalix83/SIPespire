﻿using System;
using System.Web.UI;

namespace SI_PESPIRE_WEB.Modulos.Consultas
{
    public partial class wfmConsultaDevoluciones : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack) SiteMaster.SetTituloPagina("Consulta de devoluciones de producto");
        }
    }
}