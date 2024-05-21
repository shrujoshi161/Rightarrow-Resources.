import contact from 


function App(){

const SendEmail =(e) =>{
    e.preventDefault();
   SendEmail.jssendform('service_gua7a42', 'template_q91aklr',e.target,'XOCe6IaXtKh8wgf-0')

}

    return (   
    
    <div class="App">
                     
                                                           <div class="trx_addons_column-1_3">
                                                                    <div class="sc_form_info_item sc_form_info_item_email">
                                                                        <span class="sc_form_info_icon"></span>
                                                                        <span class="sc_form_info_data">
                                                                            <a href="mailto:info@rasources.com">info@rasources.com</a>
                                                                        </span>
                                                                    </div>
                                                        </div>        
                                                                <div class="trx_addons_column-1_3">
                                                                    <div class="sc_form_info_item sc_form_info_item_phone">
                                                                        <span class="sc_form_info_icon"></span>
                                                                        <span class="sc_form_info_data">
                                                                            <span><a href="tel:+91 91308 700 95">+91 91308 700 95</a>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                         
                                                        <div class="sc_form_fields">
                                                            <div class="trx_addons_columns_wrap">

                                                                <div class="sc_form_details trx_addons_column-1_2">
                                                                    <form class="contact_form" onsubmit={SendEmail}></form>
                                                                    <label class="sc_form_field sc_form_field_name required">
                                                                        <span class="sc_form_field_wrap">
                                                                            <input type="text" name="name" aria-required="true"	placeholder="Your name"></input>
                                                                        </span>
                                                                    </label>
                                                                    <label class="sc_form_field sc_form_field_email required">
                                                                        <span class="sc_form_field_wrap">
                                                                            <input type="text" name="email" aria-required="true" placeholder="Your e-mail"></input>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div class="sc_form_message trx_addons_column-1_2">
                                                                    <label class="sc_form_field sc_form_field_message required">
                                                                        <span class="sc_form_field_wrap">
                                                                            <textarea name="message" aria-required="true" placeholder="Your message"></textarea>
                                                                        </span>
                                                                    </label>
                                                                </div>

                                                                <div class="sc_form_field sc_form_field_button" onclick="sendmail()">
                                                                <button>Send Message</button>
                                                            </div>
                                                            <div class="trx_addons_message_box sc_form_result" onclick="sendmail()"></div>
                                                        </div>
                                                            </div>                                   
    </div>

    );
}
