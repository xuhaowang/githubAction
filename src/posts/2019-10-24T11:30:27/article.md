=== 

标题： CommitID[9654682070a6c]2019-10-24T11:30:27
标签： network-delay

=== 


# Summary report 
| Task status | number |
| ------------ | ------------ |
|      ok |      29
|      change |      19
|      unreachable |      0
|      failed |      0
# Info report 
 ``` 
amber: load the executor...
ci-enhanced: Pulling from diamond/service-providers/ansible-runner
Digest: sha256:9b0d9b5684fd4d47abd9d45c016fd5ff835b1f810583b3e67886ca7c9bc0b877
Status: Image is up to date for registry.sensetime.com/diamond/service-providers/ansible-runner:ci-enhanced
registry.sensetime.com/diamond/service-providers/ansible-runner:ci-enhanced
amber: found the case.
amber: the executor is running...
ansible-playbook 2.7.3
  config file = None
  configured module search path = [u'/root/.ansible/plugins/modules', u'/usr/share/ansible/plugins/modules']
  ansible python module location = /usr/local/lib/python2.7/dist-packages/ansible
  executable location = /usr/local/bin/ansible-playbook
  python version = 2.7.15+ (default, Nov 27 2018, 23:36:35) [GCC 7.3.0]
No config file found; using defaults
/etc/ansible/hosts did not meet host_list requirements, check plugin documentation if this is unexpected
/etc/ansible/hosts did not meet script requirements, check plugin documentation if this is unexpected
PLAYBOOK: test.yml 
 plays in ./experiments/chaos/app-pod-failure/test.yml
PLAY [localhost] 
time:2019-10-22T09:32:35.674168 (delta: 0.040952)         elapsed: 0.040952  
``` 

## TASK [Gathering Facts] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:2
time:2019-10-22T09:32:35.683676 (delta: 0.009465)         elapsed: 0.05046  
ok: [127.0.0.1]
META: ran handlers
``` 

## TASK [Setup] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:22
time:2019-10-22T09:32:41.686005 (delta: 6.002295)         elapsed: 6.052789  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Checking status of liveness pod] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:29
time:2019-10-22T09:32:41.724829 (delta: 0.038804)         elapsed: 6.091613  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record test instance/run ID] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:42
time:2019-10-22T09:32:41.761581 (delta: 0.036722)         elapsed: 6.128365  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Construct testname appended with runID] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:46
time:2019-10-22T09:32:41.798056 (delta: 0.036451)         elapsed: 6.16484  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Generate the litmus result CR to reflect SOT (Start of Test)] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:52
time:2019-10-22T09:32:41.837476 (delta: 0.039398)         elapsed: 6.20426  
changed: [127.0.0.1] => {"changed": true, "checksum": "65f1f8950b2a825fd3c27f66a8ec4113524d53c0", "dest": "./litmus-result.yaml", "gid": 0, "group": "root", "md5sum": "5324f15d0d02e6175cce9e8a64219dfe", "mode": "0644", "owner": "root", "size": 416, "src": "/root/.ansible/tmp/ansible-tmp-1571736761.86-229086193671283/source", "state": "file", "uid": 0}
``` 

## TASK [Apply the litmus result CR] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:63
time:2019-10-22T09:32:42.227249 (delta: 0.389733)         elapsed: 6.594033  
changed: [127.0.0.1] => {"changed": true, "cmd": "kubectl apply -f litmus-result.yaml", "delta": "0:00:01.339873", "end": "2019-10-22 09:32:43.753129", "failed_when_result": false, "rc": 0, "start": "2019-10-22 09:32:42.413256", "stderr": "", "stderr_lines": [], "stdout": "litmusresult.litmus.io/app-pod-failure created", "stdout_lines": ["litmusresult.litmus.io/app-pod-failure created"]}
``` 

## TASK [Display the app information passed via the test job] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:72
time:2019-10-22T09:32:43.800883 (delta: 1.573613)         elapsed: 8.167667  
ok: [127.0.0.1] => {
    "msg": [
        "The application info is as follows:", 
        "Namespace    : default", 
        "Label        : statefulset.kubernetes.io/pod-name=cass-demo-dc1-rack1-0"
    ]
}
``` 

## TASK [Verify that the AUT is running] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:80
time:2019-10-22T09:32:43.864344 (delta: 0.063425)         elapsed: 8.231128  
included: /utils/k8s/check_deployment_status.yml for 127.0.0.1
``` 

## TASK [Check the pod status] 
``` 
task path: /utils/k8s/check_deployment_status.yml:8
time:2019-10-22T09:32:43.929680 (delta: 0.065294)         elapsed: 8.296464  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [obtain the number of replicas.] 
``` 
task path: /utils/k8s/check_deployment_status.yml:22
time:2019-10-22T09:32:43.968507 (delta: 0.038789)         elapsed: 8.335291  
changed: [127.0.0.1] => {"attempts": 1, "changed": true, "cmd": "kubectl get statefulset -n default -l statefulset.kubernetes.io/pod-name=cass-demo-dc1-rack1-0 -o custom-columns=:spec.replicas", "delta": "0:00:00.446878", "end": "2019-10-22 09:32:44.528493", "rc": 0, "start": "2019-10-22 09:32:44.081615", "stderr": "", "stderr_lines": [], "stdout": "", "stdout_lines": []}
``` 

## TASK [Obtain the ready replica count and compare with the replica count.] 
``` 
task path: /utils/k8s/check_deployment_status.yml:29
time:2019-10-22T09:32:44.566536 (delta: 0.598006)         elapsed: 8.93332  
changed: [127.0.0.1] => {"attempts": 1, "changed": true, "cmd": "kubectl get statefulset -n default -l statefulset.kubernetes.io/pod-name=cass-demo-dc1-rack1-0 -o custom-columns=:..readyReplicas", "delta": "0:00:00.456628", "end": "2019-10-22 09:32:45.138732", "rc": 0, "start": "2019-10-22 09:32:44.682104", "stderr": "", "stderr_lines": [], "stdout": "", "stdout_lines": []}
``` 

## TASK [Get application pod name] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:84
time:2019-10-22T09:32:45.177247 (delta: 0.61069)         elapsed: 9.544031  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [include_tasks] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:94
time:2019-10-22T09:32:45.218924 (delta: 0.041646)         elapsed: 9.585708  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Get application pod name] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:105
time:2019-10-22T09:32:45.256949 (delta: 0.037995)         elapsed: 9.623733  
changed: [127.0.0.1] => {"changed": true, "cmd": "kubectl get pod -n default -l statefulset.kubernetes.io/pod-name=cass-demo-dc1-rack1-0 -o jsonpath='{.items[0].metadata.name}'", "delta": "0:00:00.465754", "end": "2019-10-22 09:32:45.826833", "rc": 0, "start": "2019-10-22 09:32:45.361079", "stderr": "", "stderr_lines": [], "stdout": "cass-demo-dc1-rack1-0", "stdout_lines": ["cass-demo-dc1-rack1-0"]}
``` 

## TASK [include_tasks] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:114
time:2019-10-22T09:32:45.861121 (delta: 0.604145)         elapsed: 10.227905  
included: /chaoslib/pumba/pod_failure_by_sigkill.yaml for 127.0.0.1
``` 

## TASK [Setup pumba chaos infrastructure] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:4
time:2019-10-22T09:32:45.973179 (delta: 0.112037)         elapsed: 10.339963  
changed: [127.0.0.1] => {"changed": true, "cmd": "kubectl apply -f /chaoslib/pumba/pumba_kube.yaml -n default", "delta": "0:00:00.570165", "end": "2019-10-22 09:32:46.653936", "rc": 0, "start": "2019-10-22 09:32:46.083771", "stderr": "", "stderr_lines": [], "stdout": "daemonset.extensions/pumba created", "stdout_lines": ["daemonset.extensions/pumba created"]}
``` 

## TASK [Confirm that the pumba ds is running on all nodes] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:13
time:2019-10-22T09:32:46.695020 (delta: 0.721818)         elapsed: 11.061804  
FAILED - RETRYING: Confirm that the pumba ds is running on all nodes (60 retries left).
FAILED - RETRYING: Confirm that the pumba ds is running on all nodes (59 retries left).
changed: [127.0.0.1] => {"attempts": 3, "changed": true, "cmd": "kubectl get pod -l app=pumba --no-headers -o custom-columns=:status.phase -n default | sort | uniq", "delta": "0:00:00.442172", "end": "2019-10-22 09:32:50.461738", "rc": 0, "start": "2019-10-22 09:32:50.019566", "stderr": "", "stderr_lines": [], "stdout": "Running", "stdout_lines": ["Running"]}
``` 

## TASK [Select the app pod] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:27
time:2019-10-22T09:32:50.496854 (delta: 3.801803)         elapsed: 14.863638  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record application pod name] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:36
time:2019-10-22T09:32:50.538436 (delta: 0.041559)         elapsed: 14.90522  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record application pod name] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:43
time:2019-10-22T09:32:50.579263 (delta: 0.040803)         elapsed: 14.946047  
ok: [127.0.0.1] => {"ansible_facts": {"app_pod_ut": "cass-demo-dc1-rack1-0"}, "changed": false}
``` 

## TASK [Identify the application node] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:49
time:2019-10-22T09:32:50.638684 (delta: 0.059401)         elapsed: 15.005468  
changed: [127.0.0.1] => {"changed": true, "cmd": "kubectl get pod cass-demo-dc1-rack1-0 -n default --no-headers -o custom-columns=:spec.nodeName", "delta": "0:00:00.437792", "end": "2019-10-22 09:32:51.176349", "rc": 0, "start": "2019-10-22 09:32:50.738557", "stderr": "", "stderr_lines": [], "stdout": "minikube", "stdout_lines": ["minikube"]}
``` 

## TASK [Record the application node name] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:57
time:2019-10-22T09:32:51.209999 (delta: 0.571294)         elapsed: 15.576783  
ok: [127.0.0.1] => {"ansible_facts": {"app_node": "minikube"}, "changed": false}
``` 

## TASK [Record the application container] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:63
time:2019-10-22T09:32:51.270142 (delta: 0.060122)         elapsed: 15.636926  
changed: [127.0.0.1] => {"changed": true, "cmd": "kubectl get pods -l statefulset.kubernetes.io/pod-name=cass-demo-dc1-rack1-0 -n default -o jsonpath='{.items[0].spec.containers[0].name}'", "delta": "0:00:00.439683", "end": "2019-10-22 09:32:51.814367", "rc": 0, "start": "2019-10-22 09:32:51.374684", "stderr": "", "stderr_lines": [], "stdout": "cassandra", "stdout_lines": ["cassandra"]}
``` 

## TASK [Record the app_container] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:70
time:2019-10-22T09:32:51.847909 (delta: 0.577746)         elapsed: 16.214693  
ok: [127.0.0.1] => {"ansible_facts": {"app_container": "cassandra"}, "changed": false}
``` 

## TASK [Record the pumba pod on app node] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:76
time:2019-10-22T09:32:51.907859 (delta: 0.059927)         elapsed: 16.274643  
changed: [127.0.0.1] => {"changed": true, "cmd": "kubectl get pod -l app=pumba -o wide -n default | grep minikube | awk '{print $1}'", "delta": "0:00:00.457465", "end": "2019-10-22 09:32:52.463953", "rc": 0, "start": "2019-10-22 09:32:52.006488", "stderr": "", "stderr_lines": [], "stdout": "pumba-m9fhv", "stdout_lines": ["pumba-m9fhv"]}
``` 

## TASK [Record restartCount] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:85
time:2019-10-22T09:32:52.497435 (delta: 0.589554)         elapsed: 16.864219  
changed: [127.0.0.1] => {"changed": true, "cmd": "kubectl get pod cass-demo-dc1-rack1-0 -n default -o=jsonpath='{.status.containerStatuses[?(@.name==\"cassandra\")].restartCount}'", "delta": "0:00:00.445335", "end": "2019-10-22 09:32:53.043548", "rc": 0, "start": "2019-10-22 09:32:52.598213", "stderr": "", "stderr_lines": [], "stdout": "5", "stdout_lines": ["5"]}
``` 

## TASK [Force kill the application pod using pumba] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:93
time:2019-10-22T09:32:53.077400 (delta: 0.579931)         elapsed: 17.444184  
changed: [127.0.0.1] => {"changed": true, "cmd": "kubectl exec pumba-m9fhv -n default -- pumba kill --signal SIGKILL re2:k8s_cassandra_;", "delta": "0:00:02.174077", "end": "2019-10-22 09:32:55.351290", "rc": 0, "start": "2019-10-22 09:32:53.177213", "stderr": "time=\"2019-10-22T09:32:53Z\" level=info msg=\"Kill containers\" \ntime=\"2019-10-22T09:32:55Z\" level=info msg=\"Killing /k8s_cassandra_cass-demo-dc1-rack1-1_default_af292200-2d06-4f19-9970-e64d00ed8302_5 (adf6e7b0f6a8c4e23be92ac5f291e8809bd47205716f55252db121313be4dd00) with signal SIGKILL\" \ntime=\"2019-10-22T09:32:55Z\" level=info msg=\"Killing /k8s_cassandra_cass-demo-dc1-rack1-0_default_3fcd5226-3229-4deb-9930-279e6eec50cc_5 (f84f21e935ce22b26c8c4053354726b34e515e94f64b27e3e0564c929e1472f4) with signal SIGKILL\" ", "stderr_lines": ["time=\"2019-10-22T09:32:53Z\" level=info msg=\"Kill containers\" ", "time=\"2019-10-22T09:32:55Z\" level=info msg=\"Killing /k8s_cassandra_cass-demo-dc1-rack1-1_default_af292200-2d06-4f19-9970-e64d00ed8302_5 (adf6e7b0f6a8c4e23be92ac5f291e8809bd47205716f55252db121313be4dd00) with signal SIGKILL\" ", "time=\"2019-10-22T09:32:55Z\" level=info msg=\"Killing /k8s_cassandra_cass-demo-dc1-rack1-0_default_3fcd5226-3229-4deb-9930-279e6eec50cc_5 (f84f21e935ce22b26c8c4053354726b34e515e94f64b27e3e0564c929e1472f4) with signal SIGKILL\" "], "stdout": "", "stdout_lines": []}
``` 

## TASK [Verify restartCount] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:102
time:2019-10-22T09:32:55.389173 (delta: 2.311746)         elapsed: 19.755957  
FAILED - RETRYING: Verify restartCount (30 retries left).
changed: [127.0.0.1] => {"attempts": 2, "changed": true, "cmd": "kubectl get pod cass-demo-dc1-rack1-0 -n default -o=jsonpath='{.status.containerStatuses[?(@.name==\"cassandra\")].restartCount}'", "delta": "0:00:00.471000", "end": "2019-10-22 09:32:58.525225", "rc": 0, "start": "2019-10-22 09:32:58.054225", "stderr": "", "stderr_lines": [], "stdout": "6", "stdout_lines": ["6"]}
``` 

## TASK [Check if pumba is indeed running] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:117
time:2019-10-22T09:32:58.565366 (delta: 3.176158)         elapsed: 22.93215  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Delete the pumba daemonset] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:132
time:2019-10-22T09:32:58.617708 (delta: 0.052315)         elapsed: 22.984492  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Confirm that the pumba ds is deleted successfully] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:139
time:2019-10-22T09:32:58.658968 (delta: 0.041197)         elapsed: 23.025752  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Checkpoint] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:127
time:2019-10-22T09:32:58.702607 (delta: 0.043593)         elapsed: 23.069391  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Verify AUT liveness post fault-injection] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:134
time:2019-10-22T09:32:58.746531 (delta: 0.043879)         elapsed: 23.113315  
included: /utils/k8s/check_deployment_status.yml for 127.0.0.1
``` 

## TASK [Check the pod status] 
``` 
task path: /utils/k8s/check_deployment_status.yml:8
time:2019-10-22T09:32:58.808217 (delta: 0.061654)         elapsed: 23.175001  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [obtain the number of replicas.] 
``` 
task path: /utils/k8s/check_deployment_status.yml:22
time:2019-10-22T09:32:58.850771 (delta: 0.042514)         elapsed: 23.217555  
changed: [127.0.0.1] => {"attempts": 1, "changed": true, "cmd": "kubectl get statefulset -n default -l statefulset.kubernetes.io/pod-name=cass-demo-dc1-rack1-0 -o custom-columns=:spec.replicas", "delta": "0:00:00.487258", "end": "2019-10-22 09:32:59.454084", "rc": 0, "start": "2019-10-22 09:32:58.966826", "stderr": "", "stderr_lines": [], "stdout": "", "stdout_lines": []}
``` 

## TASK [Obtain the ready replica count and compare with the replica count.] 
``` 
task path: /utils/k8s/check_deployment_status.yml:29
time:2019-10-22T09:32:59.502144 (delta: 0.651351)         elapsed: 23.868928  
changed: [127.0.0.1] => {"attempts": 1, "changed": true, "cmd": "kubectl get statefulset -n default -l statefulset.kubernetes.io/pod-name=cass-demo-dc1-rack1-0 -o custom-columns=:..readyReplicas", "delta": "0:00:00.460006", "end": "2019-10-22 09:33:00.079589", "rc": 0, "start": "2019-10-22 09:32:59.619583", "stderr": "", "stderr_lines": [], "stdout": "", "stdout_lines": []}
``` 

## TASK [Checking status of liveness pod] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:139
time:2019-10-22T09:33:00.131823 (delta: 0.629637)         elapsed: 24.498607  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [set_fact] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:148
time:2019-10-22T09:33:00.169972 (delta: 0.038111)         elapsed: 24.536756  
ok: [127.0.0.1] => {"ansible_facts": {"flag": "Pass"}, "changed": false}
``` 

## TASK [Generate the litmus result CR to reflect EOT (End of Test)] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:159
time:2019-10-22T09:33:00.230381 (delta: 0.060385)         elapsed: 24.597165  
changed: [127.0.0.1] => {"changed": true, "checksum": "0ce715eedb8ca906ea535c15dc4cf27e5c351360", "dest": "./litmus-result.yaml", "gid": 0, "group": "root", "md5sum": "e9d551b88b01b393b3e36a1afeb12822", "mode": "0644", "owner": "root", "size": 414, "src": "/root/.ansible/tmp/ansible-tmp-1571736780.27-79185624627260/source", "state": "file", "uid": 0}
``` 

## TASK [Apply the litmus result CR] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:170
time:2019-10-22T09:33:01.259316 (delta: 1.028891)         elapsed: 25.6261  
changed: [127.0.0.1] => {"changed": true, "cmd": "kubectl apply -f litmus-result.yaml", "delta": "0:00:00.680528", "end": "2019-10-22 09:33:02.041191", "failed_when_result": false, "rc": 0, "start": "2019-10-22 09:33:01.360663", "stderr": "", "stderr_lines": [], "stdout": "litmusresult.litmus.io/app-pod-failure configured", "stdout_lines": ["litmusresult.litmus.io/app-pod-failure configured"]}
``` 

## TASK [include_tasks] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:177
time:2019-10-22T09:33:02.082162 (delta: 0.822823)         elapsed: 26.448946  
included: /chaoslib/pumba/pod_failure_by_sigkill.yaml for 127.0.0.1
``` 

## TASK [Setup pumba chaos infrastructure] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:4
time:2019-10-22T09:33:02.167201 (delta: 0.084983)         elapsed: 26.533985  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Confirm that the pumba ds is running on all nodes] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:13
time:2019-10-22T09:33:02.210265 (delta: 0.043041)         elapsed: 26.577049  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Select the app pod] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:27
time:2019-10-22T09:33:02.246121 (delta: 0.035817)         elapsed: 26.612905  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record application pod name] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:36
time:2019-10-22T09:33:02.279515 (delta: 0.033368)         elapsed: 26.646299  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record application pod name] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:43
time:2019-10-22T09:33:02.313912 (delta: 0.034359)         elapsed: 26.680696  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Identify the application node] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:49
time:2019-10-22T09:33:02.348276 (delta: 0.034334)         elapsed: 26.71506  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record the application node name] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:57
time:2019-10-22T09:33:02.382690 (delta: 0.034383)         elapsed: 26.749474  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record the application container] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:63
time:2019-10-22T09:33:02.423818 (delta: 0.041072)         elapsed: 26.790602  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record the app_container] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:70
time:2019-10-22T09:33:02.460732 (delta: 0.036856)         elapsed: 26.827516  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record the pumba pod on app node] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:76
time:2019-10-22T09:33:02.524203 (delta: 0.06345)         elapsed: 26.890987  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record restartCount] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:85
time:2019-10-22T09:33:02.581366 (delta: 0.057111)         elapsed: 26.94815  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Force kill the application pod using pumba] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:93
time:2019-10-22T09:33:02.624084 (delta: 0.042667)         elapsed: 26.990868  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Verify restartCount] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:102
time:2019-10-22T09:33:02.656630 (delta: 0.032513)         elapsed: 27.023414  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Check if pumba is indeed running] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:117
time:2019-10-22T09:33:02.694621 (delta: 0.037969)         elapsed: 27.061405  
changed: [127.0.0.1] => {"attempts": 1, "changed": true, "cmd": "kubectl get pod -l app=pumba --no-headers -o custom-columns=:status.phase -n default | sort | uniq", "delta": "0:00:00.474286", "end": "2019-10-22 09:33:03.279996", "rc": 0, "start": "2019-10-22 09:33:02.805710", "stderr": "", "stderr_lines": [], "stdout": "Running", "stdout_lines": ["Running"]}
``` 

## TASK [Delete the pumba daemonset] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:132
time:2019-10-22T09:33:03.322117 (delta: 0.627443)         elapsed: 27.688901  
changed: [127.0.0.1] => {"changed": true, "cmd": "kubectl delete -f /chaoslib/pumba/pumba_kube.yaml -n default", "delta": "0:00:00.497277", "end": "2019-10-22 09:33:03.942872", "rc": 0, "start": "2019-10-22 09:33:03.445595", "stderr": "", "stderr_lines": [], "stdout": "daemonset.extensions \"pumba\" deleted", "stdout_lines": ["daemonset.extensions \"pumba\" deleted"]}
``` 

## TASK [Confirm that the pumba ds is deleted successfully] 
``` 
task path: /chaoslib/pumba/pod_failure_by_sigkill.yaml:139
time:2019-10-22T09:33:03.978190 (delta: 0.656028)         elapsed: 28.344974  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Cleanup] 
``` 
task path: /experiments/chaos/app-pod-failure/test.yml:186
time:2019-10-22T09:33:04.018832 (delta: 0.040603)         elapsed: 28.385616  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
META: ran handlers
META: ran handlers
PLAY RECAP 
7.0.0.1[0m                  : [0;32mok=29  [0m [0;33mchanged=19  [0m unreachable=0    failed=0   
time:2019-10-22T09:33:04.045610 (delta: 0.026746)         elapsed: 28.412394  
amber: case app-pod-failure is going to finish...
amber: result would be available in CRD 'litmusresult' form. Use 'kubectl get lr' for details.
``` 
