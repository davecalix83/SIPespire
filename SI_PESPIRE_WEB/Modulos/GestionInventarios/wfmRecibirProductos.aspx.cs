﻿using System;
using System.Web.UI;

namespace SI_PESPIRE_WEB.Modulos.GestionInventarios
{
    public partial class wfmRecibirProductos : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack) SiteMaster.SetTituloPagina("Recepción de productos");
        }
    }
}