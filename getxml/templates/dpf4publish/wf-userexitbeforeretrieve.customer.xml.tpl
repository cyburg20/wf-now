<?xml version="1.0" encoding="ISO-8859-1"?>
<DPF>
  <config>
    <workflows>
      <DPF4Publish.UserExitBeforeRetrieve
        COMMENT="DON&apos;T EDIT THIS PROCESS.

Customize the process name called instead
in server/dpf/conf/dpf4publish/publish.customer.ini
with keyword DPF4Publish.UserExitBeforeRetrieve.

Use internal process names."
        DPFINT-Customer="1"
        DPFINT-Interactive="0"
        DPFINT-Type="WorkflowDescription"
        NAME="User Exit Before Retrieve"
        PROJECT="DPF4Publish"
        VERSION="$Id: wf-userexitbeforeretrieve.customer.xml,v 1.1 2010/10/21 13:58:20 stefan Exp $"
        >
        <DEFAULTS/>
        <END
          COMMENT=""
          NAME="END"
          POSX="200"
          POSY="100"
          TYPE="STOP"
          />
        <MAIN
          BEGIN="END"
          NAME=""
          />
        <MAPPING/>
      </DPF4Publish.UserExitBeforeRetrieve>
    </workflows>
  </config>
</DPF>
