<?xml version="1.0" encoding="ISO-8859-1"?>
<DPF>
  <config>

    <jobcleaner
      VERSION="$Id: main.customer.xml.tpl,v 1.10 2017/03/14 14:35:53 rg Exp $"
      DELETEJOB="3h"
      FORGETJOB="2d"
      ERR_DELETEJOB="4d"
      RETRY_DELETEJOB="1m"
      RETRY_FORGETJOB="1m"
      />

     <!-- enable accounting 
          if semicolon is added at beginning and end of each line, the file can be imported as CSV to Excel
       -->
    <accounting
      LOGFORMAT=";%JOB_TIMESTAMP_BEGIN%;%JOB_TIMESTAMP_END%;%JOBID%;%WFNAME%;%ORIGUSERNAME%;%ORIGHOSTNAME%;%JOBSTATUS%;"
     />

     <!-- kNet port for Remote WU configuration. All remote WU nodes
          should have a running knets.exe with that port running.
          Add a boot command into SEAL Service to start the knets -->
     <knets
         port="4165"
      />

    <workingunit
      THREADS="10"
      />

    <nodenames> <!-- node configuration for remote WUs you can add as many node tags as you like-->
        <node> <!-- this will be taken if no matching node found -->
          <ACADNODES>
            %DB_HOST%
          </ACADNODES>
          <ELCADNODES>
            %DB_HOST%
          </ELCADNODES>
          <INVENTORNODES>
            %DB_HOST%
          </INVENTORNODES>
          <ME10NODES>
            %DB_HOST%
          </ME10NODES>
          <MICROSTATIONNODES>
            %DB_HOST%
          </MICROSTATIONNODES>
          <PROENODES>
            %DB_HOST%
          </PROENODES>
          <SOLIDDESIGNERNODES>
            %DB_HOST%
          </SOLIDDESIGNERNODES>
          <SOLIDEDGENODES>
            %DB_HOST%
          </SOLIDEDGENODES>
          <SOLIDWORKSNODES>
            %DB_HOST%
          </SOLIDWORKSNODES>
          <OFFICENODES>
            %DB_HOST%
          </OFFICENODES>
          <OUTLOOKNODES>
            %DB_HOST%
          </OUTLOOKNODES>
          <DEFAULTNODE>
            %DB_HOST%
          </DEFAULTNODE>
        </node>

        <!-- add name attribute to define configuration for a particular node eg. test system
             NAME is caseinsensitive and must match the name of the server it belongs to-->
        <!--
        <node NAME="testsystem"> 
          <ACADNODES>
            %DB_HOST%
          </ACADNODES>
          <PROENODES>
            %DB_HOST%
          </PROENODES>
          <OFFICENODES>
            %DB_HOST%
          </OFFICENODES>
          <DEFAULTNODE>
            %DB_HOST%
          </DEFAULTNODE>
        </node>
        -->
    </nodenames>
    
    <!-- watchdog
      LOGLEVEL="LOG_INFO"
      WARN_BELOW_MEMORY="0.5"
      WARN_BELOW_DISK_SPACE="0.2"
      / -->

    <dpfgate
      LOGLEVEL="LOG_INFO"
      >
      <!--
      optional additional config for subdirectories under {SGATE};
      Not every subdir needs a config entry - only if workflow differs
      from directory name or if you want to add specific job parameters
      -->
      <!--
      <directories>
        <directory name="gif2pdf" workflow="dpf4view.prepare_single">
          <jobParameters>
            <jobParameter name="CURRFILETYPE" value="GIF" />
            <jobParameter name="JobName" value="Gate gif2pdf" />
            <jobParameter name="JobUserName" value="RG Test" />
            <jobParameter name="DPF4C_MODIFY_STAMP" value="Y" />
            <jobParameter name="DPF4C_MODIFY_STAMP_N_TEXT0" value="Stamp 0: RG stamped GIF" />
          </jobParameters>
        </directory>
      </directories>
      -->
    </dpfgate>

    <DPFMailService>

      <!--
        Here is the minimum set of configuration items where customer specific
        values are needed to supersede the basic settings given in 
        %DPFROOT%\server\dpf\templates\main.xml.
      -->
      
      <defaults>
        <settings
          fetchHost="imap.sealmailtest.org"
          />
        <!-- mailserver used for sending answer: -->
        <jobParameters
            MAIL_SMTP="smtp.sealmailtest.org"
          />
      </defaults>

      <MailAccounts>
        <MailAccount serviceName="DPF_Convert_Mail_Service">
          <settings
            fetchHost="imap.sealmailtest.org"
            serviceMailAddr="convert@sealmailtest.org"
            mailAccountUser="convert@sealmailtest.org"
            password="MTAxu/1l0ubRMD3t0C8UF4JWTQ=="
            successFolder="processed"
            errorFolder="error"
          />

          <!-- Optional: e. g. change default subject prefix from "Re: ..." -->
          <!--
          <jobParameters
            MAIL_SUBJECT="Antw: Konvertiert: %DpfMailService_MessageSubject%"
          />
          -->

        </MailAccount>

      </MailAccounts>

    </DPFMailService>


    <!-- DPF4Convert Web service convertGeneric example config -->
    <!--
    <WS4Convert.convertGeneric>
      <jobConfig name="pdfStampPdf" workflow="customerX.stamppdf">
        <jobParameters>
          <jobParameter name="DPF4C_XPOS">%X_POSITION%</jobParameter>
          <jobParameter name="DPF4C_YPOS">%Y_POSITION%</jobParameter>
          <jobParameter name="DPF4C_XOFF">%X_OFFSET%</jobParameter>
          <jobParameter name="DPF4C_YOFF">%Y_OFFSET%</jobParameter>
          <jobParameter name="SOURCE_FILE_PROPERTIES">CurrFileName</jobParameter>
          <jobParameter name="TARGETFILE">pdfStamped.pdf</jobParameter>
          <jobParameter name="AAA_Demo_Param">wsParam1: %wsParam1%</jobParameter>
        </jobParameters>
      </jobConfig>
    </WS4Convert.convertGeneric>
    -->


  </config>
</DPF>
