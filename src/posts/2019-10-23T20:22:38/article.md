=== 

标题： CommitID[11f70fs6s6ss]2019-10-23T20:22:38
标签： network-delay

===


# Summary report 
| Task status | number |
| ------------ | ------------ |
|      ok |      4
|      change |      2
|      unreachable |      0
|      failed |      2
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
 plays in ./experiments/chaos/test-kil-pod/test.yml
PLAY [localhost] 
time:2019-10-22T09:29:57.520349 (delta: 0.025844)         elapsed: 0.025844  
``` 

## TASK [Gathering Facts] 
``` 
task path: /experiments/chaos/test-kil-pod/test.yml:2
time:2019-10-22T09:29:57.525821 (delta: 0.005457)         elapsed: 0.031316  
ok: [127.0.0.1]
META: ran handlers
``` 

## TASK [Setup] 
``` 
task path: /experiments/chaos/test-kil-pod/test.yml:22
time:2019-10-22T09:30:01.478122 (delta: 3.952288)         elapsed: 3.983617  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Checking status of liveness pod] 
``` 
task path: /experiments/chaos/test-kil-pod/test.yml:29
time:2019-10-22T09:30:01.504660 (delta: 0.026522)         elapsed: 4.010155  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Record test instance/run ID] 
``` 
task path: /experiments/chaos/test-kil-pod/test.yml:42
time:2019-10-22T09:30:01.529959 (delta: 0.025251)         elapsed: 4.035454  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Construct testname appended with runID] 
``` 
task path: /experiments/chaos/test-kil-pod/test.yml:46
time:2019-10-22T09:30:01.554921 (delta: 0.024944)         elapsed: 4.060416  
skipping: [127.0.0.1] => {"changed": false, "skip_reason": "Conditional result was False"}
``` 

## TASK [Generate the litmus result CR to reflect SOT (Start of Test)] 
``` 
task path: /experiments/chaos/test-kil-pod/test.yml:52
time:2019-10-22T09:30:01.579924 (delta: 0.024985)         elapsed: 4.085419  
changed: [127.0.0.1] => {"changed": true, "checksum": "f81d110b68adb61b8825de7c3d7f4b3df1b501f8", "dest": "./litmus-result.yaml", "gid": 0, "group": "root", "md5sum": "c65861c9362d3c8439358c316152274c", "mode": "0644", "owner": "root", "size": 413, "src": "/root/.ansible/tmp/ansible-tmp-1571736601.6-15922123312454/source", "state": "file", "uid": 0}
``` 

## TASK [Apply the litmus result CR] 
``` 
task path: /experiments/chaos/test-kil-pod/test.yml:63
time:2019-10-22T09:30:02.318670 (delta: 0.738727)         elapsed: 4.824165  
fatal: [127.0.0.1]: FAILED! => {"changed": true, "cmd": "kubectl apply -f litmus-result.yaml", "delta": "0:00:00.386998", "end": "2019-10-22 09:30:02.841993", "failed_when_result": true, "msg": "non-zero return code", "rc": 1, "start": "2019-10-22 09:30:02.454995", "stderr": "Error in configuration: \n unable to read client-cert /home/SENSETIME/tangqing2/.minikube/client.crt for minikube due to open /home/SENSETIME/tangqing2/.minikube/client.crt: no such file or directory\n unable to read client-key /home/SENSETIME/tangqing2/.minikube/client.key for minikube due to open /home/SENSETIME/tangqing2/.minikube/client.key: no such file or directory\n unable to read certificate-authority /home/SENSETIME/tangqing2/.minikube/ca.crt for minikube due to open /home/SENSETIME/tangqing2/.minikube/ca.crt: no such file or directory", "stderr_lines": ["Error in configuration: ", " unable to read client-cert /home/SENSETIME/tangqing2/.minikube/client.crt for minikube due to open /home/SENSETIME/tangqing2/.minikube/client.crt: no such file or directory", " unable to read client-key /home/SENSETIME/tangqing2/.minikube/client.key for minikube due to open /home/SENSETIME/tangqing2/.minikube/client.key: no such file or directory", " unable to read certificate-authority /home/SENSETIME/tangqing2/.minikube/ca.crt for minikube due to open /home/SENSETIME/tangqing2/.minikube/ca.crt: no such file or directory"], "stdout": "", "stdout_lines": []}
``` 

## TASK [set_fact] 
``` 
task path: /experiments/chaos/test-kil-pod/test.yml:152
time:2019-10-22T09:30:02.869357 (delta: 0.550668)         elapsed: 5.374852  
ok: [127.0.0.1] => {"ansible_facts": {"flag": "Fail"}, "changed": false}
``` 

## TASK [Generate the litmus result CR to reflect EOT (End of Test)] 
``` 
task path: /experiments/chaos/test-kil-pod/test.yml:159
time:2019-10-22T09:30:02.902128 (delta: 0.032751)         elapsed: 5.407623  
changed: [127.0.0.1] => {"changed": true, "checksum": "032fbf1a09bbe4384dc7ccf52080d9aeca806323", "dest": "./litmus-result.yaml", "gid": 0, "group": "root", "md5sum": "e125d36fb6e935332e127564201fb1e1", "mode": "0644", "owner": "root", "size": 411, "src": "/root/.ansible/tmp/ansible-tmp-1571736602.92-122613202543123/source", "state": "file", "uid": 0}
``` 

## TASK [Apply the litmus result CR] 
``` 
task path: /experiments/chaos/test-kil-pod/test.yml:170
time:2019-10-22T09:30:03.500344 (delta: 0.598197)         elapsed: 6.005839  
fatal: [127.0.0.1]: FAILED! => {"changed": true, "cmd": "kubectl apply -f litmus-result.yaml", "delta": "0:00:00.261548", "end": "2019-10-22 09:30:03.832748", "failed_when_result": true, "msg": "non-zero return code", "rc": 1, "start": "2019-10-22 09:30:03.571200", "stderr": "Error in configuration: \n unable to read client-cert /home/SENSETIME/tangqing2/.minikube/client.crt for minikube due to open /home/SENSETIME/tangqing2/.minikube/client.crt: no such file or directory\n unable to read client-key /home/SENSETIME/tangqing2/.minikube/client.key for minikube due to open /home/SENSETIME/tangqing2/.minikube/client.key: no such file or directory\n unable to read certificate-authority /home/SENSETIME/tangqing2/.minikube/ca.crt for minikube due to open /home/SENSETIME/tangqing2/.minikube/ca.crt: no such file or directory", "stderr_lines": ["Error in configuration: ", " unable to read client-cert /home/SENSETIME/tangqing2/.minikube/client.crt for minikube due to open /home/SENSETIME/tangqing2/.minikube/client.crt: no such file or directory", " unable to read client-key /home/SENSETIME/tangqing2/.minikube/client.key for minikube due to open /home/SENSETIME/tangqing2/.minikube/client.key: no such file or directory", " unable to read certificate-authority /home/SENSETIME/tangqing2/.minikube/ca.crt for minikube due to open /home/SENSETIME/tangqing2/.minikube/ca.crt: no such file or directory"], "stdout": "", "stdout_lines": []}
PLAY RECAP 
7.0.0.1                  : [0;32mok=4    [0;33mchanged=2    unreachable=0    [0;31mfailed=2   
time:2019-10-22T09:30:03.847634 (delta: 0.347272)         elapsed: 6.353129  
amber: case test-kil-pod is going to finish...
amber: result would be available in CRD 'litmusresult' form. Use 'kubectl get lr' for details.
``` 
