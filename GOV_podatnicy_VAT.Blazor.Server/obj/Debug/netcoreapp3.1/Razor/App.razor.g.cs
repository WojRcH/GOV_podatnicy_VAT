#pragma checksum "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\App.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "47373cc5e13936bd64f11ab09626c3db2e75de0b"
// <auto-generated/>
#pragma warning disable 1591
namespace GOV_podatnicy_VAT.Blazor.Server
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\_Imports.razor"
using DevExpress.Blazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\_Imports.razor"
using DevExpress.ExpressApp.Blazor.Components;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\_Imports.razor"
using GOV_podatnicy_VAT.Blazor.Server;

#line default
#line hidden
#nullable disable
    public partial class App : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenComponent<Microsoft.AspNetCore.Components.Routing.Router>(0);
            __builder.AddAttribute(1, "AppAssembly", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Reflection.Assembly>(
#nullable restore
#line 2 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\App.razor"
                      typeof(Program).Assembly

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(2, "AdditionalAssemblies", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Collections.Generic.IEnumerable<System.Reflection.Assembly>>(
#nullable restore
#line 2 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\App.razor"
                                                                      new[] { typeof(DevExpress.ExpressApp.Blazor.BlazorApplication).Assembly }

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(3, "Found", (Microsoft.AspNetCore.Components.RenderFragment<Microsoft.AspNetCore.Components.RouteData>)((routeData) => (__builder2) => {
                __builder2.AddMarkupContent(4, "\r\n        ");
                __builder2.OpenComponent<Microsoft.AspNetCore.Components.RouteView>(5);
                __builder2.AddAttribute(6, "RouteData", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Microsoft.AspNetCore.Components.RouteData>(
#nullable restore
#line 4 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\App.razor"
                               routeData

#line default
#line hidden
#nullable disable
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(7, "\r\n\r\n    ");
            }
            ));
            __builder.AddAttribute(8, "NotFound", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(9, "\r\n        ");
                __builder2.OpenComponent<Microsoft.AspNetCore.Components.LayoutView>(10);
                __builder2.AddAttribute(11, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(12, "\r\n            ");
                    __builder3.AddMarkupContent(13, "<p>Sorry, there\'s nothing at this address.</p>\r\n        ");
                }
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(14, "\r\n    ");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(15, "\r\n");
            __builder.OpenComponent<DevExpress.Blazor.DxTextBox>(16);
            __builder.AddAttribute(17, "NullText", "Wpisz NIP do wyszukania podatnika");
            __builder.AddAttribute(18, "ClearButtonDisplayMode", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<DevExpress.Blazor.DataEditorClearButtonDisplayMode>(
#nullable restore
#line 15 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\App.razor"
                                   DataEditorClearButtonDisplayMode.Auto

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(19, "Text", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.String>(
#nullable restore
#line 13 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\App.razor"
                        TextBoxValue

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(20, "TextChanged", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Microsoft.AspNetCore.Components.EventCallback<System.String>>(Microsoft.AspNetCore.Components.EventCallback.Factory.Create<System.String>(this, Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.CreateInferredEventCallback(this, __value => TextBoxValue = __value, TextBoxValue))));
            __builder.AddAttribute(21, "TextExpression", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Linq.Expressions.Expression<System.Func<System.String>>>(() => TextBoxValue));
            __builder.CloseComponent();
        }
        #pragma warning restore 1998
#nullable restore
#line 17 "C:\Users\WojRcH\source\repos\GOV_podatnicy_VAT\GOV_podatnicy_VAT.Blazor.Server\App.razor"
       
    [Parameter]
    public string TextBoxValue { get; set; }

#line default
#line hidden
#nullable disable
    }
}
#pragma warning restore 1591
