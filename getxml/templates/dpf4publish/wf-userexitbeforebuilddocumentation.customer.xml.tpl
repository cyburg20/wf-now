<?xml version="1.0" encoding="ISO-8859-1"?>
<DPF>
  <config>
    <workflows>
      <DPF4Publish.UserExitBeforeBuildDocumentation
        COMMENT="DON&apos;T EDIT THIS PROCESS.

Customize the process name called instead
in server/dpf/conf/dpf4publish/publish.customer.ini
with keyword DPF4Publish.UserExitBeforeBuildDocumentation.

Use internal process names."
        DPFINT-Customer="1"
        DPFINT-Interactive="0"
        DPFINT-Type="WorkflowDescription"
        NAME="User Exit Before Build Documentation"
        PROJECT="DPF4Publish"
        VERSION="$Id: wf-userexitbeforebuilddocumentation.customer.xml,v 1.2 2011/06/07 14:09:59 sek Exp $"
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
      </DPF4Publish.UserExitBeforeBuildDocumentation>
    </workflows>
  </config>
</DPF>
