<?xml version="1.0" encoding="ISO-8859-1"?>
<DPF>
  <config>
    <workflows>
      <DPF4Publish.UserExitBeforeAppendCoverRliLine
        COMMENT="DON&apos;T EDIT THIS PROCESS.

Customize the process name called instead
in server/dpf/conf/dpf4publish/publish.customer.ini
with keyword DPF4Publish.UserExitBeforeAppendCoverRliLine.

Use internal process names."
        DPFINT-Customer="1"
        DPFINT-Interactive="0"
        DPFINT-Type="WorkflowDescription"
        NAME="User Exit Before Append Cover Rli Line"
        PROJECT="DPF4Publish"
        VERSION="$Id: wf-userexitbeforeappendcoverrliline.customer.xml,v 1.1 2012/11/22 11:52:06 sek Exp $"
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
      </DPF4Publish.UserExitBeforeAppendCoverRliLine>
    </workflows>
  </config>
</DPF>
