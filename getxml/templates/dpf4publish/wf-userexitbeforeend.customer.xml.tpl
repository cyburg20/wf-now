<?xml version="1.0" encoding="ISO-8859-1"?>
<DPF>
  <config>
    <workflows>
      <DPF4Publish.UserExitBeforeEnd
        COMMENT="DON&apos;T EDIT THIS PROCESS.

Customize the process name called instead
in server/dpf/conf/dpf4publish/publish.customer.ini
with keyword DPF4Publish.UserExitBeforeEnd.

Use internal process names."
        DPFINT-Customer="1"
        DPFINT-Interactive="0"
        DPFINT-Type="WorkflowDescription"
        NAME="User Exit Before End"
        PROJECT="DPF4Publish"
        VERSION="$Id: wf-userexitbeforeend.customer.xml,v 1.1 2010/10/21 14:54:40 stefan Exp $"
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
      </DPF4Publish.UserExitBeforeEnd>
    </workflows>
  </config>
</DPF>
