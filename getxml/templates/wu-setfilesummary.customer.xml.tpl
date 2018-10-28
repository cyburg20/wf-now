<?xml version="1.0" encoding="ISO-8859-1"?>
<DPF>
  <config>
    <workingunits>
      <setfilesummary
        VERSION="$Id: wu-setfilesummary.customer.xml,v 1.2 2003/04/08 07:07:39 stefan Exp $"
        >
        <!-- configure your file summary options here -->
	<DEFAULTS
         SUMMARY_OPTIONS="%SENDERCOMMENT% %RECEIVERCOMMENT% %DATECOMMENT%"
         SENDERCOMMENT="-Comments &quot;Anforderer=%EXUSR%&quot;"
         RECEIVERCOMMENT="-Comments &quot;Empfänger=%ENAM%, %EORT%, %ETEL%&quot;"
         DATECOMMENT="-Comments &quot;Datum=%EXDAT%T%EXTIME%&quot;"
        />
      </setfilesummary>
    </workingunits>
  </config>
</DPF>
